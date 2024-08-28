import MyMainTitle from "./MyMainTitle";
import CarouselSection from "./CarouselSection";
import { Component } from "react";
import { Alert } from "react-bootstrap";

class TvShow extends Component {

    state = {
        fetchError: false
    };

    render() {
        return (
            <>
                <MyMainTitle />

                {
                    this.state.fetchError ? (
                        <Alert variant="danger" className="text-center">
                            Errore nella fetch!
                        </Alert>
                    ) : (
                        <>
                            <CarouselSection title="Naruto" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="Bleach" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="Dragon Ball" onFetchError={() => this.handleFetchError()} />

                        </>
                    )
                }
            </>
        );
    }


    handleFetchError = () =>{
        this.setState({ ...this.state, fetchError: true })
    }

}


export default TvShow;