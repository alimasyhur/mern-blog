import React from 'react';

const Sidebar = () => {
  return (
    <div class="col-lg-4">
      <div class="sidebar">
        <div class="widget social-widget">
          <ul class="social-list">
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
                facebook
                <span>25k likes</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
                twitter
                <span>31k followers</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-instagram"></i>
                instagram
                <span>31k followers</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="widget category-widget">
          <h2>Categories</h2>
          <ul class="category-list">
            <li>
              <a href="#">
                Travel <span>24</span>
              </a>
            </li>
            <li>
              <a href="#">
                Lifestyle <span>16</span>
              </a>
            </li>
            <li>
              <a href="#">
                Food <span>8</span>
              </a>
            </li>
          </ul>
        </div>

        <div class="widget list-widget">
          <h2>Latest Stories</h2>
          <ul class="list-posts">
            <li>
              <a class="text-link" href="#">Lifestyle</a>
              <h2><a href="single-post.html">Fusce pellentesque suscipit.</a></h2>
              <ul class="post-tags">
                <li>2 days ago</li>
                <li><a href="#">0 comments</a></li>
              </ul>
            </li>
            <li>
              <a class="text-link" href="#">Food</a>
              <h2><a href="single-post.html">Integer vitae libero ac risus egestas placerat.</a></h2>
              <ul class="post-tags">
                <li>2 days ago</li>
                <li><a href="#">3 comments</a></li>
              </ul>
            </li>
            <li>
              <a class="text-link" href="#">Lifestyle</a>
              <h2><a href="single-post.html">Vestibulum commodo felisquis tortor.</a></h2>
              <ul class="post-tags">
                <li>4 days ago</li>
                <li><a href="#">0 comments</a></li>
              </ul>
            </li>
            <li>
              <a class="text-link" href="#">Travel</a>
              <h2><a href="single-post.html">Quisque a lectus. </a></h2>
              <ul class="post-tags">
                <li>4 days ago</li>
                <li><a href="#">0 comments</a></li>
              </ul>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Sidebar;
