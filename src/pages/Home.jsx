import React from "react";
import Banner from "../components/Banner";
import BlogPage from "../components/BlogPage";


function Home() {
  return (
    <div>
      <Banner/>

      <div className="max-w-7xl">
        <BlogPage/>
      </div>
    </div>
  )
}

export default Home;
