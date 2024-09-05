import { Card } from "react-bootstrap";
import { Article } from "../modules/interfaces";
import { useNavigate } from "react-router-dom";

interface props {
    article: Article
}

const NewsCard = (props: props) => {

    const navigate = useNavigate();

    return (
        <Card
            style={{
                maxWidth: '18rem',
                height: '20em'
            }}
            className="overflow-auto cursor-pointer"
            onClick={() => navigate(`/news/${props.article.id}`)}
        >
            <Card.Img
                variant="top"
                src={props.article.image_url}
                style={{
                    maxHeight: '10em'
                }}
            />
            <Card.Body>
                <Card.Title>
                    {props.article.title}
                </Card.Title>
                <Card.Text >
                    {props.article.summary}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewsCard