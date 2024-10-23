import Card from "./Card";

export default function Title({ tickets }) {
  // Sort tickets by title in ascending order

  // Return the mapped cards
  return (
    <>
      {tickets.map((ticket) => (
        <Card
          key={ticket.id}
          id={ticket.id}
          title={ticket.title}
          tag={ticket.tag}
        />
      ))}
    </>
  );
}
