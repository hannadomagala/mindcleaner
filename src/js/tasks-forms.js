const pageName = document.body.className;

// inputs
const title = document.querySelector("#title");
const date = document.querySelector("#date");
const someday = document.querySelector("#someday");
const details = document.querySelector("#details");
const delegate = document.querySelector("#delegate");
const thoughtId = document.querySelector("main").dataset.thought;

// contexts
const outside = document.querySelector("#outside");
const home = document.querySelector("#home");
const work = document.querySelector("#work");
const shopping = document.querySelector("#shopping");
const computer = document.querySelector("#computer");
const phone = document.querySelector("#phone");

// functions

const toggleDate = e => {
  if (someday.checked) {
    date.value = null;
    date.disabled = true;
  } else {
    date.disabled = false;
  }
};

const createTask = async e => {
  e.preventDefault();

  const contexts = [outside, home, work, shopping, computer, phone];
  const contextsToSend = [];

  for (const context of contexts) {
    if (context.checked) {
      contextsToSend.push({
        name: context.id,
        class: `c-${context.id}`
      });
    }
  }

  const waiting = !!delegate.value;

  try {
    const response = await fetch("/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title.value,
        date: date.value,
        someday: someday.checked,
        details: details.value.replace(/\r?\n/g, "<br />"),
        contexts: contextsToSend,
        waiting: waiting,
        delegated: delegate.value,
        done: false,
        thoughtId: thoughtId
      })
    });

    console.log(response);
    window.location.href = "/all";
  } catch (err) {
    console.log(err);
  }
};

const editTask = async e => {
  e.preventDefault();

  const contexts = [outside, home, work, shopping, computer, phone];
  const contextsToSend = [];

  for (const context of contexts) {
    if (context.checked) {
      contextsToSend.push({
        name: context.id,
        class: `c-${context.id}`
      });
    }
  }

  const waiting = !!delegate.value;

  const id = document.body.dataset.id;

  try {
    const response = await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title.value,
        date: date.value,
        someday: someday.checked,
        details: details.value.replace(/\r?\n/g, "<br />"),
        contexts: contextsToSend,
        waiting: waiting,
        delegated: delegate.value,
        done: false
      })
    });

    console.log(response);
    window.location.href = "/all";
  } catch (err) {
    console.log(err);
  }
};

const accomplishTask = async e => {
  e.preventDefault();
  try {
    const id = e.target.dataset.id;
    const response = await fetch(`/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        done: true
      })
    });
    window.location.href = `/${pageName}`;
  } catch (err) {
    console.log(err);
  }
};

const deleteTask = async e => {
  e.preventDefault();
  try {
    const id = e.target.dataset.id;
    const response = await fetch(`/tasks/${id}`, {
      method: "DELETE"
    });
    window.location.href = "/done";
  } catch (err) {
    console.log(err);
  }
};

export {
  someday,
  date,
  pageName,
  toggleDate,
  createTask,
  editTask,
  accomplishTask,
  deleteTask
};
