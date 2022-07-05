import { DriveFolderUploadOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import "./new.scss";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("")
  console.log(file)
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={file ? URL.createObjectURL(file): "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlined className="icon" />
                </label>
                <input
                  type="file"
                  name=""
                  id="file"
                  style={{ display: "none" }}
                  onChange={e=>{setFile(e.target.files[0])}}
                />
              </div>
              {inputs.map((elem) => {
                return (
                  <div className="formInput" key={elem.id}>
                    <label>{elem.label}</label>
                    <input
                      type={elem.type}
                      placeholder={elem.placeholder}
                      name=""
                    />
                  </div>
                );
              })}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
