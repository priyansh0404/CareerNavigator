import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

// Attractive black-theme Tailwind UI with routes and a slide deck component.

const slides = [
  {
    title: `CareerNavigator By Ansh`,
    subtitle:
      `AI Career Guidance & Skill Recommendation Platform
      Prepared for: Haridwar University — B.Tech 4th Year Full Stack Batch`,
    bullet: [
      "Prepared by: Priyanshu Prakash",
      "Date: 29 October 2025",
    ],
  },  
  {
    title: "Project Overview",
    content:
      "A web-based platform that helps students discover suitable career paths based on their interests, education, and skills.",
    highlights: [
      "Personalized recommendations",
      "Skill-gap analysis",
      "Learning resource suggestions",
    ],
  },
  {
    title: "Project Objective",
    bullets: [
      "Build an intelligent and interactive platform for guiding students toward ideal careers.",
      "Analyze current skills, identify gaps, and suggest growth paths.",
      "Focus areas: Frontend mastery, recommendation logic, and responsive UI/UX.",
    ],
  },
  {
    title: "Tech Stack",
    bullets: [
      "Frontend: React.js, HTML5, CSS3, JavaScript (ES6+)",
      "UI Framework: Tailwind CSS",
      "Storage: LocalStorage / JSON Server / Mock APIs",
      "Visualization: Chart.js",
      "Tools: VS Code, GitHub, Canva",
    ],
  },
  {
    title: "Key Features",
    bullets: [
      "User Profile Creation",
      "Skill Gap Analysis",
      "Career Recommendation (Top 3 Careers)",
      "Learning Resource Suggestions",
      "Dashboard with Charts",
      "Data Persistence (localStorage)",
      "Responsive UI Design",
    ],
  },
  {
    title: "Advanced Add-ons (Optional)",
    bullets: [
      "AI Chatbot for Q&A",
      "PDF Career Report Download",
      "Shareable Profile Page",
      "Admin Panel for Resources",
      "Dark/Light Mode Toggle",
    ],
  },
  {
    title: "UI/UX Design",
    bullets: [
      "Modern card-based dashboard",
      "Blue/white/gray color palette",
      "Smooth navigation with React Router",
      "Real-time form validation",
      "Charts for skill visualization",
    ],
  },
  {
    title: "Learning Outcomes",
    bullets: [
      "Master React fundamentals & state management",
      "Design AI-like logic for recommendations",
      "Understand LocalStorage & mock APIs",
      "Build interactive data visualizations with Chart.js",
      "Develop a complete, responsive web application",
    ],
  },
  {
    title: "7-Day Milestone Plan",
    table: [
      ["Day 1", "Setup project & UI design sketch"],
      ["Day 2", "Profile creation + LocalStorage integration"],
      ["Day 3", "Recommendation logic"],
      ["Day 4", "Skill-gap chart + Resource page"],
      ["Day 5", "Dashboard & navigation"],
      ["Day 6", "UI polish & testing"],
      ["Day 7", "Final testing & submission"],
    ],
  },
  {
    title: "Deliverables",
    bullets: [
      "Working React project folder",
      "Demo video (2–3 mins)",
      "GitHub repository link",
      "Project report PDF & screenshots",
      "Readme file with setup guide",
    ],
  },
  {
    title: "Future Expansion",
    bullets: [
      "Add backend (Node.js + MongoDB)",
      "Authentication (JWT)",
      "Dynamic API endpoints",
      "Host on Render (backend) & Vercel (frontend)",
    ],
  },
  {
    title: "Resume Statement",
    content:
      "Developed an AI-driven Career Guidance Platform using React.js and LocalStorage. Implemented personalized career recommendations, skill-gap analysis, and learning resource suggestions with an interactive dashboard and charts.",
  },
];

function Nav() {
  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between bg-black/60 glass text-gray-200 fixed top-0 z-30">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
          AI
        </div>
        <div className="text-lg font-semibold">CareerNavigator</div>
      </div>
      <div className="flex items-center gap-3">
        <NavLink to="/" label="Home" />
        <NavLink to="/slides" label="Slides" />
        <NavLink to="/dashboard" label="Dashboard" />
        <Link
          to="/"
          className="ml-4 px-3 py-2 rounded-md bg-sky-600 hover:bg-sky-500 transition"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}

function NavLink({ to, label }) {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md hover:bg-white/5 transition text-sm"
    >
      {label}
    </Link>
  );
}

