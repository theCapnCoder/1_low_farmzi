import Image from "next/image";
import Award1 from "../../../public/images/awards/award_1.png";
import Award2 from "../../../public/images/awards/award_2.png";
import Award3 from "../../../public/images/awards/award_3.png";
import Award4 from "../../../public/images/awards/award_4.png";
import Award5 from "../../../public/images/awards/award_5.png";

export default function Awards() {
  const cards = [
    { id: 1, img: Award1, alt: "award" },
    { id: 2, img: Award2, alt: "award" },
    { id: 3, img: Award3, alt: "award" },
    { id: 4, img: Award4, alt: "award" },
    { id: 5, img: Award5, alt: "award" },
  ];

  return (
    <section className="bg-green_ultra_light py-20">
      <div className="flex max-w-5xl justify-between m-auto">
        {cards.map((card) => (
          <div key={card.id}>
            <Image src={card.img} alt={card.alt} />
          </div>
        ))}
      </div>
    </section>
  );
}
