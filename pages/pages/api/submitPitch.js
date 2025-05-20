export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    console.log("Received pitch:", data);
    res.status(200).json({ message: "Pitch received! We'll get back in 48 hours." });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
