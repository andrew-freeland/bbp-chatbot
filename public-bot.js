// public-bot.js — Legacy-safe version for SquareSpace

function handleUserMessage(userMsg) {
  const messages = document.getElementById("messages");
  messages.innerHTML += `<div class="msg bot"><strong>Bot:</strong> Thinking...</div>`;

  fetch("https://script.google.com/macros/s/AKfycbx3xu3.../exec", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: userMsg })
  })
  .then(res => res.json())
  .then(data => {
    const thinkingMsg = messages.querySelector(".bot:last-child");
    if (thinkingMsg) {
      thinkingMsg.innerHTML = `<strong>Bot:</strong> ${data.reply || "Sorry, no response."}`;
    }
  })
  .catch(err => {
    console.error(err);
    const thinkingMsg = messages.querySelector(".bot:last-child");
    if (thinkingMsg) {
      thinkingMsg.innerHTML = `<strong>Bot:</strong> Oops! There was a problem connecting to the server.`;
    }
  });
}

function initPublicBot() {
  var chatContainer = document.getElementById("chat-interface");
  if (!chatContainer) return;

  // Clear container
  chatContainer.innerHTML = "";

  // Style wrapper
  chatContainer.style.position = "fixed";
  chatContainer.style.bottom = "90px";
  chatContainer.style.right = "20px";
  chatContainer.style.width = "415px";
  chatContainer.style.maxHeight = "80vh";
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
  setTimeout(function () {
    chatContainer.style.opacity = 1;
  }, 200);

  // Minimize icon
  var minimizeBtn = document.createElement("div");
  minimizeBtn.innerHTML = "—";
  minimizeBtn.style.position = "absolute";
  minimizeBtn.style.top = "8px";
  minimizeBtn.style.right = "8px";
  minimizeBtn.style.cursor = "pointer";
  minimizeBtn.style.fontSize = "20px";
  minimizeBtn.style.color = "#5B6770";
  minimizeBtn.onclick = function () {
    chatContainer.style.display = "none";
  };

  // Chat messages area
  var messages = document.createElement("div");
  messages.style.flex = "1";
  messages.style.overflowY = "auto";
  messages.style.padding = "16px";
  messages.style.display = "flex";
  messages.style.flexDirection = "column";
  messages.style.gap = "8px";

  // Greeting message
  var greeting = document.createElement("div");
  greeting.innerHTML = '<strong style="color:#3E4A59; font-size: 1rem; display:block; line-height: 1.5;">HELLO! IN A FEW WORDS,<br>HOW CAN WE HELP YOU TODAY?</strong>';
  greeting.style.marginTop = "20px";
  greeting.style.marginRight = "30px";
  messages.appendChild(greeting);

function handleUserMessage(userMsg) {
  const messages = document.getElementById("messages");

  // Simulate a delay to mimic async response
  messages.innerHTML += `<div class="msg bot"><strong>Bot:</strong> Thinking...</div>`;

  // Simulate chatbot logic or API call
  setTimeout(() => {
    const botReply = generateBotReply(userMsg);

    //"Thinking..." with actual reply
    const thinkingMsg = messages.querySelector(".bot:last-child");
    if (helloMsg) {
      helloMsg.innerHTML = `<strong>Bot:</strong> ${botReply}`;
    }
  }, 800);
}

// Example static reply function (replace with real logic/API calls)
function generateBotReply(message) {
  const msg = message.toLowerCase();

  if <!-- Chatbot Booking Script – Part 1 -->
<script>
  function initPublicBot() {
    var chatContainer = document.getElementById("chat-interface");
    if (!chatContainer) return;

    // Style wrapper
    chatContainer.innerHTML = "";
    chatContainer.style.position = "fixed";
    chatContainer.style.bottom = "90px";
    chatContainer.style.right = "20px";
    chatContainer.style.width = "415px";
    chatContainer.style.maxHeight = "80vh";
    chatContainer.style.background = "#fff";
    chatContainer.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
    chatContainer.style.borderRadius = "12px";
    chatContainer.style.overflow = "hidden";
    chatContainer.style.display = "none";
    chatContainer.style.flexDirection = "column";
    chatContainer.style.zIndex = "99999";

    var messages = document.createElement("div");
    messages.style.flex = "1";
    messages.style.overflowY = "auto";
    messages.style.padding = "16px";
    messages.style.display = "flex";
    messages.style.flexDirection = "column";
    messages.style.gap = "8px";
    messages.id = "chat-messages";

    var inputContainer = document.createElement("div");
    inputContainer.style.display = "flex";
    inputContainer.style.borderTop = "1px solid #ccc";
    inputContainer.style.padding = "10px";
    inputContainer.style.gap = "8px";

    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Ask a question...";
    input.style.flex = "1";
    input.style.padding = "10px";
    input.style.borderRadius = "6px";
    input.style.border = "1px solid #ccc";

    var sendBtn = document.createElement("button");
    sendBtn.textContent = "Send";
    sendBtn.style.padding = "10px 16px";
    sendBtn.style.background = "#EB760F";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.borderRadius = "6px";
    sendBtn.style.cursor = "pointer";

    sendBtn.onclick = function () {
      if (input.value.trim() !== "") {
        handleUserMessage(input.value);
        input.value = "";
      }
    };

    inputContainer.appendChild(input);
    inputContainer.appendChild(sendBtn);
    chatContainer.appendChild(messages);
    chatContainer.appendChild(inputContainer);

    // Floating button to toggle
    var toggleBtn = document.createElement("div");
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

    toggleBtn.onclick = function () {
      var isOpen = chatContainer.style.display !== "none";
      chatContainer.style.display = isOpen ? "none" : "flex";
    };

    document.body.appendChild(toggleBtn);

    // Show greeting
    addBotMessage("HELLO! IN A FEW WORDS,\nHOW CAN WE HELP YOU TODAY?");
    showButtons();
    function showButtons() {
      var messages = document.getElementById("chat-messages");
      var buttonRow = document.createElement("div");
      buttonRow.style.display = "flex";
      buttonRow.style.flexDirection = "column";
      buttonRow.style.gap = "10px";
      buttonRow.style.marginTop = "10px";

      var options = [
        { text: "Learn about our services", handler: function () {
            addUserMessage("Learn about our services");
            addBotMessage("We help contractors streamline operations, get organized, and grow. Want help with branding, compliance, or systems?");
          }
        },
        { text: "Schedule a call", handler: function () {
            addUserMessage("Schedule a call");
            fetchAvailableTimes();
          }
        },
        { text: "Access account data", handler: function () {
            addUserMessage("Access account data");
            addBotMessage("You can log in using the member portal.");
          }
        }
      ];

      for (var i = 0; i < options.length; i++) {
        (function (option) {
          var btn = document.createElement("button");
          btn.textContent = option.text;
          btn.style.padding = "12px";
          btn.style.background = "#F5F5F5";
          btn.style.border = "1px solid #ccc";
          btn.style.borderRadius = "6px";
          btn.style.cursor = "pointer";
          btn.style.fontSize = "15px";
          btn.style.color = "#2A2A2A";
          btn.style.fontWeight = "500";
          btn.onmouseover = function () {
            btn.style.background = "#EB760F";
            btn.style.color = "#fff";
          };
          btn.onmouseout = function () {
            btn.style.background = "#F5F5F5";
            btn.style.color = "#2A2A2A";
          };
          btn.onclick = option.handler;
          buttonRow.appendChild(btn);
        })(options[i]);
      }

      messages.appendChild(buttonRow);
    }

    function fetchAvailableTimes() {
      addBotMessage("Let me check my calendar...");

   fetch("https://script.google.com/macros/s/AKfycbx3xu3YhMR7Fq2cRpufAvvrlYo55HMC76_7Y8yCK6b6BQMX_KMfdtkSyItU6ZGJkOU/exec")
        .then(function (res) { return res.json(); })
        .then(function (slots) {
          if (!slots.length) {
            addBotMessage("No times are available in the next 2 weeks.");
            return;
          }

          addBotMessage("Here are a few open 30-minute spots:");
          showTimeButtons(slots);
        })
        .catch(function (err) {
          console.error("Calendar fetch error:", err);
          addBotMessage("Sorry, I couldn't fetch calendar availability.");
        });
    }

    function showTimeButtons(slots) {
      var messages = document.getElementById("chat-messages");
      var list = document.createElement("div");
      list.style.display = "flex";
      list.style.flexDirection = "column";
      list.style.gap = "8px";
      list.style.marginTop = "10px";
      list.style.maxHeight = "200px";
      list.style.overflowY = "auto";

      for (var i = 0; i < Math.min(10, slots.length); i++) {
        (function (slot) {
          var btn = document.createElement("button");
          btn.textContent = slot.label;
          btn.style.padding = "10px";
          btn.style.border = "1px solid #ccc";
          btn.style.borderRadius = "6px";
          btn.style.cursor = "pointer";
          btn.onclick = function () {
            confirmTime(slot.time, slot.label);
          };
          list.appendChild(btn);
        })(slots[i]);
      }

      messages.appendChild(list);
    }
    function confirmTime(isoTime, label) {
      var messages = document.getElementById("chat-messages");
      addUserMessage(label);

      if (!window.prospectEmail) {
        addBotMessage("Great! What email should I send the invite to?");
        askForEmail(function (email) {
          window.prospectEmail = email;
          sendBooking(isoTime, email, "Prospect");
        });
      } else {
        sendBooking(isoTime, window.prospectEmail, "Prospect");
      }
    }

    function askForEmail(callback) {
      var messages = document.getElementById("chat-messages");

      var emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.placeholder = "your@email.com";
      emailInput.style.padding = "10px";
      emailInput.style.border = "1px solid #ccc";
      emailInput.style.borderRadius = "6px";
      emailInput.style.marginTop = "10px";
      emailInput.style.width = "90%";

      var submitBtn = document.createElement("button");
      submitBtn.textContent = "Submit";
      submitBtn.style.padding = "8px 14px";
      submitBtn.style.marginTop = "6px";
      submitBtn.style.background = "#EB760F";
      submitBtn.style.color = "white";
      submitBtn.style.border = "none";
      submitBtn.style.borderRadius = "6px";
      submitBtn.style.cursor = "pointer";

      submitBtn.onclick = function () {
        if (emailInput.value && emailInput.value.includes("@")) {
          addUserMessage(emailInput.value);
          messages.removeChild(emailInput);
          messages.removeChild(submitBtn);
          callback(emailInput.value);
        } else {
          addBotMessage("Hmm... That doesn’t look like a valid email.");
        }
      };

      messages.appendChild(emailInput);
      messages.appendChild(submitBtn);
    }

    function sendBooking(isoTime, email, name) {
      addBotMessage("Booking your call...");
    		fetch("https://script.google.com/macros/s/AKfycbx3xu3YhMR7Fq2cRpufAvvrlYo55HMC76_7Y8yCK6b6BQMX_KMfdtkSyItU6ZGJkOU/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          time: isoTime
        })
      })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.status === "success") {
          addBotMessage("✅ Your call is scheduled! We’ve sent a calendar invite to your email.");
        } else {
          addBotMessage("There was a problem scheduling the event.");
        }
      })
      .catch(function (err) {
        console.error("Booking error:", err);
        addBotMessage("Something went wrong while scheduling.");
      });
    }

    function addUserMessage(text) {
      var messages = document.getElementById("chat-messages");
      var msg = document.createElement("div");
      msg.textContent = text;
      msg.style.alignSelf = "flex-end";
      msg.style.background = "#fdf5ed";
      msg.style.color = "#EB760F";
      msg.style.padding = "10px 12px";
      msg.style.borderRadius = "12px";
      msg.style.maxWidth = "80%";
      msg.style.fontWeight = "500";
      messages.appendChild(msg);
      messages.scrollTop = messages.scrollHeight;
    }

    function addBotMessage(text) {
      var messages = document.getElementById("chat-messages");
      var msg = document.createElement("div");
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
  }
  document.addEventListener("DOMContentLoaded", function () {
    initPublicBot();
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    initPublicBot();
  });
