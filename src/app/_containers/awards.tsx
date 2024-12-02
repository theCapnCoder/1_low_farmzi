export default function Awards() {
  const cards = [
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
    { img: "" },
  ];

  return (
    <section>
      {cards.map((card) => (
        <div key={card.img}>
          <div>{card.img}</div>
        </div>
      ))}
    </section>
  );
}
