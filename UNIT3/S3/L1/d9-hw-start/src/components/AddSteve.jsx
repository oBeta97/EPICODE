import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToSteveList } from "../redux/actions";

const AddSteve = ({ steve }) => {
    
    const dispatch = useDispatch();
    
    return (
        <Button
            variant="success"
            onClick={() => dispatch(addToSteveList(steve))}
        >
            <FaPlus />
        </Button>
    );
};

export default AddSteve;