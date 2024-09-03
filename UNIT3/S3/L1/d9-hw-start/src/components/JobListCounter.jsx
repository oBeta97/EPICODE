import { Badge, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const JobListCounter = (props) => {

    const navigator = useNavigate();
    const selector = useSelector((store) => store.steveList.list);

    return (
        <Button
            variant="primary"
            onClick={() => navigator('/steve-list')}
        >
            Jobs
            
            <Badge className="ms-1" bg="secondary">
                {selector.length}
            </Badge>
        </Button>
    );
}

export default JobListCounter;