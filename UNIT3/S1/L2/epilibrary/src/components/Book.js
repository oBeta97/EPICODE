import { useEffect, useRef, useState } from "react";
import { Card } from "react-bootstrap";


const Book = (props) => {

    const [active, setActive] = useState(props.selectedBook);

    const isFirstRun = useRef(true);


    useEffect(() => {
        
        if(isFirstRun.current){
            isFirstRun.current = false
            return;
        }

        setActive(props.selectedBook)

    }, [props.selectedBook]);
       
    return (
        <Card
            data-testid='book-card'
            style={{ height: '30rem', overflowY: "auto" }}
            className={
                active ? "border-2 border-danger" : ""
            }
        >

            <Card.Img
                variant="top"
                src={props.data.img}
                className="img-fluid"
                style={{ maxHeight: "65%" }}
                onClick={() => {
                    props.onBookClick(
                        !active ?
                            props.data.asin :
                            0
                    )

                    setActive(!active);
                }}
            />
            <Card.Body>
                <Card.Title>{props.data.title}</Card.Title>
                <Card.Text className="small">
                    Price: {props.data.price}€
                </Card.Text>
                <Card.Text className="small">
                    Category: {props.data.category}
                </Card.Text>
            </Card.Body>
        </Card>
    );

}

export default Book;