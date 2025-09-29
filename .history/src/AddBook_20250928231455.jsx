function AddBook({ onSave }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSave) {
            onSave();
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="username" placeholder="Book Title..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="author">Author</label>
                    <input type="text" name="author" placeholder="Author"/>
                </div>
                <div className="form-control">
                    <label htmlFor="publisher">Publisher</label>
                    <input type="text" name="publisher" placeholder="Publisher"/>
                </div>
                <div className="form-control">
                    <label htmlFor="publication-year">Publication Year</label>
                    <input type="number" name="publisher-year"/>
                </div>
                <div className="form-control">
                    <label htmlFor="language">Language</label>
                    <input type="text" name="publisher" placeholder="Language"/>
                </div>
                <div className="form-control">
                    <label htmlFor="pages">Pages</label>
                    <input type="number" name="pages"/>
                </div>
                <button type="submit" className="btn primary">SAVE</button>
            </form>
        </div>
    );
}

export default AddBook;