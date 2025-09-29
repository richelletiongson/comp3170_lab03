import './index.css'

function Book(props) {
    const handleLearnMoreClick = () => {
        if (props.url) {
            window.open(props.url);
        }
    };

    const handleRemoveClick = (e) => {
        const card = e.currentTarget.closest('.book');
        if (card) {
            card.remove();
        }
    };

    return (
        <div className="book">
            <button className="remove-btn" aria-label="Remove" title="Remove" onClick={handleRemoveClick}>×</button>
            <div className="book-image-container">
                <img src={props.image} alt={props.title} className="book-image" />
            </div>
            <div className="book-title">
                <h3>{props.title}</h3>
            </div>
            <div className="price">
                <p className="price-amount">{props.price}</p>
            </div>
            <button className="learn" onClick={handleLearnMoreClick}>
                Learn more
            </button>
        </div>
    );
}

export default Book;