const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const errorLabel = document.querySelector(".error-label");

checkBoxList.forEach((checkBox) => {
  checkBox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => input.value);

    if (allGoalsAdded) {
      console.log(allGoalsAdded);
      checkBox.parentElement.classList.toggle("completed");
    } else {
      progressBar.classList.add("show-err");
    }
  });
});

inputFields.forEach((input) => {
  input.addEventListener("focus", () => {
    progressBar.classList.remove("show-err");
  });
});
