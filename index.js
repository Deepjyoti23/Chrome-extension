let myLeads = []; 
const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn= document.getElementById("save-tab");


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    renderLeads(myLeads); 
}

// const tabs = [{url :"https://www.linkedin.com/in/deepjyoti1999"}]

// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   })

tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active: true, currentWindow: true},function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads(myLeads);
    
    })
    // console.log(tabs[0].url);
})

function renderLeads(leads) {

    let listItems = "";
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a></li>";
        listItems += `
            <li>
                <a href='${leads[i]}' target = '_blank'> 
                    ${leads[i]}
                </a>
            </li>
        `;
    }
    ulEl.innerHTML = listItems;
}


deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    renderLeads(myLeads);
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
    // console.log(localStorage.getItem("myLeads"));
})

//Using stringify to convert array into string
// myLeads = JSON.stringify(myLeads);
// console.log(myLeads);


//Usimg JSON.parse to convert string to array
// let myLeads =` ["www.awesome.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epliclead.com")
// console.log(myLeads);

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings


// localStorage.setItem("myLeads","www.exampleLead.com")
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();


// function renderLeads() {

//     let listItems = "";
//     for (let i = 0; i < myLeads.length; i++) {
//         // listItems += "<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a></li>";
//         listItems += `
//             <li>
//                 <a href='${myLeads[i]}' target = '_blank'> 
//                     ${myLeads[i]}
//                 </a>
//             </li>
//         `;
//         //first way of doing this
//         //  ulEl.innerHTML += "<li><a href='#'>" + myLeads[i] + "</a></li>"
//         // console.log(myLeads[i]);
//         //second way
//         //create element
//         //set text content
//         //append to ul
//         // const li =document.createElement("li")
//         // li.textContent = myLeads[i];
//         // ulEl.append(li)
//     }
//     ulEl.innerHTML = listItems;
// }
