import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";

function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogsData.json");
        const data = await res.json();
        setBlogs(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      {/* category section */}
      <div>Page Category</div>

      {/* blogCards section */}
      <div>
        <BlogCards blogs={blogs}/>
      </div>

      {/* pagination section */}
      <div>Paginations</div>
    </div>
  );
}

export default BlogPage;
