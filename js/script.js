let tasks = [{ 
        taskName: "Groceries", 
        image: "images/vegetables-752153_1280.jpg", 
        description: "Buy eggs, tomatoes, feta, milk, bread, rice and potatoes for the week.", 
        importance: 0 
      },{
        taskName: "Doctor's appointment", 
        image: "images/medical-563427_1280.jpg", 
        description: "Make appointment with eye doctor for next week.", 
        importance: 0
      },{
        taskName: "Drop off clothes", 
        image: "images/fashion-1283863_1280.jpg", 
        description: "Gather and drop off your old clothes at the local charity.", 
        importance: 0
      }]

let cards = document.getElementById("cards")

function createCards() {
    let color = "success"           /* ???????????????????? */

    tasks.forEach(element => {
    cards.innerHTML += `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <div class="card-header">
                <a class="btn priorityBtn btn-${color}"> Show priority </a>
            </div>
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.taskName}</h5>
                <p class="card-text">${element.description}</p>
                <p class="priority card-text">Priority level: ${element.importance}</p>
                <a class="btn btn-outline-primary up">Up priority</a>
                <a class="btn btn-outline-danger lower">Lower priority</a>
            </div>
        </div>
    </div>
    `
    let upBtns = document.querySelectorAll(".up")

    upBtns.forEach((element,i) => {
        
        element.addEventListener("click", function () {
            if (tasks[i].importance == 5) {              
            } else {
                tasks[i].importance++ 
                document.querySelectorAll(".priority")[i].innerHTML = `Priority level: ${tasks[i].importance}`
            }          
        })
    });

    let lowerBtns = document.querySelectorAll(".lower")

    lowerBtns.forEach((element,i) => {
        element.addEventListener("click", function () {
            if (tasks[i].importance == 0) {               
            } else {
                tasks[i].importance-- 
                document.querySelectorAll(".priority")[i].innerHTML = `Priority level: ${tasks[i].importance}`
            }          
        })
    });



    document.querySelector(".sort").addEventListener("click", function () {          /* ??????????????? */
    tasks.sort(function(a, b){return a.importance - b.importance});
    })

   
   
   
    let priorityBtns = document.querySelectorAll(".priorityBtn")                   /*  ?????????????????
 */
    priorityBtns.forEach((element,i) => {
        element.addEventListener("click", function () {
            if (tasks[i].importance == 0 || 1) {
                color = "success"
            } else if (tasks[i].importance == 2 || 3){
                color = "warning"
            } else{
                color = "danger"
            }
        })
    });

});
}

createCards()


