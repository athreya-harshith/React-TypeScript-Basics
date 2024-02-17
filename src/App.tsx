// import ListGroup from "./components/ListGroup";
import { useState } from "react";
import Alert from "./components/Alert";
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
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>
          <span>Showing the alert</span>
        </Alert>
      )}
      <Button
        color="success"
        onClick={() => {
          console.log("clicked");
          setAlertVisibility(true);
        }}
      >
        Sample Button
      </Button>
    </div>
  );
}

export default App;
