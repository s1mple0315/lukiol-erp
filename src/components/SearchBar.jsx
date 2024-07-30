import { useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
const SearchBar = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputClose = () => {
    setInputValue("");
  };

  return (
    <section
      className="searchBar-container w-100 mb-4 px-lg-4 px-3 d-flex justify-content-center align-items-center pt-lg-0 pt-4"
      style={{
        height: "87px",
        backgroundColor: "#E0E5EF",
        position: "relative",
      }}
    >
      <div className="row g-4 container justify-content-lg-between px-0 align-items-center h-100">
        <div className="col-lg-5 col-12" style={{ height: "fit-content" }}>
          <InputGroup>
            <div
              className="searchBar-Wrapper d-flex flex-row align-self-center rounded me-1"
              style={{
                height: "48px",
                width: "100%",
                maxWidth: "428px",
                backgroundColor: "#fff",
              }}
            >
              <img
                src="assets/Search.png"
                className="me-2 align-self-center ms-2"
                style={{ width: "24px", height: "24px" }}
                alt=""
              />
              <FormControl
                type="text"
                className="border-0 me-2"
                value={inputValue}
                onChange={handleInputChange}
                style={{ minWidth: "0", flex: "1" }}
              />
              <img
                src="assets/Close.png"
                className="me-2 align-self-center"
                onClick={handleInputClose}
                style={{ cursor: "pointer" }}
                alt=""
              />
              <img
                src="assets/Filter.png"
                className="me-2 align-self-center"
                style={{ width: "16px", height: "16px", cursor: "pointer" }}
                alt=""
              />
            </div>
          </InputGroup>
        </div>

        <div
          className="right-side-actions mt-lg-2 align-self-center col-lg-5 col-12"
          style={{ width: "100%", maxWidth: "424px" }}
        >
          <div
            className="category-container text-center d-flex justify-content-around"
            style={{ width: "100%" }}
          >
            <div

              id="one-nav-tab"
              className="d-flex flex-column justify-content-center category-item position-relative"
            >
              <h6
                className={`m-0 navbar-brand ${
                  activeCategory === "general" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("general")}
                style={{ cursor: "pointer" }}
              >
                Общего назначения
              </h6>
              <img
                src="assets/active_class_icon.png"
                alt=""
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
            <div
              id="second-nav-tab"
              className="d-flex flex-column justify-content-center category-item position-relative"
            >
              <h6
                className={`m-0 ${
                  activeCategory === "specialized" ? "active" : ""
                }`}
                onClick={() => handleCategoryClick("specialized")}
                style={{ cursor: "pointer" }}
              >
                Специализированные
              </h6>
              <img
                src="assets/active_class_icon.png"
                alt=""
                style={{
                  display: "none",
                  position: "absolute",
                  bottom: "-4px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
