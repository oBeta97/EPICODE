import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const DeleteSteve = ({ indexToDelete, idToDelete }) => {
    
    const dispatch = useDispatch();
    
    return (
        <Button
            variant="warning"
            onClick={() => {
                dispatch({
                    type: "REMOVE_FROM_STEVE_LIST",
                    payload: indexToDelete ?? idToDelete,
                })
            }}
        >
            <FaTrash />
        </Button>
    );
};

export default DeleteSteve;