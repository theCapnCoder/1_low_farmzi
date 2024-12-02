export default function Clients() {
  const cards = [
    {
      text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
      subtitle: "Designer of Musion",
      title: "Rachel Patterson",
    },
    {
      text: "CEO of Musion",
      subtitle:
        "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
      title: "Jhon Doe",
    },
    {
      text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
      subtitle: "Designer of Musion",
      title: "Rachel Patterson",
    },
  ];
  return (
    <section>
      <div>
        <div>Happy Clients</div>
        <div>Farmzi got best feedback from happy clients</div>
      </div>

      <div>
        {cards.map((card) => (
          <div key={card.text}>
            <div>{card.text}</div>
            <div>{card.subtitle}</div>
            <div>{card.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
