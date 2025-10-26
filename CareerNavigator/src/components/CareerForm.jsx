import { useState } from "react";

export default function CareerForm({ onRecommend }) {
  const [user, setUser] = useState({ name: "", education: "", skills: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onRecommend(user);
  };

  return (
    <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-lg mx-auto mt-10">
      <h2 className="text-xl font-semibold text-indigo-600 mb-4 text-center">
        Discover Your Ideal Career
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded-md"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Education (e.g., B.Tech, B.Sc)"
          className="border p-2 rounded-md"
          onChange={(e) => setUser({ ...user, education: e.target.value })}
        />
        <textarea
          placeholder="List your skills (comma separated)"
          className="border p-2 rounded-md"
          onChange={(e) => setUser({ ...user, skills: e.target.value })}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
}
