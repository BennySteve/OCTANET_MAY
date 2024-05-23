var list=[
    
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
let nowDate=new Date()
let dateHolder="Date:"
let today=nowDate.toISOString().split('T')[0]
let now_time=nowDate.getHours()+":"+nowDate.getMinutes()
// console.log(now_time)
// console.log(nowDate.toISOString().split('T')[0])


btn.addEventListener("click",openModel)
function openModel(){
    modal.showModal()
}
close.addEventListener("click",()=>{
    modal.close()
})

addBtn.addEventListener("click",()=>{
    let length=0
    checkDate(date.value)
    check_toDo(toDo.value)
    if(checkDate(date.value,toDo.value)&&check_toDo(toDo.value)){
        list.push(new task(toDo.value,date.value,time.value))
        // console.log(list)
        length=list.length
        createCard(length-1)
    }
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
    // let d3=document.createElement("div")
    let h2=document.createElement("h4")
    let h=document.createElement("h3")
    let p1=document.createElement("p")
    let p2=document.createElement("p")
    let d2=document.createElement("div")
    let p3=document.createElement("p")
    var ch=document.createElement("input")
    var select=document.createElement("select")
    select.addEventListener('change',()=>{
        if(select.value=='high-priority'){
            numberOfPriorityTask--
            select.parentElement.style.order=numberOfPriorityTask
            
        }
        else{
            select.parentElement.style.order=0
        }
        
    })
    let opt1=document.createElement("option")
    let opt2=document.createElement("option")
    let optMain=document.createElement("option")

    select.classList.add("priority")
    ch.setAttribute("type", "checkbox")
    ch.classList.add('finished')
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


    ch.addEventListener('click',()=>{
        if(ch.checked==true){
            ch.parentElement.parentElement.style.opacity=.6
            ch.style.opacity=1
        }
        else{
            ch.parentElement.parentElement.style.opacity=1
        }
})

}
list.push(new task("Practice","2024-12-12","12:12"))
list.push(new task("Practice","2024-12-12","12:12"))
list.push(new task("Practice","2024-12-12","12:12"))
createCard(0)
createCard(1)
createCard(2)

 //checking date
 function checkDate(dateToCheck){
    if(dateToCheck<today){
        alert("Enter valid date and time")
        return false
    }else{
        return true
    }
 }

 function check_toDo(taskTOCheck){
    console.log("Its a fun")
    if(taskTOCheck!=""){
        console.log("task there")
        return true
    }
    else{
        console.log("task not there")
        return false
    }
 }

//  checkDate("2024-12-12")
let numberOfPriorityTask=0
// let checkPriority=document.querySelectorAll("select")
// checkPriority.forEach(element =>element.addEventListener('change',()=>{
//     if(element.value=='high-priority'){
//         numberOfPriorityTask--
//         element.parentElement.style.order=numberOfPriorityTask
//         console.log(element)
//     }
//     else{
//         console.log("low")
//     }
//     console.log("dasdd")
// }))

// function high_Priority(){
//     if(element.value=='high-priority'){
//         numberOfPriorityTask--
//         element.parentElement.style.order=numberOfPriorityTask
//         console.log(element)
//     }
//     else{
//         console.log("low")
//     }
//     console.log("dasdd")
// }

// var checkbox=document.querySelectorAll(".finished")
// checkbox.forEach(element=>element.addEventListener('click',()=>{
//     console.log("Checkbox clicked")
// }
// ))