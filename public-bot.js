// public-bot.js — Loads UI into #chat-interface and handles chat behavior

function initPublicBot() {
  const chatContainer = document.getElementById("chat-interface");
  if (!chatContainer) return;

  // Clear container
  chatContainer.innerHTML = "";

  // Style wrapper
  chatContainer.style.position = "fixed";
  chatContainer.style.bottom = "100px";
  chatContainer.style.right = "20px";
  chatContainer.style.width = "415px";
  chatContainer.style.height = "700px";
  chatContainer.style.maxHeight = "550px";
  chatContainer.style.background = "#fff";
  chatContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  chatContainer.style.borderRadius = "12px";
  chatContainer.style.overflow = "hidden";
  chatContainer.style.display = "none";
  chatContainer.style.flexDirection = "column";
  chatContainer.style.zIndex = "99999";
  chatContainer.style.transition = "all 0.4s ease";

  // Slide-up animation
  chatContainer.style.opacity = 0;
  setTimeout(() => {
    chatContainer.style.opacity = 1;
  }, 200);

  // Minimize icon
  const minimizeBtn = document.createElement("div");
  minimizeBtn.innerHTML = "—";
  minimizeBtn.style.position = "absolute";
  minimizeBtn.style.top = "8px";
  minimizeBtn.style.right = "8px";
  minimizeBtn.style.cursor = "pointer";
  minimizeBtn.style.fontSize = "20px";
  minimizeBtn.style.color = "#5B6770";
  minimizeBtn.onclick = () => {
    chatContainer.style.display = "none";
  };

  // Chat messages area
  const messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.overflowY = "auto";
  messages.style.padding = "16px";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "8px";

  // Greeting header with animation
  const greeting = document.createElement("div");
  greeting.innerHTML = `<strong style="color:#3E4A59; font-size: 1rem; display:block; line-height: 1.5; animation: fadeIn 0.6s ease;">
    HELLO! IN A FEW WORDS,<br>HOW CAN WE HELP YOU TODAY?
  </strong>`;
  greeting.style.marginTop = "20px";
  greeting.style.marginRight = "30px";
  messages.appendChild(greeting);
  // Button options
  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "10px";
  buttonRow.style.marginTop = "16px";

  [
    "Learn about our services",
    "Schedule a call",
    "Access account data",
  ].forEach((text) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.padding = "12px";
    btn.style.background = "#F5F5F5";
    btn.style.border = "1px solid #ccc";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "15px";
    btn.style.color = "#2A2A2A";
    btn.style.fontWeight = "500";
    btn.onmouseover = () => (btn.style.background = "#EB760F");
    btn.onmouseout = () => (btn.style.background = "#F5F5F5");
    btn.onclick = () => {
      addUserMessage(text);
      addBotMessage("Thanks! Let me help with that...");
    };
    buttonRow.appendChild(btn);
  });

  messages.appendChild(buttonRow);

  // Input + Send button container
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
    msg.style.padding = "10px 12px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.fontWeight = "500";
    buttonRow.style.display = "none";
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function addBotMessage(text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.alignSelf = "flex-start";
    msg.style.background = "#e7e7e7";
    msg.style.color = "#3E4A59";
    msg.style.padding = "10px 12px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.fontWeight = "400";
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Language dropdown
  const langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "16px";
  langSelect.style.left = "16px";
  langSelect.style.fontSize = "13px";
  langSelect.style.padding = "4px 6px";
  langSelect.style.border = "1px solid #ccc";
  langSelect.style.borderRadius = "6px";
  langSelect.style.background = "#fff";
  langSelect.style.color = "#3E4A59";
  ["English", "Español", "Română"].forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang;
    option.textContent = lang;
    langSelect.appendChild(option);
  });

  // Floating toggle button
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
    const isOpen = chatContainer.style.display !== "none";
    chatContainer.style.display = isOpen ? "none" : "flex";
  };

  // Final assembly
  document.body.appendChild(toggleBtn);
  chatContainer.appendChild(minimizeBtn);
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
}

window.initPublicBot = initPublicBot;
