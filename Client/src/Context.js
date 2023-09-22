import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export let userContext = createContext();
const Context = (props) => {
  const [userValues, setuserValues] = useState([]);
  const [userData, setuserData] = useState(null);
    //user sign
    

    
  const getposts = async (page = 1) => {
    let { data } = await axios.get(`${baseurl}posts?limit=3&page=${page}`);
    setuserValues(data);
  };
  const baseurl = "https://tarmeezacademy.com/api/v1/";

  // pagination

  let currentpage = 1;
  let lastpage = 1;
  const handleInfiniteScroll = () => {
    const endOfPage =
      document.documentElement.scrollTop +
        document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 10;
    if (endOfPage && currentpage < lastpage) {
      currentpage = currentpage + 1;
      getposts(currentpage);
    }
  };
  window.addEventListener("scroll", handleInfiniteScroll);

  // get data from localstorage
  //   function getUserData() {
  //     let userdata = localStorage.getItem("user");
  //     setuserData(userdata);
  //   }
  useEffect(() => {
    // getUserData();
    getposts();
  }, [userData]);

  return (
    <div>
      <userContext.Provider
        value={{
          userValues,
          userData,
          setuserData,
          //   getUserData,
        }}
      >
        {props.children}
      </userContext.Provider>
    </div>
  );
};

export default Context;
