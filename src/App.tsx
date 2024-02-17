// import ListGroup from "./components/ListGroup";
// import Alert from "./components/Alert";
import Button from "./components/Button";
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

  /*Alert Component */
  /**
    <Alert>
        <span>Hello World</span>
      </Alert>
   */
  return (
    <div>
      <Button color="success" onClick={() => console.log("clicked")}>
        Sample Button
      </Button>
    </div>
  );
}

export default App;
