// css imports
import normalize from "normalize.css";
import variables from "../css/variables.css";
import main from "../css/main.css";
import pageTemplate from "../css/page-template.css";
import pageContent from "../css/page-content.css";
import inbox from "../css/inbox.css";
import tasks from "../css/tasks.css";
import contexts from "../css/contexts.css";

//basic functionality imports
import highlightActive from "./menu";

// crud imports
import { createThought, deleteThought } from "./inbox-forms";
import {
  someday,
  date,
  pageName,
  toggleDate,
  createTask,
  editTask,
  accomplishTask,
  deleteTask
} from "./tasks-forms";

//highlight active page at page-nav
highlightActive();

//sort-by-context at page-nav
const contextsContainer = document.querySelector(".sort-by-context");
const contextsBtn = document.querySelector(".page-nav__link--sort");

if (contextsContainer) {
  const toggleContexts = e => {
    e.preventDefault();
    contextsContainer.classList.toggle("sort-by-context--toggle");
  };

  const closeContexts = e => {
    console.log(e.target);
    if (e.target !== contextsContainer && e.target !== contextsBtn) {
      contextsContainer.classList.remove("sort-by-context--toggle");
    } else return;
  };

  contextsBtn.addEventListener("click", toggleContexts);
  document.body.addEventListener("click", closeContexts);
}
if (pageName === "inbox") {
  //inbox CRUD
  const addThoughtForm = document.querySelector(".add-thought");
  const deleteThoughtButtons = document.querySelectorAll(".delete-thought");

  addThoughtForm.addEventListener("submit", createThought);

  for (const deleteButton of deleteThoughtButtons) {
    deleteButton.addEventListener("submit", deleteThought);
  }
}

if (pageName === "addtask") {
  const addTaskForm = document.querySelector(".add-task__form");

  someday.addEventListener("click", toggleDate);
  addTaskForm.addEventListener("submit", createTask);
}

if (pageName === "edittask") {
  const addTaskForm = document.querySelector(".add-task__form");

  someday.addEventListener("click", toggleDate);
  addTaskForm.addEventListener("submit", editTask);
}

if (
  pageName !== "inbox" &&
  pageName !== "addtask" &&
  pageName !== "edittask" &&
  pageName !== "done"
) {
  const doneTaskForms = document.querySelectorAll(".task__is-done");

  for (const form of doneTaskForms) {
    form.addEventListener("submit", accomplishTask);
  }
}

if (pageName === "done") {
  const doneTaskForms = document.querySelectorAll(".task__delete-form");
  console.log(doneTaskForms);

  for (const form of doneTaskForms) {
    form.addEventListener("submit", deleteTask);
  }
}
