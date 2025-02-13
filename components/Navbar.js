"use client"
import React from 'react'
import Link from 'next/link';
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Nav = () => {
  return (
    <header className="flex justify-end items-center p-5 fixed top-0 w-full bg-white shadow-md z-50">
      <h1 id="nav-title" className="mr-auto text-xl">
        <a href="#hii" className="text-gray-800 hover:text-teal-400 transition-all">DEV.TO</a>
      </h1>
      <nav>
        <ul className="flex items-center space-x-5">
          <li className="text-gray-700 hover:text-green-500 transition-all cursor-pointer">
            <a href="#philosophy">The Philosophy</a>
          </li>
          <li className="text-gray-700 hover:text-yellow-500 transition-all cursor-pointer">
            <a href="#family-wc">Family Wellness Center</a>
          </li>
          <li className="text-gray-700 hover:text-purple-500 transition-all cursor-pointer">
            <a href="#programs">Programs</a>
          </li>
          <li className="text-gray-700 hover:text-red-500 transition-all cursor-pointer">
            <a href="#coaches">Coaches</a>
          </li>
          <li className="text-gray-700 hover:text-indigo-500 transition-all cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li className="text-gray-700 hover:text-teal-400 transition-all cursor-pointer">
            <Link href="https://www.facebook.com/share/1FUzGZWZz3/" target="_blank">
              <FaFacebook />
            </Link>
          </li>
          <li className="text-gray-700 hover:text-teal-400 transition-all cursor-pointer">
            <Link href="https://www.instagram.com/yuktaahara?igsh=anM3d2twa3V0cWc0" target="_blank">
              <FaInstagram />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav


// "use client"
// import React from 'react'
// import Link from 'next/link';
// import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

// const nav = () => {
//   return (
//     <>
    
//       <header className="flex justify-end items-center p-5 fixed top-0 w-full bg-white shadow-md z-50">
//         <h1 id="nav-title" className="mr-auto text-xl">
//           <a href="#hii" className="text-gray-800 hover:text-teal-400 transition-all">DEV.TO</a>
//         </h1>
//         <nav>
//           <ul className="flex items-center space-x-5">
//             {/* <li className="text-gray-700 hover:text-blue-500 transition-all cursor-pointer"><Link href="#home">Home</Link></li> */}
//             <li className="text-gray-700 hover:text-green-500 transition-all cursor-pointer"><Link href="/#philosophy">The Philosophy</Link></li>
//             <li className="text-gray-700 hover:text-yellow-500 transition-all cursor-pointer"><Link href="/#family-wc">Family Wellness Center</Link></li>
//             <li className="text-gray-700 hover:text-purple-500 transition-all cursor-pointer"><Link href="/#programs">Programs</Link></li>
//             <li className="text-gray-700 hover:text-red-500 transition-all cursor-pointer"><Link href="/#coaches">Coaches</Link></li>
//             <li className="text-gray-700 hover:text-indigo-500 transition-all cursor-pointer"><Link href="/#contact">Contact</Link></li>
//             <li className="text-gray-700 hover:text-teal-400 transition-all cursor-pointer"> <Link href={"https://www.facebook.com/share/1FUzGZWZz3/"}> <FaFacebook /></Link></li>
//             {/* <li className="text-gray-700 hover:text-teal-400 transition-all cursor-pointer"> <Link href={""}> <FaLinkedin /></Link></li> */}
//             <li className="text-gray-700 hover:text-teal-400 transition-all cursor-pointer"> <Link href={"https://www.instagram.com/yuktaahara?igsh=anM3d2twa3V0cWc0"}> <FaInstagram/></Link></li>
//           </ul>
//         </nav>
//       </header>

//     </>
//   )
// }

// export default nav

