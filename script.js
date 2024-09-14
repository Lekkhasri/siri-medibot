// Disease information
const diseaseInfo = {
    "cold": {
        symptoms: "Runny or stuffy nose, sore throat, cough, congestion, slight body aches, sneezing.",
        solutions: "Rest, hydration, over-the-counter medications (decongestants, antihistamines), saline nasal spray."
    },
    "cough": {
        symptoms: "Persistent coughing, mucus production, sore throat.",
        solutions: "Cough syrups, honey, humidifiers, fluids, and rest. Seek medical advice if persistent."
    },
    "fever": {
        symptoms: "Elevated body temperature, sweating, chills, headache, muscle aches.",
        solutions: "Rest, fluids, antipyretics (e.g., acetaminophen, ibuprofen), seek medical help if prolonged or very high."
    },
    "dizziness": {
        symptoms: "Lightheadedness, feeling of unsteadiness or spinning.",
        solutions: "Rest, hydration, avoiding sudden movements. Consult a doctor if persistent."
    },
    "pcod": {
        symptoms: "Irregular periods, acne, excessive hair growth, weight gain, ovarian cysts.",
        solutions: "Hormonal contraceptives, metformin, lifestyle changes (diet and exercise)."
    },
    "thyroid": {
        symptoms: "Fatigue, weight changes, mood swings, temperature sensitivity.",
        solutions: "Medications to normalize thyroid levels, regular monitoring, and lifestyle adjustments."
    },
    "typhoid": {
        symptoms: "Prolonged fever, weakness, abdominal pain, headache, rash.",
        solutions: "Antibiotics, hydration, proper sanitation, and rest."
    },
    "jaundice": {
        symptoms: "Yellowing of skin and eyes, dark urine, pale stools.",
        solutions: "Treat underlying cause (liver issues), hydration, and medical supervision."
    },
    "low blood pressure": {
        symptoms: "Dizziness, fainting, blurred vision, nausea.",
        solutions: "Increase salt intake, drink fluids, wear compression stockings, and consult a doctor."
    },
    "diabetes": {
        symptoms: "Frequent urination, excessive thirst, weight loss, fatigue.",
        solutions: "Insulin or oral medications, blood sugar monitoring, healthy diet, regular exercise."
    },
    "breast cancer": {
        symptoms: "Lumps in the breast, changes in breast shape or size, discharge.",
        solutions: "Surgery, chemotherapy, radiation therapy, hormone therapy, and regular screenings."
    },
    "flu": {
        symptoms: "Fever, chills, cough, sore throat, body aches, fatigue.",
        solutions: "Rest, hydration, antiviral medications, flu vaccine for prevention."
    },
    "kidney stones": {
        symptoms: "Severe pain in the back or side, blood in urine, frequent urination.",
        solutions: "Increased fluid intake, pain relievers, and in some cases, medical procedures to remove stones."
    },
    "malaria": {
        symptoms: "Fever, chills, headache, muscle pain, fatigue.",
        solutions: "Antimalarial medications, mosquito prevention, and treatment by a healthcare provider."
    },
    "dengue": {
        symptoms: "High fever, severe headache, pain behind the eyes, joint and muscle pain, rash.",
        solutions: "Hydration, pain relievers, and monitoring by healthcare professionals."
    },
    "diarrhea": {
        symptoms: "Frequent, loose, watery stools, abdominal cramps.",
        solutions: "Rehydration solutions, bland diet, and avoiding dairy and high-fat foods. Seek medical attention if severe."
    },
    "joint pain": {
        symptoms: "Pain, swelling, and stiffness in joints.",
        solutions: "Pain relievers, anti-inflammatory medications, physical therapy, and regular exercise."
    },
    "heart attack": {
        symptoms: "Chest pain, shortness of breath, nausea, sweating, pain in other parts of the body.",
        solutions: "Immediate medical attention, medications, lifestyle changes (diet, exercise), and sometimes surgery."
    },
    "cancer": {
        symptoms: "Varies by type, but common signs include unexplained weight loss, persistent pain, and abnormal lumps.",
        solutions: "Depends on the type and stage, including surgery, chemotherapy, radiation, and targeted therapies."
    },
    "uti": {
        symptoms: "Painful urination, frequent urge to urinate, cloudy urine, pelvic pain.",
        solutions: "Antibiotics, hydration, and sometimes increased frequency of urination."
    },
    "migraine": {
        symptoms: "Severe headache, nausea, sensitivity to light and sound.",
        solutions: "Pain relievers, lifestyle changes, stress management, and sometimes prescription medications."
    },
    "irregular periods": {
        symptoms: "Changes in menstrual cycle length, missed periods, or abnormal bleeding.",
        solutions: "Hormonal treatments, lifestyle changes, and medical consultation."
    },
    "depression": {
        symptoms: "Persistent sadness, loss of interest, fatigue, changes in appetite and sleep.",
        solutions: "Therapy, medications (antidepressants), lifestyle changes, and support systems."
    },
    "skin burns": {
        symptoms: "Redness, pain, swelling, blistering.",
        solutions: "Cool the burn, cover with a sterile bandage, avoid breaking blisters, and seek medical attention for severe burns."
    },
    "foot cracks": {
        symptoms: "Dry, flaky skin, pain, and visible cracks on feet.",
        solutions: "Moisturize regularly, use foot creams, and avoid walking barefoot on rough surfaces."
    },
    "headache": {
        symptoms: "Pain or discomfort in the head or upper neck.",
        solutions: "Pain relievers, hydration, rest, stress management, and identifying triggers."
    },
    "cholesterol": {
        symptoms: "Often asymptomatic, but high cholesterol can lead to heart disease.",
        solutions: "Lifestyle changes (diet, exercise), medications as prescribed by a doctor."
    },
    "high blood pressure": {
        symptoms: "Often asymptomatic, but can cause headaches, dizziness, and nosebleeds.",
        solutions: "Lifestyle changes (diet, exercise), medications, and regular monitoring."
    }
};

// Function to add a message to the chatbox
function addMessage(className, text, showHandIcon = false) {
    const chatboxBody = document.getElementById('chatboxBody');
    const handIcon = showHandIcon ? '<span class="hand-icon">👋</span>' : '';
    chatboxBody.innerHTML += `<div class="message ${className}">${handIcon}${text}</div>`;
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
        
        // Process user message
        const disease = userMessage.toLowerCase().replace(/[^a-z]/g, '');
        if (diseaseInfo[disease]) {
            const { symptoms, solutions } = diseaseInfo[disease];
            addMessage('bot-message', `${symptoms}<br>${solutions}<br>Take care of yourself! 🤗`);
        } else {
            addMessage('bot-message', 'Sorry, I don\'t have information on that. Please try asking about another condition. 😊');
        }
        
        // Clear input field
        messageInput.value = '';
        
        // Scroll to the bottom
        const chatboxBody = document.getElementById('chatboxBody');
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
});
