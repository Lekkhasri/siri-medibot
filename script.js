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
    },
     "anemia": {
        symptoms: "Fatigue, weakness, pale skin, shortness of breath, dizziness.",
        solutions: "Iron supplements, vitamin B12, folate, and a balanced diet. Consult a doctor for specific treatments."
    },
    "acid reflux": {
        symptoms: "Heartburn, regurgitation, chest pain, difficulty swallowing.",
        solutions: "Antacids, proton pump inhibitors (PPIs), avoid trigger foods, eat smaller meals."
    },
    "parkinson's disease": {
        symptoms: "Tremors, stiffness, slowness of movement, balance problems.",
        solutions: "Medications (levodopa), physical therapy, and surgical options (DBS) for advanced cases."
    },
    "alzheimer's disease": {
        symptoms: "Memory loss, confusion, difficulty recognizing people, changes in behavior.",
        solutions: "Medications (donepezil), cognitive therapies, and lifestyle management."
    },
    "multiple sclerosis": {
        symptoms: "Numbness, fatigue, difficulty walking, vision problems.",
        solutions: "Disease-modifying drugs (DMDs), corticosteroids for flare-ups, physical therapy."
    },
    "rheumatoid arthritis": {
        symptoms: "Joint pain, swelling, stiffness, fatigue.",
        solutions: "Anti-inflammatory drugs, DMARDs (Disease-modifying antirheumatic drugs), physical therapy."
    },
    "lung cancer": {
        symptoms: "Persistent cough, chest pain, shortness of breath, coughing up blood.",
        solutions: "Surgery, chemotherapy, radiation therapy, targeted therapies depending on the stage."
    },
    "osteoporosis": {
        symptoms: "Bone fractures, back pain, loss of height, stooped posture.",
        solutions: "Calcium and vitamin D supplements, weight-bearing exercises, medications (bisphosphonates)."
    },
    "chronic fatigue syndrome": {
        symptoms: "Extreme fatigue, sleep problems, muscle pain, headaches.",
        solutions: "Rest, stress management, pain relievers, and exercise therapy."
    },
    "psoriasis": {
        symptoms: "Red, scaly patches of skin, itching, burning.",
        solutions: "Topical creams, phototherapy, systemic medications, and lifestyle changes."
    },
    "hiv/aids": {
        symptoms: "Fatigue, fever, night sweats, swollen lymph nodes, frequent infections.",
        solutions: "Antiretroviral therapy (ART), regular monitoring, and safer practices to prevent transmission."
    },
    "tuberculosis": {
        symptoms: "Cough, chest pain, fatigue, night sweats, weight loss.",
        solutions: "Antibiotics (6-9 months of treatment), proper nutrition, and respiratory protection."
    },
    "celiac disease": {
        symptoms: "Diarrhea, weight loss, bloating, fatigue, skin rashes.",
        solutions: "Strict gluten-free diet, nutrient supplementation if deficiencies occur."
    },
    "epilepsy": {
        symptoms: "Seizures, loss of consciousness, involuntary movements.",
        solutions: "Anticonvulsant medications, lifestyle adjustments, and safety precautions."
    },
    "leukemia": {
        symptoms: "Fatigue, fever, weight loss, easy bruising, frequent infections.",
        solutions: "Chemotherapy, stem cell transplant, and targeted therapies."
    },
    "hepatitis": {
        symptoms: "Jaundice, fatigue, nausea, abdominal pain.",
        solutions: "Antiviral medications, vaccination, and lifestyle changes to avoid further liver damage."
    },
    "gallstones": {
        symptoms: "Severe pain in the upper right abdomen, nausea, vomiting.",
        solutions: "Cholecystectomy (gallbladder removal), diet adjustments, and medication for pain management."
    },
    "appendicitis": {
        symptoms: "Sharp pain in the lower right abdomen, fever, nausea, vomiting.",
        solutions: "Appendectomy (surgical removal of the appendix), antibiotics for infection."
    },
    "pneumonia": {
        symptoms: "Cough, fever, difficulty breathing, chest pain.",
        solutions: "Antibiotics, antiviral medications, oxygen therapy for severe cases."
    },
    "sepsis": {
        symptoms: "Fever, confusion, rapid heartbeat, low blood pressure, chills.",
        solutions: "Antibiotics, IV fluids, medications to stabilize blood pressure, and intensive care."
    },
    "acne": {
        symptoms: "Pimples, blackheads, whiteheads, cysts, red spots.",
        solutions: "Topical treatments (benzoyl peroxide, salicylic acid), antibiotics, and lifestyle changes."
    },
    "fertility issues": {
        symptoms: "Irregular periods, pain during intercourse, difficulty conceiving.",
        solutions: "Fertility medications, assisted reproductive technologies (IVF, IUI), lifestyle changes."
    },
    "bipolar disorder": {
        symptoms: "Extreme mood swings, depression, mania, impulsive behavior.",
        solutions: "Mood stabilizers, antipsychotic medications, psychotherapy."
    },
    "schizophrenia": {
        symptoms: "Hallucinations, delusions, disorganized thinking, lack of motivation.",
        solutions: "Antipsychotic medications, therapy, support groups."
    },
    "anxiety disorders": {
        symptoms: "Excessive worry, panic attacks, restlessness, difficulty concentrating.",
        solutions: "Cognitive-behavioral therapy (CBT), medications (antidepressants, benzodiazepines), relaxation techniques."
    },
    "autism spectrum disorder": {
        symptoms: "Difficulty with communication, repetitive behaviors, sensory sensitivities.",
        solutions: "Behavioral therapies, speech therapy, and social skills training."
    },
    "sinusitis": {
        symptoms: "Nasal congestion, headache, facial pressure, thick nasal discharge.",
        solutions: "Decongestants, nasal sprays, saline rinses, and antibiotics if bacterial."
    },
    "viral infections": {
        symptoms: "Varies, but commonly includes fever, fatigue, sore throat, cough.",
        solutions: "Rest, hydration, antiviral medications if available, and supportive care."
    },
    "liver cirrhosis": {
        symptoms: "Fatigue, jaundice, abdominal swelling, confusion.",
        solutions: "Avoid alcohol, liver transplant in severe cases, medications to manage symptoms"
    },
       "asthma": {
        symptoms: "Shortness of breath, wheezing, coughing, chest tightness.",
        solutions: "Inhalers, corticosteroids, bronchodilators, avoiding triggers."
    },
    "arthritis": {
        symptoms: "Joint pain, stiffness, swelling, decreased range of motion.",
        solutions: "Pain relievers, anti-inflammatory medications, physical therapy, joint replacement surgery."
    },
    "eczema": {
        symptoms: "Dry, itchy, inflamed skin, redness, and swelling.",
        solutions: "Moisturizers, topical steroids, avoiding triggers, antihistamines."
    },
    "gout": {
        symptoms: "Severe joint pain, redness, swelling, usually in the big toe.",
        solutions: "Anti-inflammatory medications, colchicine, hydration, avoiding purine-rich foods."
    },
    "stroke": {
        symptoms: "Sudden numbness or weakness, confusion, difficulty speaking, dizziness.",
        solutions: "Immediate medical attention, medications (tPA), rehabilitation therapies."
    },
    "stomach pain": {
        symptoms: "Abdominal discomfort, bloating, nausea, cramps.",
        solutions: "Rest, hydration, antacids, and medical consultation if severe."
    },
    "hair fall": {
        symptoms: "Thinning hair, excessive shedding, bald spots.",
        solutions: "Hair growth treatments, medications (minoxidil, finasteride), balanced diet."
    },
    "ear pain": {
        symptoms: "Sharp or dull pain in the ear, ear congestion, hearing loss.",
        solutions: "Pain relievers, warm compress, antibiotics if infection is present."
    } 
    
};


