import React from "react";
import { Modal, ModalBody } from "reactstrap";

const RateModal = ({ toggle, showModal }) => {

    return (<Modal isOpen={showModal} toggle={toggle} centered>
        <ModalBody style={{textAlign: "center", backgroundColor: "black"}}>
            <i className="bi bi-check-all" style={{ fontSize: "3rem", color: "green" }}></i>
            <div>
                <h3 style={{color: "green"}}>Movie sucessfully rated</h3>
            </div>
        </ModalBody>
    </Modal>)
}

export default RateModal