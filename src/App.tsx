import ListGroup from "./components/ListGroup";
function App() {
  let items = ["New York", "Virginia", "San Fransico", "Florida"];
  return (
    <div>
      <ListGroup items={items} heading="List  Group" />
    </div>
  );
}

export default App;
