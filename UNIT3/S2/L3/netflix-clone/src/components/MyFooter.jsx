const MyFooter = () => {
    return(
        <section className="container px-4 mt-3">
            <div className="row row-cols-1 g-3">

                {/* <!-- SOCIAL ICONS --> */}
                <div className="col">
                    <div className="d-flex flex-row gap-3 justify-content-center justify-content-sm-start fs-4">
                        <i className="text-secondary bi bi-facebook"></i>
                        <i className="text-secondary bi bi-instagram"></i>
                        <i className="text-secondary bi bi-twitter-x"></i>
                        <i className="text-secondary bi bi-youtube"></i>
                    </div>
                </div>

                {/* <!-- MENUS LIST --> */}
                <div className="col">
                    <div className="row row-cols-1 row-cols-sm-4 g-0">
                        <div className="col text-center text-sm-start">
                            <p className="my-2">Audio and Subtitles</p>
                            <p className="my-2">Media Center</p>
                            <p className="my-2">Privacy</p>
                            <p className="my-2">Contact Us</p>
                        </div>
                        <div className="col text-center text-sm-start">
                            <p className="my-2">Audio Description</p>
                            <p className="my-2">Investor Realtions</p>
                            <p className="my-2">Legal Notices</p>
                        </div>
                        <div className="col text-center text-sm-start">
                            <p className="my-2">Help Center</p>
                            <p className="my-2">Jobs</p>
                            <p className="my-2">Cookie Preferences</p>
                        </div>
                        <div className="col text-center text-sm-start">
                            <p className="my-2">Gift Cards</p>
                            <p className="my-2">Term of Use</p>
                            <p className="my-2">Corporate info</p>
                        </div>
                    </div>
                </div>

                {/* <!-- SERVICE CODE BUTTON --> */}
                <div className="col justify-content-center">
                    <a href="#" className="btn btn-dark border border-1 border-secondary text-secondary"> Service Code</a>
                </div>

                {/* <!-- COPYRIGHT --> */}
                <div className="col">
                    <small className="fst-italic">&copy; {"1997-2019 Netflix, inc. {i-0d00fcda2fdf9c0de}"}</small>
                </div>

            </div>

        </section>
    );
}


export default MyFooter;