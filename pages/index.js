import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    founderName: "",
    startupName: "",
    idea: "",
    targetMarket: "",
    businessModel: "",
    fundingStage: "",
    competitors: "",
    problem: "",
    solution: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/submitPitch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    alert(data.message || "Submitted!");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">AI Pitch Deck Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(form).map(([key, value]) => (
          <div key={key}>
            <label className="block font-medium">{key}</label>
            <textarea
              name={key}
              value={value}
              onChange={handleChange}
              rows="2"
              className="w-full p-2 border rounded"
              required
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
