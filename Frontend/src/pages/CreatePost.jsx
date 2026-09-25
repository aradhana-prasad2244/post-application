import React from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePost = () => {

  const navigate = useNavigate();

  const handlSubmit = async(e)=>{
    e.preventDefault();

    const formData = new FormData(e.target);
    
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{
      navigate("/feed");
    })
    .catch((error)=>{
      console.log(error);
      alert("Error creating post");
    })
  }

  return (
    <div
      className="create-post"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily: "system-ui",
      }}
    >
      <h1 style={{ color: "gray", fontSize: "28px", fontWeight: "bold" }}>
        Create Post
      </h1>
      <form
      onSubmit={handlSubmit}
        className="form"
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "15px",
          gap: "18px",
        }}
      >
        <input
          className="block w-full cursor-pointer rounded border border-gray-300 bg-white text-sm text-gray-600
               file:mr-4 file:border-0 file:bg-gray-100 file:px-4 file:py-2.5
               file:text-sm file:font-medium file:text-gray-700
               hover:file:bg-gray-200
               focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="file"
          name="image"
          accept="image/*"
        />
        <input 
        className="block w-full rounded border border-gray-300 bg-white text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2"
          type="text"
          name="caption"
          placeholder="Enter caption"
          required
        />
        <button
        className="bg-blue-600 px-3 py-1 border-0 rounded text-white cursor-pointer hover:bg-blue-700"
        type="submit">Sumbit</button>
      </form>
    </div>
  );
};

export default CreatePost;
