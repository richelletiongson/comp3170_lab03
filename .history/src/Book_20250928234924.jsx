import './index.css'
import { useState } from 'react'

function Book(props) {
    const [isSelected, setIsSelected] = useState(false);

    const handleLearnMoreClick = () => {
        if (props.url) {
            window.open(props.url);
        }
    };

    const handleRemoveClick = (e) => {
        e.stopPropagation();
        const card = e.currentTarget.closest('.book');
        if (card) {
            card.remove();
        }
    };

    const handleCardClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <div className={`book${isSelected ? ' selected' : ''}`} onClick={handleCardClick}>
            <button className="btn-remove" title="Remove" onClick={handleRemoveClick}>Remove</button>
            <div className="book-image-container">
                <img src={props.image} alt={props.title} className="book-image" />
            </div>
            <div className="book-title">
                <h3>{props.title}</h3>
            </div>
            <div className="price">
                <p className="price-amount">{props.price}</p>
            </div>
            <button className="learn" onClick={(e) => { e.stopPropagation(); handleLearnMoreClick(); }}>
                Learn more
            </button>
        </div>
    );
}

export default Book;