// ✅ DOM Elements
const chatboxBody = document.getElementById("chatboxBody");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

// ✅ Function to display messages
function addMessage(sender, text, withHand = false) {
    const msg = document.createElement("div");
    msg.classList.add(sender === "user" ? "user-message" : "bot-message");
    
    if (withHand) {
        msg.innerHTML = `<span class="hand-icon">🤚</span>${text}`;
    } else {
        msg.innerText = text;
    }

    chatboxBody.appendChild(msg);
    chatboxBody.scrollTop = chatboxBody.scrollHeight; // auto-scroll
}

// ✅ Initial greeting message
addMessage("bot", "Hello! How can I assist you? 😊", true);

// ✅ Function to handle user input
async function handleMessage() {
    const userInput = messageInput.value.trim();
    if (!userInput) return;

    addMessage("user", userInput);
    messageInput.value = "";

    const lowerInput = userInput.toLowerCase();

    // Step 4A: Check disease database
    if (diseaseInfo[lowerInput]) {
        const data = diseaseInfo[lowerInput];
        await showTypingAnimation();
        addMessage("bot", `🤒 Symptoms: ${data.symptoms}\n💊 Solutions: ${data.solutions}`);
        return;
    }

    // Step 4B: Fallback to Gemini API
    try {
        await showTypingAnimation();

        const apiKey = "YOUR_API_KEY_HERE";
        const response = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-goog-api-key": apiKey
                },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: userInput }] }]
                })
            }
        );

        const result = await response.json();

        if (result?.candidates?.[0]?.content) {
            addMessage("bot", result.candidates[0].content[0].text);
        } else {
            addMessage("bot", "⚠️ Sorry, I could not process your request.");
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        addMessage("bot", "⚠️ Connection failed. Please try again later.");
    }
}

// ✅ Typing animation for 2-3 seconds
function showTypingAnimation() {
    return new Promise((resolve) => {
        const typingMsg = document.createElement("div");
        typingMsg.classList.add("bot-message");
        typingMsg.innerHTML = '<span class="hand-icon">🤚</span>Typing...';
        chatboxBody.appendChild(typingMsg);
        chatboxBody.scrollTop = chatboxBody.scrollHeight;

        setTimeout(() => {
            chatboxBody.removeChild(typingMsg);
            resolve();
        }, 2000); // 2 seconds
    });
}

// ✅ Event listeners
sendButton.addEventListener("click", handleMessage);
messageInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleMessage();
});
