import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaUser, FaClock, FaArrowLeft } from "react-icons/fa";

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
      <div className="bg-black text-white py-32 px-4 text-center">
        <span className="inline-block bg-orange-500 px-4 py-1 rounded-full text-sm mb-6">
          {category}
        </span>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl mx-auto">
          {title}
        </h1>

        <div className="flex justify-center gap-6 mt-6 text-gray-300 text-sm">
          <span className="flex items-center gap-2">
            <FaUser /> {author}
          </span>
          <span className="flex items-center gap-2">
            <FaClock /> {reading_time}
          </span>
          <span>{published_date}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl mb-10 shadow-lg"
        />

        <p className="text-lg leading-8 text-gray-700">
          {content}
        </p>

        {/* Tags */}
        {tags?.length > 0 && (
          <div className="flex flex-wrap gap-3 mt-8">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-1 bg-gray-200 rounded-full text-sm"
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
    </>
  );
};

export default SingleBlog;
