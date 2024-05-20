const inputBox= document.getElementById("input-box")
const listContainer= document.getElementById("list-container")
let btn= document.getElementById("btn")

function addTask(){
    if(inputBox.value===''){
        Swal.fire({
            icon: 'info',
            title: 'Task can\'t be empty',
            text: 'Enter something',
          }) 
    }
    else{
        let li= document.createElement("li")
        li.innerHTML= inputBox.value
        listContainer.appendChild(li)
        let span= document.createElement("span")
        span.innerHTML= "\u00d7"
        li.appendChild(span)
    }
    inputBox.value= ""
    saveData()
}

btn.addEventListener('click', (ev)=>{
    console.log("Btn clicked")
  })

  document.addEventListener('keypress', (event)=>{
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if(keyCode === 13) {
      btn.click();
    }
  })

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML= localStorage.getItem("data")
}

showTask()