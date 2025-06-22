export default async function handler(req, res) {
  const { message } = req.body;

  const apiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer sk-or-...`, // Your real key
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: message }]
    }),
  });

  const data = await apiRes.json();
  res.status(200).json(data);
}

