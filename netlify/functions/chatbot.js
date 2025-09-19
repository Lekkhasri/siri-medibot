export async function handler(event) {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "No input received." }),
      };
    }

    let userMessage;
    try {
      userMessage = JSON.parse(event.body).userMessage;
    } catch {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "Invalid JSON input." }),
      };
    }

    if (!userMessage) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "Message is empty." }),
      };
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful medical assistant. Answer health queries briefly and clearly. If unsure, politely suggest consulting a doctor.",
          },
          { role: "user", content: userMessage },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify({
        reply: data.choices?.[0]?.message?.content || "Sorry, no response from OpenAI.",
      }),
    };
  } catch (error) {
    console.error("Error in chatbot function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "Sorry, something went wrong. Please try again later.",
      }),
    };
  }
}
