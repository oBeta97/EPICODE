const MyMainTitle = () => {
    return (
        <section className="container-fluid px-4 my-3">

            <section className="row">
                <div className="col-4 col-sm-3 col-lg-2">
                    <h2>TV Shows</h2>
                </div>

                <div className="col-1">
                    <div className="dropdown">
                        <button className="btn btn-dark border border-1 border-light dropdown-toggle" type="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Genres
                        </button>
                        <ul className="dropdown-menu bg-black-subtle">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Thriller</a></li>
                            <li><a className="dropdown-item" href="#">Comedy</a></li>
                        </ul>
                    </div>
                </div>

                <div className="col">
                    <div className="btn-group btn-group-sm float-end" role="group" aria-label="Small button group">
                        <button type="button" className="btn btn-outline-light">
                            <i className="bi bi-list mx-1"></i>
                        </button>
                        <button type="button" className="btn btn-outline-light">
                            <i className="bi bi-grid mx-1"></i>
                        </button>
                    </div>
                </div>
            </section>

        </section>
    );
}


export default MyMainTitle;