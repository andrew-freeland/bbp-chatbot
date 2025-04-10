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
  chatContainer.style.background = "#fff";
  chatContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  chatContainer.style.borderRadius = "12px";
  chatContainer.style.overflow = "hidden";
  chatContainer.style.display = "none";
  chatContainer.style.flexDirection = "column";
  chatContainer.style.zIndex = "9999";
  chatContainer.style.transition = "all 0.4s ease";

  // Slide-up animation (initial hidden)
  chatContainer.style.opacity = 0;
  setTimeout(() => {
    chatContainer.style.opacity = 1;
  }, 200);

  // Minimize icon
  const minimizeBtn = document.createElement("div");
  minimizeBtn.innerHTML = "—";
  minimizeBtn.style.position = "absolute";
  minimizeBtn.style.top = "8px";
  minimizeBtn.style.right = "12px";
  minimizeBtn.style.cursor = "pointer";
  minimizeBtn.style.fontSize = "20px";
  minimizeBtn.style.color = "#888";
  minimizeBtn.onclick = () => {
    chatContainer.style.display = "none";
  };
  // Append minimize
  chatContainer.appendChild(minimizeBtn);

  // Message area
  const messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.overflowY = "auto";
  messages.style.padding = "16px";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "10px";

  // Greeting message
  const greeting = document.createElement("div");
  greeting.innerHTML = `<strong style="color:#3E4A59; font-size: 1rem;">HELLO! IN A FEW WORDS, HOW CAN WE HELP YOU TODAY?</strong>`;
  messages.appendChild(greeting);

  // Button options
  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "10px";

  const buttons = [
    { text: "Learn about our services", response: "Here’s a breakdown of what we offer..." },
    { text: "Schedule a call", response: "Let’s get a time on the calendar. One moment..." },
    { text: "Access account data", response: "I can help you retrieve your business info..." },
  ];

  buttons.forEach(({ text, response }) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    btn.style.padding = "12px";
    btn.style.border = "none";
    btn.style.borderRadius = "6px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "16px";
    btn.style.fontWeight = "600";
    btn.style.background = "#f2f2f2";
    btn.style.color = "#2A2A2A";
    btn.onmouseenter = () => (btn.style.background = "#EB760F");
    btn.onmouseleave = () => (btn.style.background = "#f2f2f2");

    btn.onclick = () => {
      addUserMessage(text);
      addBotMessage(response);
      buttonRow.style.display = "none";
    };

    buttonRow.appendChild(btn);
  });

  messages.appendChild(buttonRow);
  // Input field & send button
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.borderTop = "1px solid #ccc";
  inputContainer.style.padding = "12px";
  inputContainer.style.gap = "10px";

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ask a question...";
  input.style.flex = "1";
  input.style.padding = "10px";
  input.style.border = "1px solid #ccc";
  input.style.borderRadius = "6px";

  const sendBtn = document.createElement("button");
  sendBtn.textContent = "Send";
  sendBtn.style.padding = "10px 16px";
  sendBtn.style.background = "#EB760F";
  sendBtn.style.color = "white";
  sendBtn.style.border = "none";
  sendBtn.style.borderRadius = "6px";
  sendBtn.style.cursor = "pointer";

  sendBtn.onclick = () => {
    const value = input.value.trim();
    if (value) {
      addUserMessage(value);
      addBotMessage("Thank you! We'll follow up shortly.");
      input.value = "";
      buttonRow.style.display = "none";
    }
  };

  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);

  // Language selector
  const langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "12px";
  langSelect.style.left = "12px";
  langSelect.style.fontSize = "14px";
  langSelect.style.border = "1px solid #ccc";
  langSelect.style.borderRadius = "6px";
  langSelect.style.padding = "6px";
  langSelect.style.background = "#f5f5f5";
  ["English", "Español", "Română"].forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = lang;
    langSelect.appendChild(opt);
  });

  // Message functions
  function addUserMessage(text) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.alignSelf = "flex-end";
    msg.style.background = "#fdf5ed";
    msg.style.color = "#EB760F";
    msg.style.padding = "10px 12px";
    msg.style.borderRadius = "16px";
    msg.style.maxWidth = "75%";
    msg.style.fontWeight = "500";
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
    msg.style.borderRadius = "16px";
    msg.style.maxWidth = "75%";
    msg.style.fontWeight = "400";
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  // Floating open button
  const toggleBtn = document.createElement("div");
  toggleBtn.innerHTML = "💬";
  toggleBtn.style.position = "fixed";
  toggleBtn.style.bottom = "20px";
  toggleBtn.style.right = "20px";
  toggleBtn.style.width = "72px";
  toggleBtn.style.height = "72px";
  toggleBtn.style.background = "#EB760F";
  toggleBtn.style.color = "white";
  toggleBtn.style.borderRadius = "50%";
  toggleBtn.style.display = "flex";
  toggleBtn.style.alignItems = "center";
  toggleBtn.style.justifyContent = "center";
  toggleBtn.style.fontSize = "32px";
  toggleBtn.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
  toggleBtn.style.cursor = "pointer";
  toggleBtn.style.zIndex = "9998";

  toggleBtn.onclick = () => {
    chatContainer.style.display = "flex";
    chatContainer.style.opacity = 1;
  };

  // Append all parts
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
  document.body.appendChild(chatContainer);
  document.body.appendChild(toggleBtn);
}

window.initPublicBot = initPublicBot;
