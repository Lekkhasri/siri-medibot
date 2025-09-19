export async function handler(event, context) {
  try {
    const { userMessage } = JSON.parse(event.body);

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
    const reply = data?.choices?.[0]?.message?.content || "Sorry, I couldn't get a response.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        reply: "Sorry, something went wrong. Please try again later.",
      }),
    };
  }
}
