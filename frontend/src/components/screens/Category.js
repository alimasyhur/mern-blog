import React from "react";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import Breadcrumb from "../parts/Breadcrumb";
import Post from "../parts/Post";
import Sidebar from "../parts/Sidebar";

const Category = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section class="blog-section">
        <div class="container">
          <div class="row">
            <Post />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
