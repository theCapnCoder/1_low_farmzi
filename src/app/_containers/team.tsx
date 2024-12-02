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
    <section className="py-20">
      <Container>
        <div className="mb-10 pl-[40%]">
          <LineText lineClassName="border-gray_light" className="mb-3">
            <h4 className="text-gray_light">Team Members</h4>
          </LineText>
          <h3 className="text-5xl text-green_light">
            Farmzi feel proud for skilled team members.
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {cards.map((card) => (
            <div key={card.title}>
              <Image src={card.img} alt={card.alt} className="mb-3" />
              <LineText className="mb-2 border-gray_light">
                <h5 className="text-gray_light">{card.subtitle}</h5>
              </LineText>
              <h3 className="mb-5 text-2xl text-green_light">{card.title}</h3>
              <p className="text-xl text-gray_light">{card.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
