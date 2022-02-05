import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import defaultImg from "../../assets/images/profileImg.png";
import { Modal } from "bootstrap";
import { Link } from "react-router-dom";
import axios from "../../config/axios";
import Spinner from "../../components/utils/Spinner";

function ProfileHeader() {
  const [imgInput, setImgInput] = useState(null);
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);

  const modelEl = useRef();
  const inputEl = useRef();
  const { user, updateUser } = useContext(AuthContext);

  const handleClickProfile = () => {
    const modalObj = new Modal(modelEl.current);
    setModal(modalObj);
    modalObj.show();
  };

  const handleClikeUpdate = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("profileImg", imgInput);

      const res = await axios.patch("/users/profile-img", formData);
      updateUser({ profileImg: res.data.profileImg });
      modal.hide();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="md:mx-auto m-0 p-0 box-border">
        <img src="" alt="" />
      </div>

      <div className="flex justify-between ">
        <div className="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
          <img
            className=" rounded-full"
            src={user.profileImg ?? defaultImg}
            alt="ProfilePic"
            role="button"
            onClick={handleClickProfile}
          />
        </div>

        <div>
          <button className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
            แก้ไขพื้นหลังโปรไฟล์
          </button>
          <Link to="/home">
            <button className="rounded-full px-3 py-2 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              <i class="bi bi-house-door-fill"></i>
            </button>
          </Link>
          <button className="rounded-full px-3 py-2 ml-3 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold ">
            <i className="bi bi-person-lines-fill"></i>
          </button>
        </div>
      </div>

      <div className="modal" ref={modelEl}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Profile Picture</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                onClick={() => setImgInput(null)}
              ></button>
            </div>
            <div className="modal-body">
              <div className="mt-4 mb-5 d-flex justify-content-center">
                <input
                  type="file"
                  className="d-none"
                  ref={inputEl}
                  onChange={(e) => {
                    if (e.target.files[0]) setImgInput(e.target.files[0]);
                  }}
                />
                <img
                  src={
                    imgInput
                      ? URL.createObjectURL(imgInput)
                      : user.profileImg ?? defaultImg
                  }
                  width="200"
                  height="200"
                  className="rounded-circle bg-white"
                  alt="user"
                  role="button"
                  onClick={() => inputEl.current.click()}
                />
              </div>
              <div className="d-grid">
                <button
                  type="button"
                  className="btn btn-primary"
                  disabled={!imgInput}
                  onClick={handleClikeUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileHeader;
