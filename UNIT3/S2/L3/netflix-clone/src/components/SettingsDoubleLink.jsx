const SettingsDoubleLink = (props) => {
    return (
        <div className="row row-cols-2">
            {
                props.links.map(link => 
                    <a href="#" className="text-decoration-none text-info">{link}</a>
                )
            }
        </div>
    );
}


export default SettingsDoubleLink