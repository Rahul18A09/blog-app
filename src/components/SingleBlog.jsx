// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { FaUser, FaClock, FaArrowLeft } from "react-icons/fa";
// import SideBar from "./SideBar";

// const SingleBlog = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [blog, setBlog] = useState(null);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       const res = await fetch("/api/blogsData.json");
//       const data = await res.json();

//       const selectedBlog = data.find((item) => String(item.id) === String(id));

//       setBlog(selectedBlog);
//     };

//     fetchBlog();
//   }, [id]);

//   if (!blog) {
//     return (
//       <div className="py-32 text-center text-xl font-semibold">Loading...</div>
//     );
//   }

//   const {
//     title,
//     image,
//     category,
//     author,
//     published_date,
//     reading_time,
//     content,
//     tags,
//   } = blog;

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="py-40">
//         <div className="bg-black text-white py-32 px-4 text-center">
//           <span className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm mb-6">
//             {category}
//           </span>

//           <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
//             {title}
//           </h1>

//           <div className="flex justify-center gap-6 mt-6 text-gray-300 text-sm">
//             <span className="flex items-center gap-2">
//               <FaUser /> {author}
//             </span>
//             <span className="flex items-center gap-2">
//               <FaClock /> {reading_time}
//             </span>
//             <span>{published_date}</span>
//           </div>
//         </div>

//         {/* Blog Content */}
//         <div className="max-w-5xl mx-auto px-6 py-16">
//           <img
//             src={image}
//             alt={title}
//             className="w-full rounded-xl mb-10 shadow-lg"
//           />

//           <p className="text-lg leading-8 text-gray-700">{content}</p>

//           {/* Tags */}
//           {tags?.length > 0 && (
//             <div className="flex flex-wrap gap-3 mt-8">
//               {tags.map((tag, index) => (
//                 <span
//                   key={index}
//                   className="px-4 py-1 bg-gray-200 rounded-full text-sm"
//                 >
//                   #{tag}
//                 </span>
//               ))}
//             </div>
//           )}

//           {/* Back Button */}
//           <button
//             onClick={() => navigate(-1)}
//             className="mt-12 inline-flex items-center gap-2 text-black font-semibold hover:text-orange-500 transition"
//           >
//             <FaArrowLeft /> Back to Blogs
//           </button>
//         </div>

//         <div className="lg:w-1/2">
//           <SideBar />
//         </div>
//       </div>
//     </>
//   );
// };

// export default SingleBlog;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser, FaClock, FaArrowLeft } from "react-icons/fa";
import SideBar from "./SideBar";

const SingleBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch("/api/blogsData.json");
      const data = await res.json();

      const selectedBlog = data.find(
        (item) => String(item.id) === String(id)
      );

      setBlog(selectedBlog);
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="py-32 text-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
    tags,
  } = blog;

  return (
    <>
      {/* Hero Section */}
      <div className="bg-black text-white py-24 px-4 text-center">
        <span className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm mb-6">
          {category}
        </span>

        <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        <div className="flex justify-center gap-6 mt-6 text-gray-300 text-sm flex-wrap">
          <span className="flex items-center gap-2">
            <FaUser /> {author}
          </span>
          <span className="flex items-center gap-2">
            <FaClock /> {reading_time}
          </span>
          <span>{published_date}</span>
        </div>
      </div>

      {/* Main Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Blog Content */}
          <div className="lg:col-span-2">
            <img
              src={image}
              alt={title}
              className="w-full rounded-xl mb-10 shadow-lg"
            />

            <p className="text-lg leading-8 text-gray-700 whitespace-pre-line">
              {content}
            </p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>  

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            <p className="mb-3 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora accusamus eaque vero iure, consectetur, sit rem commodi earum soluta quasi impedit voluptate molestiae dolorum fugit omnis voluptates doloremque facilis corrupti esse cum eos! Pariatur ipsam praesentium illo, ipsum cupiditate maxime eaque possimus voluptates quis molestiae aspernatur itaque assumenda. Magnam maiores culpa rerum voluptate libero id obcaecati quis ipsam dignissimos aliquid dolores, autem maxime. Modi architecto reprehenderit, illum distinctio molestias aliquid nisi adipisci provident quo a autem dolore quaerat quos consequatur eligendi deleniti at voluptas ducimus officiis ad doloribus necessitatibus ullam? Expedita sequi nobis quisquam fugiat iste laudantium aliquid voluptates?</p>

            


            

            {/* Tags */}
            {tags?.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-8">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-1 bg-gray-200 rounded-full text-sm hover:bg-orange-500 hover:text-white transition cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Back Button */}
            <button
              onClick={() => navigate(-1)}
              className="mt-12 inline-flex items-center gap-2 text-black font-semibold hover:text-orange-500 transition"
            >
              <FaArrowLeft /> Back to Blogs
            </button>
          </div>

          {/* Sidebar */}
          <div>
            <SideBar />
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