</script>
;
  }

  if (msg.includes("document") || msg.includes("policy")) {
    return "Here’s the document you asked for: [https://drive.google.com/drive/folders/10Q5AXkH0_JaKQylEv3XkOEN3zCMPhdMu?usp=drive_link]";
  }

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I assist you today?";
  }

  return "I'm not sure how to respond to that. Try asking about scheduling or documents.";
}


  // Button options
  var buttonRow = document.createElement("div");
  buttonRow.style.display = "flex";
  buttonRow.style.flexDirection = "column";
  buttonRow.style.gap = "10px";
  buttonRow.style.marginTop = "16px";

  var options = [
    "Learn about our services",
    "Schedule a call",
    "Access account data"
  ];

  for (var i = 0; i < options.length; i++) {
    (function (text) {
      var btn = document.createElement("button");
      btn.textContent = text;
      btn.style.padding = "12px";
      btn.style.background = "#F5F5F5";
      btn.style.border = "1px solid #ccc";
      btn.style.borderRadius = "6px";
      btn.style.cursor = "pointer";
      btn.style.fontSize = "15px";
      btn.style.color = "#2A2A2A";
      btn.style.fontWeight = "500";

      btn.onmouseover = function () {
        btn.style.background = "#EB760F";
        btn.style.color = "#fff";
      };
      btn.onmouseout = function () {
        btn.style.background = "#F5F5F5";
        btn.style.color = "#2A2A2A";
      };

      btn.onclick = function () {
        addUserMessage(text);
        addBotMessage("Thanks! Let me help with that...");
      };

      buttonRow.appendChild(btn);
    })(options[i]);
  }

  messages.appendChild(buttonRow);

  // Input + Send container
  var inputContainer = document.createElement("div");
  inputContainer.style.display = "flex";
  inputContainer.style.borderTop = "1px solid #ccc";
  inputContainer.style.padding = "10px";
  inputContainer.style.gap = "8px";

  var input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Ask a question...";
  input.style.flex = "1";
  input.style.padding = "10px";
  input.style.borderRadius = "6px";
  input.style.border = "1px solid #ccc";

  var sendBtn = document.createElement("button");
  sendBtn.textContent = "Send";
  sendBtn.style.padding = "10px 16px";
  sendBtn.style.background = "#EB760F";
  sendBtn.style.color = "white";
  sendBtn.style.border = "none";
  sendBtn.style.borderRadius = "6px";
  sendBtn.style.cursor = "pointer";

  sendBtn.onclick = function () {
    if (input.value.trim() !== "") {
      addUserMessage(input.value);
      input.value = "";
    }
  };

  inputContainer.appendChild(input);
  inputContainer.appendChild(sendBtn);
  // Add message functions
  function addUserMessage(text) {
    var msg = document.createElement("div");
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
    var msg = document.createElement("div");
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
  var langSelect = document.createElement("select");
  langSelect.style.position = "absolute";
  langSelect.style.bottom = "16px";
  langSelect.style.left = "16px";
  langSelect.style.fontSize = "13px";
  langSelect.style.padding = "4px 6px";
  langSelect.style.border = "1px solid #ccc";
  langSelect.style.borderRadius = "6px";
  langSelect.style.background = "#fff";
  langSelect.style.color = "#3E4A59";

  var languages = ["English", "Español", "Română"];
  for (var j = 0; j < languages.length; j++) {
    var option = document.createElement("option");
    option.value = languages[j];
    option.textContent = languages[j];
    langSelect.appendChild(option);
  }

  // Floating toggle button
  var toggleBtn = document.createElement("div");
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

  toggleBtn.onclick = function () {
    var isOpen = chatContainer.style.display !== "none";
    chatContainer.style.display = isOpen ? "none" : "flex";
  };

  // Final DOM assembly
  document.body.appendChild(toggleBtn);
  chatContainer.appendChild(minimizeBtn);
  chatContainer.appendChild(messages);
  chatContainer.appendChild(langSelect);
  chatContainer.appendChild(inputContainer);
}

window.initPublicBot = initPublicBot;
