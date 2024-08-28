import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <button className="bg-success px-1 py-2 rounded text-light" onClick={handleShow}>
                (¬‿¬)
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                className='bg-black'
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header className='bg-black text-light'>
                    <Modal.Title>Edit Profile</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bg-black text-light'>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-4">
                                <img src="./assets/img/avatar.png" class="img-fluid" alt="Avatar" />
                            </div>
                            <div class="col">
                                <div class="d-flex flex-column align-items-start">
                                    <p class="bg-secondary p-2 align-self-stretch">
                                        Strive Student
                                    </p>
                                    <label for="lenguages">Lenguage:</label>
                                    <select class="form-select form-select-sm bg-black border-light mb-3 text-light" style={{ width: "fit-content" }}>
                                        <option selected>English</option>
                                        <option value="1">Italian</option>
                                        <option value="2">Indian</option>
                                        <option value="3">Japanese</option>
                                    </select>

                                    <hr class="border-bottom-1 border-dark-subtle opacity-50 my-2 w-100" />

                                    <h5>Maturity Settings:</h5>
                                    <button type="button" class="btn btn-secondary text-start">ALL MATURITY
                                        RATINGS</button>
                                    <p>Show titles of all maturity ratings for this profile.</p>
                                    <button type="button" class="btn btn-outline-secondary"
                                        data-bs-dismiss="modal">EDIT</button>

                                    <hr class="border-bottom-1 border-dark-subtle opacity-50 my-4 w-100" />

                                    <h5>Autoplay controls</h5>
                                    <div class="form-check">
                                        <input class="form-check-input bg-black border border-dark" type="checkbox"
                                            value="" id="firstCheck" />
                                        <label class="form-check-label" for="firstCheck">
                                            Autoplay next episode in a series on all devices.
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input bg-black border border-dark" type="checkbox"
                                            value="" id="secondCheck" />
                                        <label class="form-check-label" for="secondCheck">
                                            Autoplay previes while browsing on all devices.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='bg-black text-light'>
                    <div class="d-flex flex-row justify-content-evenly w-100 gap-3">
                        <button
                            class="w-100 btn btn-light"
                            onClick={() => handleClose()}
                        >
                            SAVE
                        </button>
                        <button
                            class="w-100 btn btn-outline-light"
                            data-bs-dismiss="modal"
                            onClick={() => handleClose()}
                        >
                            CANCEL
                        </button>
                        <button
                            class="w-100 btn btn-outline-light"
                            onClick={() => handleClose()}
                        >
                            DELETE PROFILE
                        </button>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Example;