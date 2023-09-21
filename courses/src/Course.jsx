function Course({ id, content, title, price, removeOneCourse }) {
  return (
    <div className="Card">
      <div className="CardtTtlePrice">
        <h2 className="CardTitle">{title}</h2>
        <h4 className="CardPrice">{price}TL</h4>
      </div>
      <p className="CardContent"> {content}</p>
      <button className="cardDeleteBtn" onClick={() => removeOneCourse(id)}>
        Sil
      </button>
    </div>
  );
}
export default Course;
