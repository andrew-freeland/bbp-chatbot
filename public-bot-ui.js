function sendMessage() {
  const input = document.getElementById("user-input");
  const userMsg = input.value;
  if (!userMsg) return;

  // Show user message
  appendMessage("You", userMsg);
  input.value = "";

  // Send to backend
  fetch("https://script.google.com/macros/s/AKfycbz_jH4VWi7Jl8JZZ6i8eQyGRcbP-8GsDC8gBkht9pyMW-2o0_GgOMcsCJBps_zE94Xk/exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg })
  })
  .then(res => res.json())
  .then(data => {
    appendMessage("Bot", data.reply);
  })
  .catch(() => {
    appendMessage("Bot", "Oops! Something went wrong.");
  });
}

function appendMessage(sender, text) {
  const msgContainer = document.getElementById("messages");
  msgContainer.innerHTML += `<div><strong>${sender}:</strong> ${text}</div>`;
}
