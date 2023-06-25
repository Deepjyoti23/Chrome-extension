let myLeads = [];
//Using stringify to convert array into string
// myLeads = JSON.stringify(myLeads);
// console.log(myLeads);


//Usimg JSON.parse to convert string to array
// let myLeads =` ["www.awesome.com"]`;
// myLeads = JSON.parse(myLeads);
// myLeads.push("www.epliclead.com")
// console.log(myLeads);


const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

const  leadsFromLocalStorage = JSON.parselocalStorage.getItem(myLeads)

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

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads",JSON.stringify(myLeads));


    renderLeads();

    console.log(localStorage.getItem("myLeads"));
})
function renderLeads() {

    let listItems = "";
    for (let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a href='" + myLeads[i] + "' target = '_blank'>" + myLeads[i] + "</a></li>";
        listItems += `
            <li>
                <a href='${myLeads[i]}' target = '_blank'> 
                    ${myLeads[i]}
                </a>
            </li>
        `;
        //first way of doing this
        //  ulEl.innerHTML += "<li><a href='#'>" + myLeads[i] + "</a></li>"
        // console.log(myLeads[i]);
        //second way
        //create element
        //set text content
        //append to ul
        // const li =document.createElement("li")
        // li.textContent = myLeads[i];
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems;
}
