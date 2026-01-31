import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySection from "./CategorySection";

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


  const categories = ["All", ...new Set(blogs.map((blog) => blog.category))];

  return (
    <div className="p-6">
      {/* Category Section */}
      <CategorySection
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />


      {/* Blog Cards */}
      <BlogCards blogs={paginatedBlogs} />


      {/* Pagination */}
      <Pagination
        onPageChange={handlePageChange}
        currentPage={currentPage}
        totalItems={filteredBlogs.length}
        pageSize={pageSize}
      />
    </div>
  );
}

export default BlogPage;
