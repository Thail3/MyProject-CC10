function Spinner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center offcanvas-backdrop show"
      style={{ zIndex: 1100 }}
    >
      <div
        className="spinner-border text-warning"
        style={{ width: "3.5rem", height: "3.5rem" }}
      ></div>
      <span className="text-warning ms-3">Loading...</span>
    </div>
  );
}

export default Spinner;
