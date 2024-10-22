import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
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
      <button className="display" onClick={toggleDropdown}>
        <img src="src/assets/Display.svg" alt="" />
        Display
        <img src="src/assets/down.svg" alt="" />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-item">
            <label>Ordering</label>
            <select>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
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
