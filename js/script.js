let tasks = [
  {
    taskName: "Groceries",
    image: "images/vegetables-752153_1280.jpg",
    description:
      "Buy eggs, tomatoes, feta, milk, bread, rice and potatoes for the week.",
    importance: 0,
  },
  {
    taskName: "Doctor's appointment",
    image: "images/medical-563427_1280.jpg",
    description: "Make appointment with eye doctor for next week.",
    importance: 0,
  },
  {
    taskName: "Drop off clothes",
    image: "images/fashion-1283863_1280.jpg",
    description: "Gather and drop off your old clothes at the local charity.",
    importance: 0,
  },
];

let cards = document.getElementById("cards");

function createCards() {
  tasks.forEach((element, i) => {
    cards.innerHTML += `
    <div class="col-sm">
        <div class="card" style="width: 18rem;">
            <div class="card-header text-light">
            </div>
            <img src="${element.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.taskName}</h5>
                <p class="card-text">${element.description}</p>
                <p class="priority card-text">Priority level: ${element.importance}</p>
                <a class="btn btn-outline-primary up">Up priority</a>
                <a class="btn btn-outline-danger lower">Lower priority</a>
                <a class="btn btn-success">Done</a>
                <a class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
    `;
    changeColor(i);

    // I used my own special green, yellow and red colours here, as it fits in better with my colour-scheme, hope that's fine! :)
    function changeColor(i) {
      let color = "#557A46";
      let text = "Low Importance";

      if (tasks[i].importance <= 1) {
      } else if (tasks[i].importance <= 3) {
        color = "#ECB365";
        text = "Medium importance";
      } else {
        color = "#B80000";
        text = "High importance";
      }

      document.querySelectorAll(".card-header")[i].style.backgroundColor =
        color;
      document.querySelectorAll(".card-header")[i].innerHTML = text;
    }

    let upBtns = document.querySelectorAll(".up");

    upBtns.forEach((element, i) => {
      element.addEventListener("click", function () {
        if (tasks[i].importance == 5) {
        } else {
          tasks[i].importance++;
          document.querySelectorAll(".priority")[
            i
          ].innerHTML = `Priority level: ${tasks[i].importance}`;
          changeColor(i);
        }
      });
    });

    let lowerBtns = document.querySelectorAll(".lower");

    lowerBtns.forEach((element, i) => {
      element.addEventListener("click", function () {
        if (tasks[i].importance == 0) {
        } else {
          tasks[i].importance--;
          document.querySelectorAll(".priority")[
            i
          ].innerHTML = `Priority level: ${tasks[i].importance}`;
          changeColor(i);
        }
      });
    });
  });
}

createCards();

document.querySelector(".sort").addEventListener("click", function () {
  tasks.sort(function (a, b) {
    return b.importance - a.importance;
  });
  document.getElementById("cards").innerHTML = "";
  createCards();
});
