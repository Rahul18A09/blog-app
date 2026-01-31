// import React from "react";

// const Footer = () => {
//   return (
//     <div className="bg-gray-900">
//       <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4">
//         <div>
//           <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
//             {/* category 1 */}
//             <div>
//               <p className="font-medium tracking-wide text-gray-300">
//                 Category
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     News
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     World
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Games
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     References
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* category 2 */}
//             <div>
//               <p className="font-medium tracking-wide text-gray-300">Apples</p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Web
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     eCommerce
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Business
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Entertainment
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Portfolio
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* category 3 */}
//             <div>
//               <p className="font-medium tracking-wide text-gray-300">Cherry</p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Media
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Brochure
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Nonprofit
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Education
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Projects
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* category 4 */}
//             <div>
//               <p className="font-medium tracking-wide text-gray-300">
//                 Business
//               </p>
//               <ul className="mt-2 space-y-2">
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Infopreneur
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Personal
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Wiki
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Forum
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/"
//                     className="text-gray-500 transition-colors duration-300 hover:text-orange-500"
//                   >
//                     Projects
//                   </a>
//                 </li>
//               </ul>
//             </div> 
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = ({ categories }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">MyBlog</h2>
          <p className="text-sm leading-6">
            A modern blog website built with React and Tailwind CSS.
            Sharing knowledge, tutorials and tech insights.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link to="/blogs" className="hover:text-orange-500">Blogs</Link></li>
            <li><Link to="/about" className="hover:text-orange-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500">Contact</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            {categories?.slice(0, 5).map((category, index) => (
              <li key={index}>
                <Link to="/blogs" className="hover:text-white">
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-orange-500"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-orange-500"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} MyBlog. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
