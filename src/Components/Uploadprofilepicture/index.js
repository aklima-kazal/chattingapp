import React, { useRef, useState } from "react";
import "./style.css";
import { FaImage } from "react-icons/fa6";
import Imagecropper from "./imagecropper";
import "cropperjs/dist/cropper.css";

const Uploadprofile = () => {
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState("");
  // const cropperRef = useRef < ReactCropperElement > null;
  const profilePic = useRef(null);
  const handleProfileUpload = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <div>
      <div className="upload_box">
        <input
          hidden
          type="file"
          ref={profilePic}
          onChange={handleProfileUpload}
        />
        <div className="upload">
          <div
            className="upload_icon"
            onClick={() => profilePic.current.click()}
          >
            <FaImage />
          </div>
          <p>upload photo</p>
        </div>
        {image && (
          <Imagecropper
            setImage={setImage}
            image={image}
            getCropData={getCropData}
          />
        )}
      </div>
    </div>
  );
};

export default Uploadprofile;
