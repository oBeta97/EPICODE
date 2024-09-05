import { ReactNode } from "react";

interface props {
    insideComponent: ReactNode
}

const CarouselItem = ({ insideComponent }: props) => {
    return (
        <div>
            {insideComponent}
        </div>
    );

};

export default CarouselItem