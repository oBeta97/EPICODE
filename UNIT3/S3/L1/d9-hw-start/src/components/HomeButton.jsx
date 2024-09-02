import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const HomeButton = (props) => {

    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate('/')}>
            <FaHome />
        </Button>
    );
};

export default HomeButton