import { ButtonGroup, Button } from "react-bootstrap";


const CategorySelector = (props) => {
    const categories = [
        'fantasy',
        'history',
        'horror',
        'romance',
        'scifi',
    ];

    return (
        <ButtonGroup aria-label="Books categories" className="mb-4">
            {
                categories.map((category) =>
                    <Button
                        key={category}
                        variant="secondary"
                        onClick={() => props.onCategorySelect(category)}
                    >
                        {category}
                    </Button>
                )
            }
        </ButtonGroup>
    );
}

export default CategorySelector;