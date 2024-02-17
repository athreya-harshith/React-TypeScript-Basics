// import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
function App() {
  /* 1. ListGroup Component */

  // let items = ["New York", "Virginia", "San Fransico", "Florida"];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  /*
    <ListGroup
        items={items}
        heading="List  Group"
        onSelectItem={handleSelectItem}
      />
   */
  return (
    <div>
      <Alert>
        <span>Hello World</span>
        <ul>
          <li>this is one</li>
        </ul>
      </Alert>
    </div>
  );
}

export default App;
