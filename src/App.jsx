import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  //calling api after every render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <div className="app">
      <button className="display">
        <img src="src/assets/Display.svg" alt="" />
        Display
        <img src="src/assets/down.svg" alt="" />
      </button>

      <Card
        id="CAM-11"
        avatar="src\assets\koala.jpeg"
        title="Conduct Security Assessment"
        icon="src/assets/koala.jpeg"
        tag="Feature Request"
      />
    </div>
  );
}

export default App;
