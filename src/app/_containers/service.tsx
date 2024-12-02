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
    <section className="bg-green_ultra_light py-10">
      <Container>
        <LineText lineClassName="border-red-500">
          <h5 className="text-gray_light">Our Services</h5>
        </LineText>
        <h2 className="mb-10 text-3xl text-green_light">
          Farmzi always provide amazing gardening and landscaping services.
        </h2>

        <div className="mb-10 grid grid-cols-4 gap-12">
          {cards.map((card) => (
            <div key={card.title}>
              <Image src={card.img} alt={card.alt} className="mb-6" />
              <LineText className="mb-2">
                <h5 className="text-gray_light">{card.text}</h5>
              </LineText>
              <h4 className="text-xl text-green_light">{card.title}</h4>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button className="text-green_light border-2 border-green_light">More Service</Button>
        </div>
      </Container>
    </section>
  );
}
