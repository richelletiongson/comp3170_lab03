function AddBook() {
    return (
        <div className="form-container">
            <form>
                <div className="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="username" placeholder="username"/>
                </div>
                <div className="form-control">
                    <label htmlFor="author">Author:</label>
                    <input type="text" name="author" placeholder="author"/>
                </div>
                <div className="form-control">
                    <label htmlFor="publisher">Publisher:</label>
                    <input type="text" name="publisher" placeholder="publisher"/>
                </div>
                <div className="form-control">
                    <label htmlFor="publication-year">Publication Year:</label>
                    <input type="text" name="publisher-year" placeholder="publisher"/>
                </div>
                <div className="form-control">
                    <label htmlFor="pages">Pages:</label>
                    <input type="text" name="pages" placeholder="pages"/>
                </div>
                <button className="btn primary">Save</button>
            </form>
        </div>
    );
}

export default AddBook;