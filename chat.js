function toggleChat() {
  const chatbox = document.getElementById("chatbox");
  chatbox.style.display = chatbox.style.display === "none" ? "block" : "none";
}

function handleResponse(question) {
  const responseMap = {
    "What’s your background?": "I’m a developer learning in public, focusing on web development and automation.",
    "Can you build my website?": "Yes! I help individuals and small teams create impactful digital solutions.",
    "What tools do you use?": "I work with HTML, CSS, JavaScript, Node.js, and AI-powered automation tools.",
    "Where can I see your projects?": "You can check out my projects on GitHub: https://github.com/YOUR_USERNAME"
  };

  document.getElementById("chat-response").innerText = responseMap[question] || "I’m still learning to respond to that!";
}