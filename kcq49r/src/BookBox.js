import "./global.css";

function BookBox({ booklist, selectedBooks }) {
  return (
    <div className="book-box">
      <button>
        <div className="book-image-and-info">
          <div className="book-image">
            <img
              src={booklist.image}
              alt="Later by Stephen King"
              height="200"
            />
            <div className="read-now-button">Read Now</div>
          </div>
          <div className="book-info">
            <div className="book-title">{booklist.title}</div>
            <div className="book-author">{booklist.author}</div>
            <div className="book-price">{booklist.price}</div>
          </div>
        </div>
        <button className="buy-now-button" onClick={() => selectedBooks()}>
          Buy Now
        </button>
      </button>
    </div>
  );
}
export default BookBox;
