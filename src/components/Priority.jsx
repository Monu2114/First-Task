import "../styling/Priority.css";
import Columns from "./Columns"; // Adjust the path as necessary

const priorities = [
  {
    icon: "src/assets/3 dot menu.svg",
    label: "No priority",
    count: 0,
  },
  {
    icon: "src/assets/SVG - Urgent Priority colour.svg",
    label: "Urgent",
    count: 0,
  },
  {
    icon: "src/assets/Img - High Priority.svg",
    label: "High",
    count: 0,
  },
  {
    icon: "src/assets/medium.svg",
    label: "Medium",
    count: 0,
  },
  {
    icon: "src/assets/low.svg",
    label: "Low",
    count: 0,
  },
];

export default function Priority() {
  return (
    <div className="columns">
      {priorities.map((priority, index) => (
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
