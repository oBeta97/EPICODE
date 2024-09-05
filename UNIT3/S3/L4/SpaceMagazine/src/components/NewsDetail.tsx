import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleNews } from "../modules/fetches";
import { Article } from "../modules/interfaces";
import { Card, Container, Spinner } from "react-bootstrap";

const NewsDetail = () => {

    const params = useParams();
    const [news, setNews] = useState<Article>();
    const [isLoading, setIsLoading] = useState<boolean>(true)

    console.log(params);

    useEffect(() => {
        getSingleNews('https://api.spaceflightnewsapi.net/v4/articles/' + params.newsId)
            .then((news) => {
                setNews(news)
                setIsLoading(false);
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container fluid className="d-flex justify-content-center">
            {
                isLoading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : (
                    <Card style={{width: '25em'}}>
                        <Card.Img
                            variant="top"
                            src={news?.image_url}
                            style={{ height: '15em' }}
                        />
                        <Card.Body>
                            <Card.Title>{news?.title}</Card.Title>
                            <Card.Text>
                                {news?.summary}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                )
            }
        </Container>
    );
};

export default NewsDetail;