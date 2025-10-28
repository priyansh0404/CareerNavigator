export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white py-3 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold p-3">CareerNavigator</h1>
        <a href="/" className="hover:underline">Home</a> 
      </div>
    </nav>
  );
}
