const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const errorLabel = document.querySelector(".error-label");

let allGoals = JSON.parse(localStorage.getItem("allGoal")) || {};
let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;
progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => input.value);

    if (allGoalsAdded) {
      checkBox.parentElement.classList.toggle("completed");

      const inputId = checkBox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      localStorage.setItem("allGoal", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-err");
    }
  });
});

inputFields.forEach((input) => {
  if (allGoals[input.id]) {
    input.value = allGoals[input.id].name;

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add("completed");
    }
  }

  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-err");
  });
  input.addEventListener("input", (e) => {
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoal", JSON.stringify(allGoals));
  });
});
