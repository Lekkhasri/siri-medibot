

// Function to add a message to the chatbox
function addMessage(className, text, showHandIcon = false) {
    const chatboxBody = document.getElementById('chatboxBody');
    const handIcon = showHandIcon ? '<span class="hand-icon">👋</span>' : '';
    
    // Create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', className);
    messageElement.innerHTML = handIcon + text;

    // Append the new message element to the chatbox body
    chatboxBody.appendChild(messageElement);
}

// Initial greeting
window.onload = () => {
    addMessage('bot-message', 'Hi! How can I assist you today?', true); // Greeting with hand symbol
};

// Handle sending messages
document.getElementById('sendButton').addEventListener('click', () => {
    const messageInput = document.getElementById('messageInput');
    const userMessage = messageInput.value.trim();
    
    if (userMessage) {
        // Add user message to chatbox
        addMessage('user-message', userMessage);
        
        // Normalize the input to lowercase and remove extra spaces
        const disease = userMessage.toLowerCase().trim();
       fetch('/.netlify/functions/chatbot', {
  method: 'POST',
  body: JSON.stringify({ userMessage: userMessage }),
})
  .then(res => res.json())
  .then(data => {
    addMessage('bot-message', data.reply);
  })
  .catch(() => {
    addMessage('bot-message', 'Sorry, something went wrong. Try again later.');
  });

        
        // Clear input field
        messageInput.value = '';
        
        // Scroll to the bottom
        const chatboxBody = document.getElementById('chatboxBody');
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
});

