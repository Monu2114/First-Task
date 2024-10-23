import Card from "./Card";
export default function PrioritySorted({ tickets }) {
  console.log(tickets);
  return (
    // Added return statement to render the mapped cards
    tickets.map((ticket) => (
      <Card
        key={ticket.id}
        id={ticket.id}
        title={ticket.title}
        tag={ticket.tag}
      />
    ))
  );
}
