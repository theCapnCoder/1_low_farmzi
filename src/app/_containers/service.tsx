import { Button } from "../_components/button";
import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Flower from "../../../public/images/service/flower.jpg";
import Planting from "../../../public/images/service/planting.jpg";
import Rush from "../../../public/images/service/rush.jpg";
import Watering from "../../../public/images/service/watering.jpg";
import Image from "next/image";

const cards = [
  { img: Flower, alt: "flower", text: "Flower", title: "Planting Flower" },
  { img: Planting, alt: "planting", text: "Planting", title: "Tree Planting" },
  { img: Rush, alt: "rush", text: "Rush", title: "Rush Removal" },
  {
    img: Watering,
    alt: "watering",
    text: "Watering",
    title: "Garden Watering",
  },
];

export default function Service() {
  return (
    <section className="bg-green_ultra_light pt-24 pb-28">
      <Container>
        <LineText gray className="mb-4">
          <h5 className="text-gray_dark">Our Services</h5>
        </LineText>
        <h2 className="mb-12 font-playfair_display text-5xl leading-tight text-green_dark">
          Farmzi always provide amazing gardening and landscaping services.
        </h2>

        <div className="mb-20 grid grid-cols-4 gap-12">
          {cards.map((card) => (
            <div key={card.title}>
              <Image src={card.img} alt={card.alt} className="mb-8" />
              <LineText gray className="mb-2">
                <h5 className="text-gray_dark">{card.text}</h5>
              </LineText>
              <h4 className="font-playfair_display tracking-wider text-xl leading-relaxed text-green_dark">
                {card.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="border-2 w-full max-w-52 border-green_dark bg-transparent text-green_dark">
            More Service
          </Button>
        </div>
      </Container>
    </section>
  );
}
