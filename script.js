// Function to add a message to the chatbox
function addMessage(className, text, showHandIcon = false) {
  const chatboxBody = document.getElementById('chatboxBody');
  const handIcon = showHandIcon ? '<span class="hand-icon">👋</span>' : '';

  const messageElement = document.createElement('div');
  messageElement.classList.add('message', className);
  messageElement.innerHTML = handIcon + text;

  chatboxBody.appendChild(messageElement);
}

// Initial greeting
window.onload = () => {
  addMessage('bot-message', 'Hi! How can I assist you today?', true);
};

// Handle sending messages
document.getElementById('sendButton').addEventListener('click', () => {
  const messageInput = document.getElementById('messageInput');
  const userMessage = messageInput.value.trim();

  if (!userMessage) return;

  addMessage('user-message', userMessage);

  fetch('/.netlify/functions/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // important
    },
    body: JSON.stringify({ userMessage }),
  })
  .then(res => res.json())
  .then(data => {
    addMessage('bot-message', data.reply);
  })
  .catch(() => {
    addMessage('bot-message', 'Sorry, something went wrong. Try again later.');
  });

  messageInput.value = '';
  const chatboxBody = document.getElementById('chatboxBody');
  chatboxBody.scrollTop = chatboxBody.scrollHeight;
});
