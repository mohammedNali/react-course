import "./Card.css";

function Card(fdata) {
  const classes = "card " + fdata.className;
  return <div className={classes}>{fdata.children}</div>;
}

export default Card;