function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-neutral-900 to-gray-900 text-gray-100 pt-24">
      <div className="max-w-5xl mx-auto p-8 rounded-2xl glass border border-white/6 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6">
            <h1 className="text-4xl font-extrabold leading-tight">
              CareerNavigator 
            </h1>
            <p className="mt-4 text-gray-300">
              AI Career Guidance & Skill Recommendation Platform,

              Interactive platform to help students discover ideal careers,
              analyze skill gaps and recommend learning paths.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => navigate("/slides")}
                className="px-5 py-3 bg-sky-600 rounded-md font-medium hover:bg-sky-500"
              >
                View Project Slides
              </button>
              <button
                onClick={() => navigate("/dashboard")}
                className="px-5 py-3 bg-white/6 rounded-md font-medium hover:bg-white/10"
              >
                Open Dashboard
              </button>
            </div>
          </div>
          <div className="p-6 flex items-center justify-center">
            <div className="w-full h-72 rounded-xl bg-gradient-to-br from-slate-800 to-black p-6 flex flex-col justify-between">
              <div>
                <div className="text-sm text-sky-400 font-medium">
                  Project Preview
                </div>
                <h3 className="text-2xl font-bold mt-2">
                  Smart Career Path Finder
                </h3>
                <p className="mt-2 text-gray-400">
                  Personalized, data-driven and UI-first .
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 p-3 rounded-md bg-black/40 border border-white/5">
                  <div className="text-sm text-gray-300">Top Skills</div>
                  <div className="mt-2 flex gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-sky-700/40 rounded">
                      React
                    </span>
                    <span className="px-2 py-1 bg-sky-700/40 rounded">JS</span>
                    <span className="px-2 py-1 bg-sky-700/40 rounded">
                      Tailwind
                    </span>
                  </div>
                </div>
                <div className="w-28 p-3 rounded-md bg-gradient-to-br from-sky-700 to-indigo-700 flex items-center justify-center text-white font-semibold">
                  <button
                onClick={() => navigate("/dashboard")}
                className="px-5 py-3 bg-white/6 rounded-md font-medium hover:bg-white/10"
              >Dashboard</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slides() {
  const [index, setIndex] = React.useState(0);
  const slide = slides[index];
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-gray-900 text-gray-100 pt-24 pb-12">
      <div className="max-w-5xl mx-auto p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Project Slides</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="px-3 py-2 bg-white/6 rounded-md"
            >
              Prev
            </button>
            <button
              onClick={() =>
                setIndex((i) => Math.min(slides.length - 1, i + 1))
              }
              className="px-3 py-2 bg-sky-600 rounded-md"
            >
              Next
            </button>
          </div>
        </div>

        <div className="p-8 rounded-2xl glass border border-white/6 shadow-xl">
          <div className="flex items-start gap-6">
            <div className="w-2 bg-gradient-to-b from-sky-500 to-indigo-500 rounded h-56" />
            <div className="flex-1">
              <h3 className="text-3xl font-extrabold">{slide.title}</h3>
              {slide.subtitle && (
                <p className="text-sm text-gray-400 mt-2">{slide.subtitle}</p>
              )}
              {slide.content && (
                <p className="mt-4 text-gray-300">{slide.content}</p>
              )}
              {slide.bullet && (
                <ul className="mt-4 grid gap-2">
                  {slide.bullet.map((b, i) => (
                    <li key={i} className="px-4 py-2 bg-black/40 rounded-md">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {slide.bullets && (
                <ul className="mt-4 grid md:grid-cols-2 gap-3">
                  {slide.bullets.map((b, i) => (
                    <li key={i} className="px-4 py-3 bg-black/40 rounded-md">
                      {b}
                    </li>
                  ))}
                </ul>
              )}
              {slide.highlights && (
                <div className="mt-4 flex gap-3 flex-wrap">
                  {slide.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 bg-sky-700/30 rounded-md"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              )}
              {slide.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody>
                      {slide.table.map((row, i) => (
                        <tr key={i} className={i % 2 ? "bg-black/30" : ""}>
                          <td className="px-4 py-3 font-medium">{row[0]}</td>
                          <td className="px-4 py-3 text-gray-300">{row[1]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {slide.resume && (
                <p className="mt-4 text-gray-300">{slide.resume}</p>
              )}
              {slide.resume && (
                <pre className="mt-4 p-3 bg-black/30 rounded">
                  {slide.resume}
                </pre>
              )}
            </div>
            <div className="w-48">
              <div className="p-4 rounded-lg bg-gradient-to-br from-slate-800 to-black border border-white/6">
                <div className="text-xs text-gray-400">Slide</div>
                <div className="text-2xl font-bold mt-2">
                  {index + 1} / {slides.length}
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  Tip: Use Next / Prev to navigate the deck. You can also click
                  any number below to jump.
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2">
                {slides.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`p-2 text-sm rounded ${
                      i === index ? "bg-sky-600" : "bg-white/5"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dashboard() {
  // Simple mock dashboard - in real app you'd add state, charts, etc.
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-gray-900 text-gray-100 pt-24 pb-12">
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Priyanshu's Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 rounded-2xl glass border border-white/6">
            <div className="text-xs text-gray-400">Profile Completion</div>
            <div className="mt-3 text-3xl font-extrabold">78%</div>
            <div className="mt-4 bg-white/6 rounded-full h-2 overflow-hidden">
              <div className="h-2 bg-sky-500" style={{ width: "78%" }}></div>
            </div>
          </div>
          <div className="p-4 rounded-2xl glass border border-white/6">
            <div className="text-xs text-gray-400">Top Skill</div>
            <div className="mt-3 text-2xl font-bold">Frontend Development</div>
            <div className="mt-2 text-gray-400">React, Tailwind, JS</div>
          </div>
          <div className="p-4 rounded-2xl glass border border-white/6">
            <div className="text-xs text-gray-400">Recommended Career</div>
            <div className="mt-3 text-2xl font-bold">Frontend Engineer</div>
            <div className="mt-2 text-gray-400">
              Top 3: Frontend, UI Engineer, Product Engineer
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-4 rounded-2xl glass border border-white/6">
            <h4 className="font-bold">Skill Gap Analysis</h4>
            <p className="text-gray-400 mt-2">
              Interactive charts will show where to upskill. (Use Chart.js or
              Recharts here)
            </p>
            <div className="mt-4 h-48 bg-black/30 rounded flex items-center justify-center text-gray-500">
              Chart placeholder
            </div>
          </div>

          <div className="p-4 rounded-2xl glass border border-white/6">
            <h4 className="font-bold">Learning Resources</h4>
            <ul className="mt-3 space-y-3 text-gray-300">
              <li className="p-3 bg-black/40 rounded">
                React Hooks Deep Dive - 6 hrs
              </li>
              <li className="p-3 bg-black/40 rounded">
                Advanced JavaScript Patterns
              </li>
              <li className="p-3 bg-black/40 rounded">
                Tailwind Design System
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-100">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slides" element={<Slides />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}
