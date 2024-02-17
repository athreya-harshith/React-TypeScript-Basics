import ListGroup from "./components/ListGroup";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";

import "./App.css";
// import { FaCalendar } from "react-icons/fa";
function App() {
  /* 1. ListGroup Component */

  let items = ["New York", "Virginia", "San Fransico", "Florida"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  /*Alert Component */
  /**
    <Alert>
        <span>Hello World</span>
      </Alert>
   */

  /*Dismissible alert 
  const [alertVisibility, setAlertVisibility] = useState(false);


  
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
   */

  return (
    <div>
      {/* <FaCalendar size="150px" /> */}
      <ListGroup
        items={items}
        heading="List  Group"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
