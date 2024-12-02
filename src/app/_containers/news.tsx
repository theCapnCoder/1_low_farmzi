export default function News() {
  const cards = [
    [
      {
        date: "March 23, 2022",
        by: "Kristofer Pennell",
        title: "If You're Not Getting Your Garden Harvested Things!",
        text: "Lorem Ipsum is simply dummy text the printing and tpesetting industry. Lorem industry's standard dummy.",
      },
      {
        date: "March 23, 2022",
        by: "Kristofer Pennell",
        title: "How to Plant Flowers with a Success Rate of 90% or Higher!",
        text: "Lorem Ipsum is simply dummy text the printing and tpesetting industry. Lorem industry's standard dummy.",
      },
    ],
  ];
  return (
    <section>
      <div>Latest News</div>
      <div>
        Check now latest tips and tricks of gardening and landscaping from blog.
      </div>

      <div>
        {cards.map((card) => (
          <div key={card[0].title}>
            <div>{card[0].date}</div>
            <div>{card[0].by}</div>
            <div>{card[0].title}</div>
            <div>{card[0].text}</div>
            <button>Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
}
