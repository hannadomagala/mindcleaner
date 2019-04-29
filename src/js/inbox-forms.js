const addThoughtInput = document.querySelector(".add-thought__input");

const createThought = async e => {
  e.preventDefault();
  try {
    const user = e.target.dataset.user;

    const response = await fetch("/thoughts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        thought: addThoughtInput.value,
        userId: user
      })
    });
    window.location.href = "/inbox";
  } catch (err) {
    console.log(err);
  }
};

const deleteThought = async e => {
  e.preventDefault();
  try {
    const id = e.target.dataset.id;
    const response = await fetch(`/thoughts/${id}`, {
      method: "DELETE"
    });
    window.location.href = "/inbox";
  } catch (err) {
    console.log(err);
  }
};

export { createThought, deleteThought };
