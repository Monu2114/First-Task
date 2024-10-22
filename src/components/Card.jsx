import "../styling/Card.css";
export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <p>{props.id}</p>
        <img className="avatar" src={props.avatar} alt="User Avatar" />
      </div>
      <div className="card-title">
        <h3>{props.title}</h3>
      </div>
      <div className="card-footer">
        <div className="badge">
          <img src="../" alt="icon" />
        </div>
        <button className="tag-button">{props.tag}</button>
      </div>
    </div>
  );
}
