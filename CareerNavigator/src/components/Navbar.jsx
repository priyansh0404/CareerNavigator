export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">CareerNavigator</h1>
        <a href="/" className="hover:underline">Home</a>
      </div>
    </nav>
  );
}
