import { Card, Col, Row } from "react-bootstrap";
import { Article } from "../modules/interfaces";

interface props {
    article: Article
}

const NewsListCard = (props: props) => {
    return (
        <Card>
            <Row>
                <Col xs={2}>
                    <Card.Img variant="top" className="img-fluid" src={props.article.image_url} />
                </Col>
                <Col>
                    <Card.Body>

                        <Card.Title>
                            {props.article.title}
                        </Card.Title>
                        <Card.Text>
                            {props.article.summary}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default NewsListCard