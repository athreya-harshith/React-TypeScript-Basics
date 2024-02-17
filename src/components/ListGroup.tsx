// import { Fragment } from "react";
function ListGroup() {
  let items = ["New York", "Virginia", "San Fransico", "Florida"];
  //   items = [];
  if (items.length === 0)
    return (
      <>
        <h1>List Group</h1>
        <p>No Items found</p>
      </>
    );
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
