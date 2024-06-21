import React, { useRef, useState } from "react";
import "./style.css";
import { FaImage } from "react-icons/fa6";
import Imagecropper from "./imagecropper";
import "cropperjs/dist/cropper.css";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import userSlice from "../../feature/slice/userSlice";

const Uploadprofile = ({ setOpen }) => {
  const storage = getStorage();
  const dispatch = useDispatch();
  const storageRef = ref(storage, "some-child");
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("");
  const [cropper, setCropper] = useState();
  const auth = getAuth();
  const user = useSelector((users) => users.login.loggedIn);

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
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    const message4 = cropper.getCroppedCanvas().toDataURL();
    uploadString(storageRef, message4, "data_url").then((snapshot) => {
      getDownloadURL(storageRef).then((downloadURL) => {
        updateProfile(auth.currentUser, {
          photoURL: downloadURL,
        }).then(() => {
          setOpen(false);
          dispatch(userSlice({ ...user, photoURL: downloadURL }));
          localStorage.setItem(
            "users",
            JSON.stringify({ ...user, photoURL: downloadURL })
          );
        });
      });
    });
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
            setCropper={setCropper}
          />
        )}
      </div>
    </div>
  );
};

export default Uploadprofile;
