let list=[
    
]
let container=document.querySelector(".container")
let btn=document.querySelector(".add")
let modal=document.querySelector(".modal")
let toDo=document.querySelector('.to-do')
let time=document.querySelector('.time')
let date=document.querySelector('.date')
let close=document.querySelector('.close')
let addBtn=document.querySelector(".insert")
let taskHolder="Task:"
let timeHolder="Time:"
let dateHolder="Date:"



btn.addEventListener("click",openModel)
function openModel(){
    modal.showModal()
}
close.addEventListener("click",()=>{
    modal.close()
})

addBtn.addEventListener("click",()=>{
    let length=0
    list.push(new task(toDo.value,date.value,time.value))
    // console.log(list)
    length=list.length
    createCard(length-1)
    clearModal()
    console.log(list)
})

//constructor
function task(name,date,time){
    this.name=name
    this.date=date
    this.time=time
}

//clearing dialog 
function clearModal(){
    toDo.value=""
    date.value=""
    time.value=""
}

function createCard(len){
    //creating Elements
    let d=document.createElement("div")
    let h2=document.createElement("h4")
    let h=document.createElement("h3")
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let d2=document.createElement("div")
    let p3=document.createElement("p")
    let ch=document.createElement("input")
    let select=document.createElement("select")
    let opt1=document.createElement("option")
    let opt2=document.createElement("option")
    let optMain=document.createElement("option")
    ch.setAttribute("type", "checkbox")
    d.classList.add("card")
    h2.textContent="Task "+(len+1)
    h.textContent=taskHolder+" "+list[len].name
    p1.textContent=dateHolder+" "+list[len].date
    p2.textContent=timeHolder+" "+list[len].time
    d.appendChild(h2)
    d.appendChild(h)
    d.appendChild(p1)
    d.appendChild(p2)

    p3.textContent="Completed"
    d2.appendChild(p3)
    d2.appendChild(ch)
    d.appendChild(d2)
    container.appendChild(d)
    optMain.text="----Select-Priority----"
    select.add(optMain)
    opt1.text='high-priority'
    select.add(opt1)
    opt2.text='low-priority'
    select.add(opt2)
    d.appendChild(select)
}

list.push(new task("Practice","2024-12-12","12:12"))
 createCard(0)
