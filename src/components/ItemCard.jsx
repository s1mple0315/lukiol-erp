import { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";

const ItemCard = ({ type }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    alert("Hello");
  };

  return (
    <>
      <Card
        className="rounded-4 border-0 col-xl-3 col-lg-5 col-md-5 col-12 mb-4"
        style={{ backgroundColor: "#fff" }}
        onClick={handleCardClick}
      >
        <Card.Body>
          <div className="logo-container d-flex justify-content-center">
            <Card.Img
              className="mt-4 mb-5"
              src="assets/logo.png"
              alt=""
              style={{ height: "107px", width: "107px" }}
            />
          </div>
          <div className="title-container text-center">
            <Card.Title className="mb-2">Личный кабинет работника</Card.Title>
            <Card.Text className="mb-3" style={{ opacity: 0.5 }}>
              на базе ЕСУ НПП
            </Card.Text>
          </div>
          <div className="description-container text-center">
            <p>
              Хранение и актуализация основных сведений о работнике. Телефонный
              справочник и оргструктура.
            </p>
          </div>
          <img
            onClick={(e) => {
              e.stopPropagation();
              handleClick();
            }}
            src="assets/i-icon.png"
            className="position-relative float-end"
            alt=""
            style={{ cursor: "pointer" }}
          />
        </Card.Body>
      </Card>

      {showModal && (
        <Modal
          className="rounded-5 border-0"
          show={showModal}
          onHide={handleClose}
          centered
          size="xl"
        >
          <Modal.Header closeButton className="border-0"></Modal.Header>
          <Modal.Body className="row justify-content-between border-0 px-4">
            <div className="modal-content-left d-flex flex-column mb-lg-3 mb-md-3 mb-3 col-md-12 col-xl-5 col-12 mb-3 mb-xl-0">
              <div className="modal-title-container d-flex flex-row align-items-center justify-content-start mb-4">
                <div className="modal-title-img">
                  <img
                    src="assets/logo.png"
                    alt=""
                    style={{ width: "100px" }}
                  />
                </div>
                <div className="modal-title-text ms-3">
                  <p className="m-0" style={{ opacity: 0.4 }}>
                    Последний заход в систему:
                  </p>
                  <p className="m-0">09.05.2024 18:54</p>
                </div>
              </div>
              <div className="modal-title mb-3">
                <h5>WellInfo Западая Сибирь</h5>
              </div>
              <div
                className="modal-description-text"
                style={{ fontSize: "18px" }}
              >
                <p className="m-0">
                  База геолого-геофизических и промысловых данных сегмента
                  Западная Сибирь База геолого-геофизических и промысловых
                  данных сегмента Западная Сибирь База геолого-геофизических и
                  промысловых данных сегмента Западная Сибирь База
                  геолого-геофизических и промысловых данных сегмента Западная
                  Сибирь База геолого-геофизических и промысловых данных
                  сегмента Западная Сибирь База геолого-геофизических и
                  промысловых данных сегмента Западная Сибирь База
                  геолого-геофизических и промысловых данных сегмента Западная
                  Сибирь
                </p>
              </div>
            </div>

            <div className="modal-content-right col-xl-7 col-12 col-md-12 d-flex justify-content-center align-items-center">
              <img
                src="assets/modal_img.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "100%", maxHeight: "100%", height: "auto" }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="border-0 d-flex flex-column flex-lg-row justify-content-start px-5 gap-2">
            <Button
              className="rounded-5 px-4 py-2 mb-2 mb-lg-0"
              variant="danger"
              onClick={handleClose}
              style={{ height: "49px", width: "170px" }}
            >
              {type === "inactive" ? "Подать заявку" : "Открыть"}
            </Button>
            <Button
              className="rounded-5 px-4 py-2"
              variant="outline-danger"
              onClick={handleClose}
              style={{ height: "49px", width: "170px" }}
            >
              Отменить
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ItemCard;
