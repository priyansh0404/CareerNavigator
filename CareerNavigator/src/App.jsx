import { useState } from "react";
import Navbar from "./components/Navbar";
import CareerForm from "./components/CareerForm";
import Recommendation from "./components/Recommendation";

function App() {
  const [recommendations, setRecommendations] = useState(null);

  const handleRecommend = (user) => {
    const skills = user.skills.toLowerCase();

    let rec = [];
    if (skills.includes("javascript") || skills.includes("react")) {
      rec.push({
        title: "Frontend Developer",
        description: "Build user interfaces using React, HTML, CSS, and JavaScript."
      });
    }
    if (skills.includes("node") || skills.includes("express")) {
      rec.push({
        title: "Backend Developer",
        description: "Develop REST APIs and handle databases using Node.js and MongoDB."
      });
    }
    if (skills.includes("python") || skills.includes("ai")) {
      rec.push({
        title: "Data Scientist",
        description: "Analyze data, build models, and work with AI systems."
      });
    }

    if (rec.length === 0) {
      rec.push({
        title: "Upskill Required",
        description: "Consider learning web development technologies like React or Node.js."
      });
    }

    setRecommendations(rec);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <CareerForm onRecommend={handleRecommend} />
      <Recommendation data={recommendations} />
    </div>
  );
}

export default App;

