// public-bot.js — Chatbot with expanded window, animation, logic, styling, and calendar preview

function initPublicBot() {
  if (document.getElementById("chat-interface")) return;

  const chatContainer = document.createElement("div");
  chatContainer.id = "chat-interface";
  chatContainer.style.position = "fixed";
  chatContainer.style.bottom = "20px";
  chatContainer.style.right = "20px";
  chatContainer.style.width = "400px";
  chatContainer.style.height = "600px";
  chatContainer.style.background = "#fff";
  chatContainer.style.borderRadius = "12px";
  chatContainer.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.25)";
  chatContainer.style.display = "flex";
  chatContainer.style.flexDirection = "column";
  chatContainer.style.overflow = "hidden";
  chatContainer.style.transform = "translateY(100%)";
  chatContainer.style.transition = "transform 0.4s ease";
  chatContainer.style.zIndex = "9999";
  chatContainer.style.fontFamily = "'Space Grotesk', sans-serif";

  setTimeout(() => {
    chatContainer.style.transform = "translateY(0)";
  }, 300);

  const langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "12px";
  langSelect.style.left = "12px";
  langSelect.style.padding = "6px 10px";
  langSelect.style.border = "1px solid #ccc";
  langSelect.style.borderRadius = "6px";
  langSelect.style.background = "#f5f5f5";
  langSelect.style.fontSize = "13px";
  langSelect.style.zIndex = "1";
  ["English", "Español", "Română"].forEach((lang) => {
    const opt = document.createElement("option");
    opt.value = lang;
    opt.textContent = lang;
    langSelect.appendChild(opt);
  });

  const messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.overflowY = "auto";
  messages.style.padding = "20px";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "12px";

  const greeting = document.createElement("div");
  greeting.innerHTML = `<strong style="color:#3E4A59; font-size: 1rem;">HELLO! IN A FEW WORDS, HOW CAN WE HELP YOU TODAY?</strong>`;
  messages.appendChild(greeting);

  const buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "10px";
  buttonRow.style.marginTop = "6px";

  const buttonStyle = {
    background: "#EB760F",
    color: "white",
    fontSize: "14px",
    border: "none",
    borderRadius: "8px",
    padding: "12px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const buttons = {
    "Learn about our services": () => {
      addBotMessage("We help contractors streamline operations: branding, digital setup, HR, OSHA paperwork, and more. Need help with something specific?");
    },
    "Schedule a call": () => {
      addBotMessage("Here are your upcoming 30-minute availability slots (next 2 weeks):");
      fetchCalendarSlots();
    },
    "Access account data": () => {
      addBotMessage("To access your account, please log in at: /login");
    },
  };

  Object.entries(buttons).forEach(([text, action]) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    Object.assign(btn.style, buttonStyle);
    btn.onclick = () => {
      addUserMessage(text);
      buttonRow.style.display = "none";
      action();
    };
    buttonRow.appendChild(btn);
  });

  messages.appendChild(buttonRow);
  const inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.borderTop = "1px solid #ddd";
  inputContainer.style.padding = "12px";
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
  Object.assign(sendBtn.style, buttonStyle);
  sendBtn.style.padding = "10px 16px";

  sendBtn.onclick = () => {
    if (input.value.trim()) {
      addUserMessage(input.value);
      addBotMessage("Thank you! We’ll get back to you shortly.");
      input.value = "";
      buttonRow.style.display = "none";
    }
  };

  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);

  const minimizeBtn = document.createElement("div");
  minimizeBtn.textContent = "×";
  minimizeBtn.style.position = "absolute";
  minimizeBtn.style.top = "6px";
  minimizeBtn.style.right = "12px";
  minimizeBtn.style.cursor = "pointer";
  minimizeBtn.style.fontSize = "22px";
  minimizeBtn.style.color = "#999";
  minimizeBtn.onclick = () => {
    chatContainer.style.transform = "translateY(100%)";
    setTimeout(() => {
      chatContainer.remove();
    }, 300);
  };

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
  toggleBtn.style.pointerEvents = "none"; // disables toggleBtn interaction once shown

  document.body.appendChild(toggleBtn);

  chatContainer.appendChild(minimizeBtn);
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
  document.body.appendChild(chatContainer);

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

  function fetchCalendarSlots() {
    const slots = [
      "Thu 10:00 AM", "Thu 2:00 PM", "Fri 9:30 AM",
      "Fri 1:00 PM", "Mon 11:00 AM", "Tue 3:30 PM"
    ];
    const list = document.createElement("ul");
    list.style.paddingLeft = "20px";
    slots.forEach((slot) => {
      const li = document.createElement("li");
      li.textContent = slot;
      li.style.marginBottom = "6px";
      list.appendChild(li);
    });
    messages.appendChild(list);
    messages.scrollTop = messages.scrollHeight;
  }
}

window.initPublicBot = initPublicBot;
