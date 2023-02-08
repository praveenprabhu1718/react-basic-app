const Book = (props) => {
  const { title, author, imgPath, number } = props;

  return (
    <article className="book">
      <img src={imgPath} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{`#${number}`}</span>
    </article>
  );
};

export default Book;
