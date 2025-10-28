import { useState } from "react"; 


export default function CareerForm({ onRecommend }) {
  const [user, setUser] = useState({ name: "", education: "", skills: "" });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onRecommend(user);
    
  };

  return (
    <div className="bg-white shadow-[0px_4px_12px_rgba(0,0,0,0.8)] rounded-xl p-6 w-full max-w-lg mx-auto my-20">
      <h2 className="text-xl font-semibold text-slate-600 mb-4 text-center">
        Find Your Ideal Career
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
          placeholder="Enter your highest qualification"
          className="border p-2 rounded-md"
          onChange={(e) => setUser({ ...user, education: e.target.value })}
        />
        <textarea
          placeholder="Enter your skills"
          className="border p-2 rounded-md"
          onChange={(e) => setUser({ ...user, skills: e.target.value })}
        />
        <button
          type="submit"
        
          className="bg-slate-900 text-white py-2 rounded-xl  hover:bg-slate-500 transition"
        >
          Get Recommendations
        </button>
      </form>
    </div>
  );
}
