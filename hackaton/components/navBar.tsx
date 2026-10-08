
export default function NavBar() {
  return (
    <nav className="flex w-full items-center justify-between bg-gray-800 px-6 py-4 text-white  scale-x-[-1]">
      <h1 className="text-xl font-bold">Navbar</h1>

      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-gray-300">
          Home
        </a>
        <a href="#" className="hover:text-gray-300">
          Features
        </a>
        <a href="#" className="hover:text-gray-300">
          Pricing
        </a>
        <a href="#" className="hover:text-gray-300">
          About
        </a>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Search"
          className="rounded border border-gray-300 bg-white px-3 py-2 text-black"
        />
        <button className="rounded border border-cyan-500 px-4 py-2 text-cyan-400 hover:bg-cyan-500 hover:text-white">
          Search
        </button>
      </div>
    </nav>
  );
}
