const PlanRow = (props) => {
    return (
        <>
            <div className="col-12 col-md-3">
                <h6 className="text-secondary">PLAN DETAILS</h6>
            </div>

            <div className="col">
                <div className="d-flex justify-content-between w-100 ">
                    <p>
                        <span className="fw-bold">
                            Premium
                        </span>
                        <span className="btn btn-sm btn-light border-2 border-black px-3">
                            ULTRA <i className="bi bi-badge-hd-fill m-0"></i>
                        </span>
                    </p>
                    <a href="#" className="text-decoration-none text-info">Change plan</a>
                </div>
            </div>
        </>
    );

}

export default PlanRow;