import React from 'react';
import PostItem from './PostItem';
import Pagination from "./Pagination";

const Post = () => {
  return (
    <div class="col-lg-8">
      <div class="blog-box list-style">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
        
        <Pagination />
      </div>
    </div>
  );
};

export default Post;
