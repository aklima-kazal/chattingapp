import React from "react";
import "./style.css";
import { AiOutlineClose } from "react-icons/ai";
import Cropper from "react-cropper";
import { Button } from "@mui/material";

const Imagecropper = ({ setImage, image, getCropData }) => {
  return (
    <>
      <div className="cropper_box">
        <div className="close_box" onClick={() => setImage("")}>
          <AiOutlineClose />
        </div>
        <div className="preview_photo">
          <div className="img-preview" />
        </div>
        <Cropper
          style={{ height: 400, width: "100%" }}
          initialAspectRatio={1}
          preview=".img-preview"
          src={image}
          viewMode={1}
          guides={true}
          minCropBoxHeight={10}
          minCropBoxWidth={10}
          background={false}
          responsive={true}
          checkOrientation={false}
        />
        <div className="upload_btn " onClick={getCropData}>
          <Button variant="outlined">upload photo</Button>
        </div>
      </div>
    </>
  );
};

export default Imagecropper;
