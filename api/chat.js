export default async function handler(req, res) {
  const { message } = req.body;

  const apiRes = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `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`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "mistralai/mistral-7b-instruct",
      messages: [{ role: "user", content: message }],
    }),
  });

  const data = await apiRes.json();
  res.status(200).json(data);
}
