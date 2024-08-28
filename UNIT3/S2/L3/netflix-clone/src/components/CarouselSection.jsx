import MyCarousel from "./MyCarousel";

const CarouselSection = (props) =>{

    return (
            <section className="container-fluid px-4 my-5">

                <section className="row">
                    <h4>{props.title}</h4>
                </section>

                <section className="row">

                    <MyCarousel title={props.title} onFetchError={() => props.onFetchError()}/>

                </section>

            </section >
        );
};

export default CarouselSection;