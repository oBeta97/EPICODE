import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromSteveList } from "../redux/actions";

const DeleteSteve = ({ indexToDelete, idToDelete }) => {
    
    const dispatch = useDispatch();
    
    return (
        <Button
            variant="warning"
            onClick={() => dispatch(removeFromSteveList(indexToDelete ?? idToDelete))}
        >
            <FaTrash />
        </Button>
    );
};

export default DeleteSteve;