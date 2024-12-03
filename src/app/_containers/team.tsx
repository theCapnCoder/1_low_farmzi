import Image from "next/image";
import Girl1 from "../../../public/images/team/girl_1.jpg";
import Girl2 from "../../../public/images/team/girl_2.jpg";
import Girl3 from "../../../public/images/team/girl_3.jpg";
import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";

const cards = [
  {
    id: 1,
    img: Girl1,
    alt: "girl",
    subtitle: "Founder of Farmzi",
    title: "Shoshana Horsley",
    text: "Lorem Ipsum is simply dummy text of the printing and industry has been the indust.",
  },
  {
    id: 2,
    img: Girl2,
    alt: "girl",
    subtitle: "Senior Gardener",
    title: "Kristofer Pennell",
    text: "It is a long established fact that a reader will distracted the readable content.",
  },
  {
    id: 3,
    img: Girl3,
    alt: "girl",
    subtitle: "Garden Designer",
    title: "Matthew Jackson",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority",
  },
];

export default function Team() {
  return (
    <section className="py-24">
      <Container>
        <div className="mb-12 pl-[42%]">
          <LineText gray className="mb-3">
            <h4 className="text-lg leading-relaxed text-gray_dark">
              Team Members
            </h4>
          </LineText>
          <h3 className="font-playfair_display text-5xl leading-tight text-green_dark">
            Farmzi feel proud for skilled team members.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {cards.map((card) => (
            <div key={card.title}>
              <Image src={card.img} alt={card.alt} className="mb-8" />
              <LineText className="mb-3" gray>
                <h5 className="leading-relaxed text-gray_dark">
                  {card.subtitle}
                </h5>
              </LineText>
              <h3 className="mb-5 font-playfair_display text-2xl leading-relaxed text-green_dark">
                {card.title}
              </h3>
              <p className="leading-relaxed max-w-[85%] text-gray_dark">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
