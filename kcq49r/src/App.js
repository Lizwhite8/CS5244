import "./global.css";
import BookBox from "./BookBox";
import { bookList } from "./types";
import { useState } from "react";
export default function App() {
  let [selectedBook, setSelectedBook] = useState(0);
  const selectedBooks = () => {
    setSelectedBook(++selectedBook);
    console.log(selectedBook);
  };
  return (
    <div className="App">
      {bookList.map((book) => (
        <BookBox selectedBooks={selectedBooks} booklist={book} />
      ))}
    </div>
  );
}
