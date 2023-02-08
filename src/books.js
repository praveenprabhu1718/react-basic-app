import img1 from "./assets/images/book-1.jpg";

const firstBook = {
  title: "Atomic Habits",
  author: "James Clear",
  imgPath: img1,
  id: 1,
};
const secondBook = {
  imgPath:
    "https://images-eu.ssl-images-amazon.com/images/I/71B4h-dSVzL._AC_UL600_SR600,400_.jpg",
  title: "Energize Your Mind",
  author: "Gaur Gopal Das",
  id: 2,
};
const thirdBook = {
  title: "The Psychology of Money",
  author: "Morgan Housel",
  imgPath:
    "https://images-eu.ssl-images-amazon.com/images/I/71g2ednj0JL._AC_UL600_SR600,400_.jpg",
  id: 3,
};
const fourthBook = {
  title: "Ikigai",
  author: "Hector Gracia",
  imgPath:
    "https://images-eu.ssl-images-amazon.com/images/I/814L+vq01mL._AC_UL600_SR600,400_.jpg",
  id: 4,
};

export const books = [firstBook, secondBook, thirdBook, fourthBook];
