export default function MiniProject() {
  return (
    <div className=" flex flex-col items-center justify-center space-y-6">
      {/* Title */}
      <span className="text-3xl font-bold text-white drop-shadow-md">Mini Projects</span>
      
      {/* Grid of Projects */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full px-4">
        <div className="bg-gradient-to-tr from-indigo-800 to-purple-800 p-6 rounded-2xl shadow-lg transform hover:rotate-[2deg] hover:scale-105 transition-all duration-500">
          <h2 className="text-xl font-semibold mb-2 text-white">Project Title</h2>
          <p className="text-sm text-gray-300">Short description about the project.</p>
        </div>
        {/* Add more project cards here */}
      </div>
    </div>
  );
}
