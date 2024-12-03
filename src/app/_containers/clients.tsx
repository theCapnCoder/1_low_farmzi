import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";

const cards = [
  {
    id: 1,
    text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
    subtitle: "Designer of Musion",
    title: "Rachel Patterson",
  },
  {
    id: 2,
    text: "“Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book",
    subtitle: "CEO of Musion",
    title: "Jhon Doe",
  },
];

export default function Clients() {
  return (
    <section className="bg-green_ultra_light py-28">
      <Container>
        <div className="mb-12">
          <LineText gray className="mb-2">
            <h4 className="text-lg leading-relaxed text-gray_dark">
              Happy Clients
            </h4>
          </LineText>
          <h3 className="font-playfair_display text-5xl leading-tight text-green_dark">
            Farmzi got best feedback from happy clients
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-14">
          {cards.map((card) => (
            <div key={card.id} className="bg-white p-16">
              <p className="mb-20 font-playfair_display text-xl leading-snug text-green_dark">
                {card.text}
              </p>
              <LineText className="mb-4" gray>
                <h5 className="leading-relaxed text-gray_dark">
                  {card.subtitle}
                </h5>
              </LineText>
              <h3 className="font-playfair_display text-2xl leading-relaxed text-green_dark">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
