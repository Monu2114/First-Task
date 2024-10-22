import "../styling/Priority.css";
import Columns from "./Columns"; // Adjust the path as necessary

export default function Users(users) {
  console.log(users);

  return (
    <div className="columns">
      {users.data.map((user, index) => (
        <Columns
          key={index}
          icon="src/assets/koala.jpeg"
          label={user.name}
          //   count={count}
        />
      ))}
    </div>
  );
}
