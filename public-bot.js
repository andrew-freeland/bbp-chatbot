// public-bot.js — Loads UI into #chat-interface and handles chat behavior

function initPublicBot() {
  const chatContainer = document.getElementById("chat-interface");
  if (!chatContainer) return;

  // Clear container
  chatContainer.innerHTML = "";

  // Language dropdown
  const langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "16px";
  langSelect.style.left = "16px";
  langSelect.style.fontSize = "14px";
  ["English", "Español", "Română"].forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang;
    langSelect.appendChild(option);
  });

  // Chat messages area
  const messages = document.createElement("div");
  messages.style.maxHeight = "calc(100% - 100px)";
  messages.style.overflowY = "auto";
  messages.style.marginBottom = "60px";
  messages.style.padding = "10px 0";

  // Initial greeting and buttons
  const greeting = document.createElement("div");
  greeting.innerHTML = `<strong style="color:#3E4A59; font-size: 1rem;">HELLO! IN A FEW WORDS, HOW CAN WE HELP YOU TODAY?</strong>`;
  messages.appendChild(greeting);

  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "8px";
  buttonRow.style.margin = "16px 0";

  [
    "Learn about our services",
    "Schedule a call",
    "Access account data",
  ].forEach((text) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.padding = "10px";
    btn.style.border = "1px solid #ccc";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "14px";
    btn.onclick = () => addUserMessage(text);
    buttonRow.appendChild(btn);
  });

  messages.appendChild(buttonRow);

  // Chat input section
  const inputContainer = document.createElement("div");
  inputContainer.style.position = "absolute";
  inputContainer.style.bottom = "16px";
  inputContainer.style.left = "20px";
  inputContainer.style.right = "20px";
  inputContainer.style.display = "flex";
  inputContainer.style.gap = "8px";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ask a question...";
  input.style.flex = "1";
  input.style.padding = "10px";
  input.style.borderRadius = "6px";
  input.style.border = "1px solid #ccc";

  const sendBtn = document.createElement("button");
  sendBtn.textContent = "Send";
  sendBtn.style.padding = "10px 16px";
  sendBtn.style.background = "#EB760F";
  sendBtn.style.color = "white";
  sendBtn.style.border = "none";
  sendBtn.style.borderRadius = "6px";
  sendBtn.style.cursor = "pointer";

  sendBtn.onclick = () => {
    if (input.value.trim() !== "") {
      addUserMessage(input.value);
      input.value = "";
    }
  };

  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);

  function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.color = "#EB760F";
    msg.style.margin = "6px 0";
    msg.style.fontWeight = "500";
    messages.appendChild(msg);
    buttonRow.style.display = "none"; // hide buttons
    messages.scrollTop = messages.scrollHeight;
  }

  // Append everything
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
}

window.initPublicBot = initPublicBot;
