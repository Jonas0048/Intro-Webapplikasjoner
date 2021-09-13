// Oppgave 1
document.getElementById("remove-btn").onclick = ()=> document.getElementById("remove").remove();

// Oppgave 2
document.getElementById("change-btn").onclick = ()=>{
    let txt = document.getElementById("change");

    let scramble = (array)=> {
        array = array.split('')
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join("");     
    }

   txt.innerText = scramble(txt.innerHTML.trim())
}

// Oppgave 3
document.getElementById("input").addEventListener("keyup", (e)=> {
    document.getElementById("input-text").innerHTML = e.target.value
})

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
document.getElementById("write-list").onclick = ()=> {
    let outList = document.getElementById("ul");

    myList.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.appendChild(document.createTextNode(item));
        outList.appendChild(listItem);
    })
}

// Oppgave 5
document.getElementById("create").onclick = ()=>{
    const out = document.getElementById("placeholder");
    let inputText = document.getElementById("text").value;
    let type = document.getElementById("select").value;
    
    let newItem = document.createElement(type);
    newItem.appendChild(document.createTextNode(inputText));
    out.appendChild(newItem);
}
// Oppgave 6
document.getElementById("remove-li").onclick = ()=> document.querySelector("#list li").remove(); 

// Oppgave 7
document.getElementById("name").addEventListener("keyup", (e)=> {
    const btn = document.getElementById("order");
    e.target.value.length > 4 ? btn.disabled = true : btn.disabled = false;
})

// Oppgave 8
document.getElementById("color").onclick = ()=> {
    let allChildren = document.querySelectorAll(".children li");
    for(let i = 0; i < allChildren.length; i++){
        i % 2 ? allChildren[i].style.border = "1px solid red" : allChildren[i].style.border = "1px solid green";
    }
}