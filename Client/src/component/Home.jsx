import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [lastPage, setLastPage] = useState(1);
  // const [posts, setPosts] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  // const handleInfiniteScroll = () => {
  //   const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
  //   const endOfPage = scrollTop + clientHeight >= scrollHeight - 10;

  //   if (endOfPage && currentPage < lastPage) {
  //     setCurrentPage((prevPage) => prevPage + 1);
  //   }
  // };

  // window.addEventListener("scroll", handleInfiniteScroll);

  // useEffect(() => {
  //   if (!localStorage.getItem("user")) {
  //     // Update your component state or UI to handle the case when the user is not signed in
  //     return;
  //   }

  //   getPosts(currentPage);
  // }, [currentPage]);

  // const getPosts = (page = 1) => {
  //   setIsLoading(true);
  //   const baseurl = "https://tarmeezacademy.com/api/v1/";
  //   axios
  //     .get(`${baseurl}posts?limit=3&page=${page}`)
  //     .then(function (response) {
  //       const { data } = response;
  //       const fetchedPosts = data.data;
  //       setPosts((prevPosts) => [...prevPosts, ...fetchedPosts]);
  //       setLastPage(data.meta.last_page);
  //       setIsLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       setIsLoading(false);
  //     });
  // };

  return (
    <div>
      {/* {posts.map((post) => (
        <div
          key={post.id}
          className="card rounded-4 my-4"
          style={{ width: "60% !important" }}
        >

        </div>
      ))}
      {isLoading && <div>Loading...</div>} */}
      <h1>hello</h1>
    </div>
  );
};

export default Home;
