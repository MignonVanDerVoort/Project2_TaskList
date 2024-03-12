let tasks = [
  {
    taskName: "Groceries",
    image: "images/oil-3112195_1280.jpg",
    description:
      "Buy eggs, tomatoes, feta, milk, bread, rice and potatoes for the week.",
    importance: 0,
  },
  {
    taskName: "Clean flat",
    image: "images/vacuum-cleaner-268179_1280.jpg",
    description: "Tidy up the flat for the guests that are coming.",
    importance: 0,
  },
  {
    taskName: "Water plants",
    image: "images/pastel-4279379_1280.jpg",
    description:
      "Give enough water to all the plants in the flat. Spray their leaves as well.",
    importance: 0,
  },
  {
    taskName: "Paint wall",
    image: "images/paint-1936787_1280.jpg",
    description:
      "Get the blue paint from the cellar and paint the kitchen wall.",
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
    image: "images/sweater-3124635_1280.jpg",
    description: "Gather and drop off your old clothes at the local charity.",
    importance: 0,
  },
  {
    taskName: "Walk the dog",
    image: "images/dog-5723334_1280.jpg",
    description:
      "Take Max to the dog park around the corner. Don't forget his ball!",
    importance: 0,
  },
  {
    taskName: "Do some coding",
    image: "images/code-1076536_1280.jpg",
    description: "Review the new things you learnt in JS.",
    importance: 0,
  },
  {
    taskName: "Washing",
    image: "images/switch-1033640_1280.jpg",
    description:
      "Gather all the dirty washing in the flat, sort them in white and colours, and wash it.",
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
                <p class="priority card-text">Priority level: <span class="level">${tasks[i].importance}</span></p>
                <a class="btn btn-outline-primary up">&#8593; Up priority</a>
                <a class="btn btn-outline-danger lower">&#8595; Lower priority</a>
                <a class="btn btn-success">&#10003; Done</a>
                <a class="btn btn-danger">&#10007; Delete</a>
            </div>
        </div>
    </div>
    `;
    changeColor(i);

    // I used my own special green, yellow and red colours here, as it fits in better with my colour-scheme, hope that's fine! :)
    function changeColor(i) {
      let color = "#557A46";
      let text = "&#10168; Low Importance";

      if (tasks[i].importance <= 1) {
      } else if (tasks[i].importance <= 3) {
        color = "#ECB365";
        text = "&#10168; Moderate importance";
      } else {
        color = "#B80000";
        text = "&#10168; High importance";
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
          ].innerHTML = `Priority level: <span class="level">${tasks[i].importance}</span>`;
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
          ].innerHTML = `Priority level: <span class="level">${tasks[i].importance}</span>`;
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
