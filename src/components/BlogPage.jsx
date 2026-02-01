import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySection from "./CategorySection";
import SideBar from "./SideBar";


function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogsData.json");
        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBlogs();
  }, []);

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === selectedCategory);

  const totalPages = Math.ceil(filteredBlogs.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;

  const paginatedBlogs = filteredBlogs.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [filteredBlogs, totalPages]);

  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="p-8 flex flex-wrap gap-4 justify-evenly">
      {/* Category Section */}
      <div>
        {" "}
        <CategorySection
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </div>

      {/* Blog Cards */}
      <div className="flex flex-col lg:flex-row gap-12">
        <BlogCards blogs={paginatedBlogs} />

        <div>
          <SideBar />
        </div>
      </div>

      {/* Pagination */}
      <div>
        {totalPages > 1 && (
          <Pagination
            onPageChange={handlePageChange}
            currentPage={currentPage}
            totalItems={filteredBlogs.length}
            pageSize={pageSize}
          />
        )}
      </div>


    </div>
  );
}

export default BlogPage;
