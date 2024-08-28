const MembershipSection = (props) => {

    return (
        <div className="d-flex justify-content-between w-100">
            {
                props.linkOnly ? (
                    <a href="#" className="text-decoration-none text-info text-start">{props.linkText}</a>
                ) :
                    (
                        <>

                            <p className={props.primary ? "fw-bold" : "text-secondary"}>
                                {
                                    props.iconType && <i className={props.iconType}></i>
                                }
                                {props.showUserIcon && (
                                    <span className="bg-success p-1 rounded text-light">
                                        (¬‿¬)
                                    </span>
                                )}

                                {props.description}
                            </p>
                            <div className="d-flex flex-column text-end">
                                <a href={props.link} className="text-decoration-none text-info">{props.linkText}</a>
                                <a href={props.secondaryLink} className="text-decoration-none text-info">{props.secondaryLinkText}</a>
                            </div>
                        </>
                    )
            }
        </div>
    );

}

export default MembershipSection;