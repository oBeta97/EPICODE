import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import { getNews } from "../modules/fetches";
import { ApiResponse } from "../modules/interfaces";
import { Container, Row, Spinner } from "react-bootstrap";
import CarouselItem from "./CarouselItem";
import NewsCard from "./NewsCard";
import NewsListCard from "./NewsListCard";

const MyMain = () => {

    const [news, setNews] = useState<ApiResponse>();
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [newsList, setNewsList] = useState<ApiResponse>();

    useEffect(() => {
        getNews('https://api.spaceflightnewsapi.net/v4/articles/')
            .then((news) => {
                setNews(news)
                setIsLoading(false);
            })
    }, [])

    useEffect(() => {
        if (news && news.next)
            getNews(news.next)
                .then((news) => {
                    setNewsList(news);
                })
    }, [news])


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <Container fluid>

            <Row>
                {
                    isLoading ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            autoPlaySpeed={10000}
                        >
                            {
                                news?.results.map((n) => <CarouselItem insideComponent={<NewsCard article={n} />} />)
                            }
                        </Carousel>
                    )
                }
            </Row>
            <Row xs={{ cols: 1 }} className="my-4">
                {
                    !newsList ? (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : (
                        newsList?.results.map((n) => <NewsListCard article={n} />)
                    )
                }
            </Row>
        </Container>
    );
};


export default MyMain;