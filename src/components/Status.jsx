import "../styling/Priority.css";
import Columns from "./Columns"; // Adjust the path as necessary
import Card from "./Card"; // Import your Card component

export default function Status({ data }) {
  // Destructure data directly
  // Create an object to categorize tasks by their status
  const categorizedTasks = {
    Backlog: [],
    Todo: [],
    "In progress": [],
    Done: [],
    Cancelled: [],
  };

  // Iterate over the data to categorize tasks based on their status
  data.forEach((ticket) => {
    if (categorizedTasks[ticket.status]) {
      categorizedTasks[ticket.status].push(ticket);
    }
  });

  // Define the status categories
  const statusCategories = [
    {
      icon: "src/assets/Backlog.svg",
      label: "Backlog",
      tasks: categorizedTasks.Backlog,
    },
    {
      icon: "src/assets/To-do.svg",
      label: "Todo",
      tasks: categorizedTasks.Todo,
    },
    {
      icon: "src/assets/in-progress.svg",
      label: "In Progress",
      tasks: categorizedTasks["In progress"],
    },
    {
      icon: "src/assets/Done.svg",
      label: "Done",
      tasks: categorizedTasks.Done,
    },
    {
      icon: "src/assets/Cancelled.svg",
      label: "Cancelled",
      tasks: categorizedTasks.Cancelled,
    },
  ];

  return (
    <div className="columns">
      {statusCategories.map((category, index) => (
        <div key={index} className="status-column">
          <Columns
            icon={category.icon}
            label={category.label}
            count={category.tasks.length} // Display count of tasks
          />
          <div className="tasks-container">
            {category.tasks.map((task) => (
              <Card
                key={task.id} // Ensure to use a unique key
                id={task.id}
                title={task.title} // Assuming each task has a title
                tag={task.tag} // Assuming each task has a tag
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
