import "../styling/Priority.css";
import Columns from "./Columns"; // Adjust the path as necessary

const status = [
  {
    icon: "src/assets/Backlog.svg",
    label: "Backlog",
    count: 0,
  },
  {
    icon: "src/assets/To-do.svg",
    label: "Todo",
    count: 0,
  },
  {
    icon: "src/assets/in-progress.svg",
    label: "In Progress",
    count: 0,
  },
  {
    icon: "src/assets/Done.svg",
    label: "Done",
    count: 0,
  },
  {
    icon: "src/assets/Cancelled.svg",
    label: "Cancelled",
    count: 0,
  },
];

export default function Priority() {
  return (
    <div className="columns">
      {status.map((priority, index) => (
        <Columns
          key={index}
          icon={priority.icon}
          label={priority.label}
          count={priority.count}
        />
      ))}
    </div>
  );
}
