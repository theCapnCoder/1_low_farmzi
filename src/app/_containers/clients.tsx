import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";

export default function Clients() {
  const cards = [
    {
      text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
      subtitle: "Designer of Musion",
      title: "Rachel Patterson",
    },
    {
      text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
      subtitle: "CEO of Musion",
      title: "Jhon Doe",
    },
  ];
  return (
    <section className="bg-green_ultra_light py-20">
      <Container>
        <div className="mb-10">
          <LineText className="mb-4">
            <h4 className="text-gray_light">Happy Clients</h4>
          </LineText>
          <h3 className="text-3xl text-green_light">
            Farmzi got best feedback from happy clients
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-14">
          {cards.map((card) => (
            <div key={card.text} className="bg-white p-14">
              <p className="mb-10 text-lg text-green_light">{card.text}</p>
              <LineText className="mb-4">
                <h5 className="text-gray_light">{card.subtitle}</h5>
              </LineText>
              <h3 className="text-xl text-green_light">{card.title}</h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
