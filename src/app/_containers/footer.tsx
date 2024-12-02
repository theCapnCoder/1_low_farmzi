export default function Footer() {
  const list = [
    [
      {
        title: "About us",
        links: ["Press & Blog", "FAQ", "Explore"],
      },
      {
        title: "Change Log",
        links: ["License", "Style Guide", "Information"],
      },
      {
        title: "Flower",
        links: ["Watering", "Planting", "Service"],
      },
    ],
  ];
  return (
    <footer>
      {list.map((list) => (
        <div key={list[0].title}>
          <div>{list[0].title}</div>
          <div>
            {list[0].links.map((link) => (
              <div key={link}>{link}</div>
            ))}
          </div>
        </div>
      ))}

      <div>
        <div>Logo</div>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typeset industry
          has been the industry`s standard.
        </div>

        <div>
          <div>SVG</div>

          <div>
            <div>+00 89 458 648</div>
            <div>Call us:</div>
          </div>
        </div>
      </div>

      <div>Brandbes Webflow. Powered by © 2022 design and developed by</div>
    </footer>
  );
}
