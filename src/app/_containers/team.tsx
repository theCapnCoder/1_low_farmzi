export default function Team() {
  const cards = [
    {
      img: "",
      subtitle: "Founder of Farmzi",
      title: "Shoshana Horsley",
      text: "Lorem Ipsum is simply dummy text of the printing and industry has been the indust.",
    },
    {
      img: "",
      subtitle: "Senior Gardener",
      title: "Kristofer Pennell",
      text: "It is a long established fact that a reader will distracted the readable content.",
    },
    {
      img: "",
      subtitle: "Garden Designer",
      title: "Matthew Jackson",
      text: "There are many variations of passages of Lorem Ipsum available, but the majority",
    },
  ];
  return (
    <section>
      <div>
        <div>Team Members</div>
        <div>Farmzi feel proud for skilled team members.</div>
      </div>

      <div>
        {cards.map((card) => (
          <div key={card.title}>
            <div>{card.img}</div>
            <div>{card.subtitle}</div>
            <div>{card.title}</div>
            <div>{card.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
