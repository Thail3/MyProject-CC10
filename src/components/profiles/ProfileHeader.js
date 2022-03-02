import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import defaultImg from "../../assets/images/profileImg.png";
import { Modal } from "bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "../../config/axios";
import Spinner from "../../components/utils/Spinner";

import defaultBackgroundImg from "../../assets/images/backgroundImg1.jpg";
import ProfileAbout from "./ProfileAbout";

function ProfileHeader({ posts, person }) {
  const [modal, setModal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [backgroundUpdate, setBackgroundUpdate] = useState(null);
  const [bgPicture, setBGPicture] = useState(false);
  const [proPicture, setProPicture] = useState(false);
  const { id } = useParams();

  const modelPF = useRef();
  const modelBg = useRef();
  const inputPF = useRef();
  const inputBg = useRef();
  const {
    user,
    updateUser,
    editAbout,
    setEditAbout,
    setCaptionSub,
    imgInput,
    setImgInput,
  } = useContext(AuthContext);
  // console.log(user);

  const handleClickProfile = () => {
    const modalObj = new Modal(modelPF.current);
    setModal(modalObj);
    modalObj.show();
  };

  const handleClickBackground = () => {
    const modalBg = new Modal(modelBg.current);
    setModal(modalBg);
    modalBg.show();
  };

  const handleClikeUpdateProfile = async () => {
    try {
      console.log(imgInput);
      setLoading(true);
      setProPicture(false);
      const formData = new FormData();
      formData.append("profileImg", imgInput);

      const res = await axios.patch("/users/profile-img", formData);
      updateUser({ profileImg: res.data.profileImg });

      setImgInput(res.data.a.profileImg);

      modal.hide();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChangeBackground = async (e) => {
    try {
      e.preventDefault();
      console.log("TEST", backgroundUpdate);
      setLoading(true);
      const formData = new FormData();
      setBGPicture(false);
      formData.append("backgroundImg", backgroundUpdate);

      const res = await axios.patch("/users/background-img", formData);
      // const renderBg = backgroundUpdate.find(
      //     (e) => e.user.backgroundImg === backgroundUpdate
      // );

      console.log(res.data.a);

      // console.log(renderBg, 'render');
      setBackgroundUpdate(res.data.a.backgroundImg);

      modal.hide();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAbout = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      // console.log(editAbout);
      const res = await axios.patch(`/users/${user.id}`, {
        about: editAbout,
      });
      // console.log(res.data.updateUser);
      setCaptionSub(res.data.updateUser.about);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Spinner />}

      <div className="  ">
        <img
          className=" bg-cover w-full  h-80"
          style={{ objectFit: "cover" }}
          src={
            backgroundUpdate
              ? backgroundUpdate
              : person.backgroundImg
              ? person.backgroundImg
              : defaultBackgroundImg
          }
          alt="backgroundImg"
        />
      </div>

      <div className="flex justify-between ">
        <div className="inline-block  ">
          <img
            className="rounded-circle border-5 border-white -mt-12 ml-3 sm:container sm:aspect-square "
            style={{
              objectFit: "cover",
              width: "100px",
              height: "100px",
            }}
            // src={
            //   imgInput
            //     ? imgInput
            //     : person.profileImg
            //     ? person.profileImg
            //     : defaultImg
            // }
            src={person.profileImg ?? defaultImg}
            alt="ProfilePic"
            role="button"
            onClick={handleClickProfile}
          />
        </div>

        <div>
          {+id === user.id ? (
            <>
              {/* <button>
                <i className="bi bi-justify rounded-full px-3 py-2 mt-3 mr-3  hover:bg-blue-50  border-2 border-blue-400 text-blue-400 font-bold "></i>
              </button> */}
              <button
                className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold ml-5"
                onClick={handleClickBackground}
              >
                แก้ไขพื้นหลังโปรไฟล์
              </button>
              <button
                className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold "
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                แก้ไขแคปชั่น
              </button>
              <Link to="/friend">
                <button className="rounded-full px-3 py-2 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold ">
                  <i className="bi bi-person-lines-fill"></i>
                </button>
              </Link>
            </>
          ) : (
            <></>
          )}
          <Link to="/">
            <button className="rounded-full px-3 py-2 ml-3  mt-3 mr-3 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              <i className="bi bi-house-door-fill"></i>
            </button>
          </Link>
        </div>
      </div>
      {/* {posts.map((item) => ( */}
      <ProfileAbout person={person} />
      {/* ))} */}

      {+id === user.id ? (
        <div className="modal" ref={modelPF}>
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
                <div className="mt-4 mb-5 d-flex justify-content-center ">
                  <input
                    type="file"
                    className="d-none"
                    ref={inputPF}
                    onChange={(e) => {
                      if (e.target.files[0]) setImgInput(e.target.files[0]);
                      setProPicture(true);
                    }}
                  />
                  <img
                    src={
                      proPicture
                        ? URL.createObjectURL(imgInput)
                        : person.profileImg ?? defaultImg
                    }
                    className="rounded-full "
                    style={{
                      objectFit: "cover",
                      height: "300px",
                      width: "300px",
                    }}
                    alt="user"
                    role="button"
                    onClick={() => inputPF.current.click()}
                  />
                </div>
                <div className="d-grid">
                  <button
                    type="button"
                    className="btn text-sky-600 hover:text-blue-800 hover:bg-blue-50 inline-block border-2"
                    disabled={!imgInput}
                    onClick={handleClikeUpdateProfile}
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className="modal " ref={modelBg}>
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title">Edit Background Picture</h5>
            </div>
            <div className="modal-body ">
              <div className="mt-4 mb-5 d-flex justify-content-center">
                <input
                  type="file"
                  className="d-none"
                  ref={inputBg}
                  onChange={(e) => {
                    if (e.target.files[0])
                      setBackgroundUpdate(e.target.files[0]);
                    setBGPicture(true);
                  }}
                />
                <img
                  src={
                    bgPicture
                      ? URL.createObjectURL(backgroundUpdate)
                      : person.backgroundImg
                  }
                  className=""
                  alt="user"
                  role="button"
                  onClick={() => inputBg.current.click()}
                />
              </div>
              <div className="d-grid">
                <button
                  type="button"
                  className="btn text-sky-600 hover:text-blue-800 hover:bg-blue-50 inline-block border-2"
                  disabled={!backgroundUpdate}
                  onClick={handleChangeBackground}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmitAbout}>
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Edit About
                </h5>
              </div>

              <div className="modal-body">
                <input
                  className="form-control"
                  type="text"
                  placeholder="แก้ไขแคปชั่น"
                  aria-label="default input example"
                  value={editAbout}
                  onChange={(e) => setEditAbout(e.target.value)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn text-sky-600 hover:text-blue-800 hover:bg-blue-50 inline-block border-2"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="submit"
                  className="btn text-sky-600 hover:text-blue-800 hover:bg-blue-50 inline-block border-2"
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit About
              </h5>
            </div>

            <div className="modal-body">
              <input
                className="form-control"
                type="text"
                placeholder="แก้ไขแคปชั่น"
                aria-label="default input example"
                value={editAbout}
                onChange={(e) => setEditAbout(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn text-sky-600"
                data-bs-dismiss="modal"
                disabled={!visible}
              >
                Close
              </button>

              <button
                type="button"
                className="btn text-sky-600"
                disabled={!backgroundUpdate}
                onClick={handleSubmitAbout}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default ProfileHeader;
