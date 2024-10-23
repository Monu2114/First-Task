import { useState, useEffect } from "react";
import "./App.css";
import Priority from "./components/Priority";
import Status from "./components/Status";
import Users from "./components/User";
import Title from "./components/Title";
import PrioritySorted from "./components/PrioritySorted";

function App() {
  const [cardsData, setCardsData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedOption, setSelectedOption] = useState("status");
  const [selectedOrder, setSelectedOrder] = useState("None"); // State to track selected option
  const [showDropdown, setShowDropdown] = useState(false); // Declare showDropdown state

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option
  };

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value); // Update the selected order
  };

  // Fetch API data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setCardsData(data.tickets);
        setUsers(data.users); // Store data in state
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  // Sorting based on the selectedOrder (title or priority)

  const sortedCardsData = [...cardsData].sort((a, b) => {
    if (selectedOrder === "title") {
      return a.title.localeCompare(b.title);
    } else if (selectedOrder === "priority") {
      return a.priority - b.priority; // Assuming priority is a number
    }
    return 0;
  });

  return (
    <div className="app">
      <button className="display" onClick={toggleDropdown}>
        <img src="/assets/Display.svg" alt="" />
        Display
        <img src="/assets/down.svg" alt="" />
      </button>
      <div className="rest">
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
              <select onChange={handleOrder} value={selectedOrder}>
                <option value="None">None</option>
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
          <Users users={users} tickets={users} />
        )}
        {selectedOrder === "title" && <Title tickets={sortedCardsData} />}
        {selectedOrder === "priority" && (
          <PrioritySorted tickets={sortedCardsData} />
        )}
      </div>
    </div>
  );
}

export default App;
