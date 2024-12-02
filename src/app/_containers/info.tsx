export default function Info() {
  const list = [
    { count: "Project Done", text: "847 +" },
    { count: "Happy Client", text: "753 +" },
    { count: "Team Member", text: "284 +" },
    { count: "Winning Award", text: "98 +" },
  ];
  return (
    <div>
      <div>
        {list.map((item) => (
          <div key={item.count}>
            <div>{item.count}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>

      <div>
        <div>Project:</div>
        <div>Farm Design</div>

        <div>Client:</div>
        <div>Alex Milan</div>
        
        <div>Location:</div>
        <div>Mississippi, USA</div>
      </div>
    </div>
  );
}
