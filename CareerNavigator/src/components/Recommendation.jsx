export default function Recommendation({ data }) {
  if (!data) return null;

  return (
    <div className="bg-indigo-50 p-6 rounded-xl shadow-md mt-6 max-w-lg mx-auto">
      <h3 className="text-xl font-bold text-green-700 mb-3">Recommended Careers</h3>
      <ul className="space-y-2">
        {data.map((career, index) => (
          <li
            key={index}
            className="bg-white p-3 rounded-md shadow-sm border-l-4 border-indigo-600"
          >
            <h4 className="font-semibold">{career.title}</h4>
            <p className="text-sm text-gray-600">{career.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
