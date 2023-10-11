const image1 = require("../assets/little-women.gif");
const image2 = require("../assets/moby-dick.gif");
const image3 = require("../assets/outlander.gif");
const image4 = require("../assets/persumed-innocent.gif");

export const bookList = [
  {
    image: image1,
    bookId: 1001,
    title: "The Iliad",
    author: "Homer",
    price: 699,
    isPublic: true
  },
  {
    bookId: 1002,
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    price: 1399,
    isPublic: false,
    image: image2
  },
  {
    bookId: 1003,
    title: "Little Dorrit",
    author: "Charles Dickens",
    price: 599,
    isPublic: true,
    image: image3
  },
  {
    bookId: 1004,
    title: "Moby Dick",
    author: "Herman Melville",
    price: 699,
    isPublic: true,
    image: image4
  }
];
