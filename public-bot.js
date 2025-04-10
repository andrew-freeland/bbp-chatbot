// public-bot.js — Loads UI into #chat-interface and handles chat behavior

function initPublicBot() {
  const chatContainer = document.getElementById("chat-interface");
  if (!chatContainer) return;

  // Clear container
  chatContainer.innerHTML = "";

  // Style wrapper
  chatContainer.style.position = "fixed";
  chatContainer.style.bottom = "90px";
  chatContainer.style.right = "20px";
  chatContainer.style.width = "300px";
  chatContainer.style.maxHeight = "400px";
  chatContainer.style.background = "#fff";
  chatContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  chatContainer.style.borderRadius = "12px";
  chatContainer.style.overflow = "hidden";
  chatContainer.style.display = "none";
  chatContainer.style.flexDirection = "column";
  chatContainer.style.zIndex = "9999";

  // Language dropdown
  const langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "8px";
  langSelect.style.left = "8px";
  langSelect.style.fontSize = "14px";
  ["English", "Español", "Română"].forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang;
    langSelect.appendChild(option);
  });

  // Chat messages area
  const messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.overflowY = "auto";
  messages.style.padding = "16px";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "8px";

  // Greeting message
  const greeting = document.createElement("div");
  greeting.innerHTML = `<strong style="color:#3E4A59; font-size: 1rem;">HELLO! IN A FEW WORDS, HOW CAN WE HELP YOU TODAY?</strong>`;
  messages.appendChild(greeting);

  // Button options
  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "8px";

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
    btn.onclick = () => {
      addUserMessage(text);
      addBotMessage("Thanks! Let me help with that...");
    };
    buttonRow.appendChild(btn);
  });

  messages.appendChild(buttonRow);

  // Input area
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.borderTop = "1px solid #ccc";
  inputContainer.style.padding = "10px";
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

  // Add message functions
  function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.alignSelf = "flex-end";
    msg.style.background = "#fdf5ed";
    msg.style.color = "#EB760F";
    msg.style.padding = "10px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.fontWeight = "500";
    messages.appendChild(msg);
    buttonRow.style.display = "none";
    messages.scrollTop = messages.scrollHeight;
  }

  function addBotMessage(text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.alignSelf = "flex-start";
    msg.style.background = "#e7e7e7";
    msg.style.color = "#3E4A59";
    msg.style.padding = "10px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.fontWeight = "400";
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Floating button to toggle chat
  const toggleBtn = document.createElement("div");
  toggleBtn.innerHTML = "💬";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.width = "64px";
  toggleBtn.style.height = "64px";
  toggleBtn.style.background = "#EB760F";
  toggleBtn.style.color = "#fff";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.display = "flex";
  toggleBtn.style.alignItems = "center";
  toggleBtn.style.justifyContent = "center";
  toggleBtn.style.fontSize = "28px";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "9999";
  toggleBtn.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

  toggleBtn.onclick = () => {
    chatContainer.style.display =
      chatContainer.style.display === "none" ? "flex" : "none";
  };

  // Append all elements
  document.body.appendChild(toggleBtn);
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
}

window.initPublicBot = initPublicBot;
