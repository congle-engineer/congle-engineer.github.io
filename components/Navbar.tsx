export default function Navbar() {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-800">MyBlog</div>
      <ul className="flex space-x-6">
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
      </ul>
    </nav>
  );
}
