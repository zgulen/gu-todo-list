const ulTodo = document.querySelector(".container__todo--mission")
const ulDoing = document.querySelector(".container__todo--doing")
const ulDone = document.querySelector(".container__todo--done")
function addMission() {
    //! move from "input" to "to do"
    let li = document.createElement("li")
    let input = document.getElementById("input")
    let text = document.createTextNode(input.value)
    let symbol = document.createElement("i")
    symbol.className = "fa-solid fa-arrow-right"
    li.className = "todo-list"
    console.log(text);
    li.appendChild(text)
    li.appendChild(symbol)
    ulTodo.appendChild(li)
    li.style.textAlign = "left"
    input.value = ""
    input.focus()

    symbol.addEventListener("click", (e) => {
        //! move from "to do" to "Doing"
        let li2 = document.createElement("li")
        let symbol2 = document.createElement("i")
        let text = document.createTextNode(li.innerText)
        symbol2.className = "fa-solid fa-arrow-right"
        li2.className = "doing-list"
        li2.appendChild(text)
        ulDoing.appendChild(li2)
        li2.appendChild(symbol2)
        li.innerText = ""

        symbol2.addEventListener("click", (e) => {
            //! move from "Doing" to "Done"
            let li3 = document.createElement("li")
            let symbol3 = document.createElement("i")
            let text = document.createTextNode(li2.innerText)
            symbol3.className = "fa-solid fa-check"
            li3.className = "doing-list"
            li3.appendChild(text)
            ulDone.appendChild(li3)
            li3.appendChild(symbol3)
            li2.innerText = ""
            symbol3.addEventListener("click", (e) => {
                //! move from "Doing" to "Done"
                li3.style.textDecoration = "line-through"
                li3.style.color = "#28a745"
                symbol3.className = ""
                // let info = document.createElement("p")
                // let message = document.createTextNode("Congratulations")
                // info.appendChild(message)
                // ulDone.appendChild(info)
                // li3.innerHTML = ""
                // info.style.color = "#28a745"
            })
        })

    })
}