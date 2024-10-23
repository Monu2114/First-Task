// reusable column component
import "../styling/Priority.css";
const Columns = ({ icon, label, count }) => {
  return (
    <div className="col">
      <div className="left">
        <img src={icon} alt={label} className="avatar" />
        {label}
        <span>{count}</span>{" "}
        {/* Wrap the count in a span for styling if needed */}
      </div>
      <div className="right">
        <img src="/assets/add.svg" alt="Add" />
        <img src="/assets/3 dot menu.svg" alt="3dots" />
      </div>
    </div>
  );
};

export default Columns;
