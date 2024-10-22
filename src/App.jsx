import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import Priority from "./components/Priority";
import Status from "./components/Status";
import Users from "./components/User";
function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cardsData, setCardsData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("status"); // State to track selected option
  // Step 1: Create state to store the data
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };
  //calling api after every render
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setCardsData(data.tickets);
        setUsers(data.users); // Step 2: Store data in state

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
        <img src="/assets/Display.svg" alt="" />
        Display
        <img src="/assets/down.svg" alt="" />
      </button>
      {showDropdown && (
        <div className="dropdown">
          <div className="dropdown-item">
            <label>Grouping</label>
            <select onChange={handleDropdownChange} value={selectedOption}>
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
      {selectedOption === "priority" ? (
        <Priority data={cardsData} />
      ) : selectedOption === "status" ? (
        <Status data={cardsData} />
      ) : (
        <Users users={users} tickets={cardsData} />
      )}
    </div>
  );
}

export default App;
