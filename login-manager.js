const form = document.querySelector("#sign-up");

async function sendData() {
  const formData = new FormData(form);
    username=formData.get("username")
  try {
    const response = await fetch("https://example.org/post", {
      method: "POST",
      body: formData,
    });
    console.log(await response.json());
  } catch (e) {
    console.error(e);
  }
}

// Take over form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();
  sendData();
});