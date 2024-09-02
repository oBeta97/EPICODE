import { Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";

const AddSteve = ({ steve }) => {
    
    const dispatch = useDispatch();
    
    return (
        <Button
            variant="success"
            onClick={() => {
                dispatch({
                    type: "ADD_TO_STEVE_LIST",
                    payload: steve,
                })
            }}
        >
            <FaPlus />
        </Button>
    );
};

export default AddSteve;