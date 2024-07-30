import React from "react";

const Header = () => {
  return (
    <section className="content-title row gap-lg-0 gap-4 justify-content-lg-between m-auto container py-4">
      <div className="content-left col-lg-7 align-self-center row gap-lg-4 gap-2">
        <h1 className="fs-2" style={{ width: "fit-content" }}>
          Витрина ПО
        </h1>
        <button
          className="btn btn-outline-danger px-4 px-md-2 rounded-5 col-lg-4 col-7"
          style={{ height: "49px" }}
        >
          Администрирование
        </button>
        <button
          className="btn btn-outline-danger rounded-5 col-2 d-flex align-items-center justify-content-center"
          style={{ height: "49px", width: "49px" }}
        >
          <span>
            <img src="assets/quest_icon.png" alt="" />
          </span>
        </button>
      </div>

      <div className="content-right justify-content-lg-end col-lg-4 d-flex align-self-center">
        <div className="user-logo-container position-relative">
          <img className="pe-2" src="assets/user_logo.png" alt="" />
          <span
            className="position-absolute badge rounded-pill"
            style={{
              top: "-8px",
              right: "0px",
              backgroundColor: "#FF414B",
            }}
          >
            20
          </span>
        </div>
        <div className="user-details ms-2 text-lg-end text-start">
          <p className="m-0">Иванов Иван Иванович</p>
          <p className="" style={{ opacity: 0.4 }}>
            Hybridengineer@lukoil.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
