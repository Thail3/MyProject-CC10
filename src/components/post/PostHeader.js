import defaultImg from "../../assets/images/profileImg.png";
import timeSince from "../../services/timeSince";

function PostHeader({
  post: {
    User: { firstName, lastName, profileImg },
    createdAt,
  },
}) {
  return (
    <div className="d-flex justify-content-between py-2 px-3">
      <div className="d-flex flex-row align-items-center">
        <img
          src={profileImg ?? defaultImg}
          width="50"
          className="rounded-circle"
          alt="user"
          role="button"
        />
        <div className="d-flex flex-column ms-2"></div>
        <span className="fw-bold text-facebook ml-2">
          {firstName} {lastName}
          <small className="text-muted fs-7 fw-light pl-3">
            {timeSince(createdAt)}
          </small>
        </span>
      </div>
      <div className="mt-1 text-muted">
        <div className="dropdown">
          <button
            className="btn text-muted"
            data-bs-toggle="dropdown"
            disabled
          ></button>
          <button className="btn text-muted" data-bs-toggle="dropdown">
            <i class="bi bi-three-dots"></i>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a to="/" className="dropdown-item" href="/">
                <i className="bi bi-trash"></i>
                Edit
              </a>
            </li>
            <li>
              <a to="/" className="dropdown-item" href="/">
                <i className="bi bi-pencil-square"></i>
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
