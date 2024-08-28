import { useEffect, useState } from "react";
import { Card, Placeholder, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MovieDetailsComments from "./MovieDetailsComments";

const MovieDetails = (props) => {

    const urlParameter = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [isLoading, setIsLoadign] = useState(true);

    const getMovieDetail = async (movieId) => {

        fetch('http://www.omdbapi.com/?apikey=66a19e9&i=' + movieId)
            .then(response => {
                if (response.ok) {
                    // la chiamata ha tornato 200
                    return response.json()
                } else {
                    // la chiamata ha tornato 400, 401, 403, 404, 500
                    throw new Error('La chiamata non è andata a buon fine')
                }
            })
            .then(searchObj => {
                console.log(searchObj);
                setTimeout(() => {
                    setMovieDetails(searchObj)
                    setIsLoadign(false);
                }, 1000);
            })
            .catch(error => {
                console.error(error);
            })
    }

    useEffect(() => {
        getMovieDetail(urlParameter.movieId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="d-flex flex-column align-items-center gap-3 my-3">
            <h2>Movie Details</h2>
            {
                isLoading ? (
                    <Card className="bg-dark text-light" style={{ width: '25rem' }} >
                        <Spinner className="m-auto my-5" animation="grow" variant="danger" />
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                        </Card.Body>
                    </Card >
                ) : (
                    <Card className="bg-dark text-light" style={{ width: '25rem' }} >
                        <Card.Img variant="top" src={movieDetails.Poster} />
                        <Card.Body>
                            <Card.Title>{movieDetails.Title}</Card.Title>
                            <Card.Text className="small">
                                Director: {movieDetails.Director}
                            </Card.Text>
                            <Card.Text className="small">
                                Genre: {movieDetails.Genre}
                            </Card.Text>
                            <MovieDetailsComments movieId={urlParameter.movieId} />
                        </Card.Body>
                    </Card>
                )
            }
        </div>
    );



};

export default MovieDetails;