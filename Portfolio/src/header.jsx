import React from 'react'

function header() {
  return (
    <>
        <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold">MyApp</div>
          <ul className="flex space-x-4 p-2">
            <li><a href="#" className="text-white hover:text-gray-400 ">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default header