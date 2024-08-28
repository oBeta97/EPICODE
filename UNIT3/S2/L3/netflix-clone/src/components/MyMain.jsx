import MyMainTitle from "./MyMainTitle";
import CarouselSection from "./CarouselSection";
import { Component } from "react";
import { Alert } from "react-bootstrap";

class MyMain extends Component {

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
                            <CarouselSection title="dark souls" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="Metal Gear" onFetchError={() => this.handleFetchError()} />

                            <CarouselSection title="Alien" onFetchError={() => this.handleFetchError()} />

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


export default MyMain;