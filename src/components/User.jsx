import "../styling/Priority.css";
import Columns from "./slightChange"; // Adjust the path as necessary
import Card from "../components/Card";
export default function Users({ users, tickets }) {
  users.map((user) => {
    user.tasks = tickets.filter((ticket) => {
      return user.id == ticket.userId;
    });
  });
  const icon = "/assets/koala.jpeg";

  return (
    <div className="columns">
      {users.map((user, index) => (
        <div key={index} className="status-column">
          <Columns
            key={index}
            icon={icon}
            label={user.name}
            count={user.tasks.length}
          />
          <div className="tasks-container">
            {user.tasks.map((task) => (
              <Card
                key={task.id} // Ensure to use a unique key
                id={task.id}
                title={task.title} // Assuming each task has a title
                tag={task.tag}
                // Assuming each task has a tag
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
