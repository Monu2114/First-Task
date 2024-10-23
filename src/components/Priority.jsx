import "../styling/Priority.css";
import Columns from "./Columns"; // Adjust the path as necessary
import Card from "./Card"; // Make sure to import your Card component

export default function Priority({ data }) {
  const categorisedPriority = {
    "No Priority": [],
    Low: [],
    Medium: [],
    High: [],
    Urgent: [],
  };

  // Categorize tickets based on their priority
  data.forEach((ticket) => {
    switch (ticket.priority) {
      case 0:
        categorisedPriority["No Priority"].push(ticket); // Ensure the key matches
        break;
      case 1:
        categorisedPriority["Low"].push(ticket);
        break;
      case 2:
        categorisedPriority["Medium"].push(ticket);
        break;
      case 3:
        categorisedPriority["High"].push(ticket);
        break;
      case 4:
        categorisedPriority["Urgent"].push(ticket);
        break;
      default:
        console.warn(`Unexpected priority value: ${ticket.priority}`);
        break;
    }
  });

  // Define priorities with icons and tasks
  const priorities = [
    {
      icon: "/assets/3 dot menu.svg",
      label: "No Priority",
      tasks: categorisedPriority["No Priority"],
    },
    {
      icon: "/assets/SVG - Urgent Priority colour.svg",
      label: "Urgent",
      tasks: categorisedPriority.Urgent,
    },
    {
      icon: "/assets/Img - High Priority.svg",
      label: "High",
      tasks: categorisedPriority.High,
    },
    {
      icon: "/assets/medium.svg",
      label: "Medium",
      tasks: categorisedPriority.Medium,
    },
    {
      icon: "/assets/low.svg",
      label: "Low",
      tasks: categorisedPriority.Low,
    },
  ];

  return (
    <div className="columns">
      {priorities.map((priority, index) => (
        <div key={index} className="priority-column">
          <Columns
            icon={priority.icon}
            label={priority.label}
            count={priority.tasks.length} // Set count to the number of tasks
          />
          <div className="tasks-container">
            {priority.tasks.map((ticket) => (
              <Card
                key={ticket.id} // Ensure to use a unique key
                id={ticket.id}
                title={ticket.title} // Assuming each task has a title
                tag={ticket.tag}
                icon={priority.icon}
                // Adjust props as needed
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
