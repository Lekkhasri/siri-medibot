exports.handler = async (event) => {
  try {
    if (!event.body) {
      return {
        statusCode: 400,
        body: JSON.stringify({ reply: "No input received." }),
      };
    }

    const { userMessage } = JSON.parse(event.body);
    console.log("User message:", userMessage);

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
          { role: "system", content: "You are a helpful medical assistant." },
          { role: "user", content: userMessage }
        ],
        temperature: 0.7
      }),
    });

    const data = await response.json();
    console.log("OpenAI response:", data);

    if (data.error) {
      console.error("OpenAI API Error:", data.error.message);
      return { statusCode: 500, body: JSON.stringify({ reply: "Sorry, the connection to the AI assistant failed. Please check the server logs for details." }) };
    }

    const reply = data?.choices?.[0]?.message?.content;
    if (!reply) {
      console.error("Unexpected API response structure:", data);
      return { statusCode: 500, body: JSON.stringify({ reply: "Sorry, the API returned an unexpected response." }) };
    }

    return { statusCode: 200, body: JSON.stringify({ reply }) };

  } catch (error) {
    console.error("Error in chatbot function:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "Sorry, something went wrong. Please try again later." }),
    };
  }
};

