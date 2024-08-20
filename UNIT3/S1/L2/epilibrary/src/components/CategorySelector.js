import { Component } from "react";
import { ButtonGroup, Button } from "react-bootstrap";


class CategorySelector extends Component {
    categories = [
        'fantasy',
        'history',
        'horror',
        'romance',
        'scifi',
    ];

    render() {
        return (
            <ButtonGroup aria-label="Books categories" className="mb-4">
                {
                    this.categories.map((category) =>
                        <Button
                            key={category}
                            variant="secondary"
                            onClick={() => this.props.onCategorySelect(category)}
                        >
                            {category}
                        </Button>
                    )
                }
            </ButtonGroup>
        );
    }
}

export default CategorySelector;