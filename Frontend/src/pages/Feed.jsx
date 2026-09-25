import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
        setPosts(res.data.posts);
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  return (
    <div className="h-lvh w-full flex flex-col px-10 py-2 gap-5 bg-white">
      <h1 className="text-gray-600 text-3xl font-bold">Feed</h1>


      <div className="flex flex-row gap-10 flex-wrap">
        {posts.length > 0 ? (
        posts.map((post) => (
          <div
            className="flex flex-col w-fit gap-1 items-center bg-amber-100 p-5 border-0 rounded-2xl"
            key={post._id}
          >
            <img className="h-50 w-50 object-cover" src={post.image} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <h1>No posts available</h1>
      )}
      </div>
    </div>
  );
};

export default Feed;
