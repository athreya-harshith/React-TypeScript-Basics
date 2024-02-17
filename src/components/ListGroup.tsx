// import { Fragment } from "react";
function ListGroup() {
  let items = ["New York", "Virginia", "San Fransico", "Florida"];
  //   items = [];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {/* the below is the better way for conditional rendering */}
        {items.length === 0 && <p>No Items Found</p>}
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
