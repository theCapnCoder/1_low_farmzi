import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Fruit1 from "../../../public/images/news/fruit_1.jpg";
import Fruit2 from "../../../public/images/news/fruit_2.jpg";
import Image from "next/image";
import { Button } from "../_components/button";

const cards = [
  {
    id: 1,
    img: Fruit1,
    alt: "fruit",
    date: "March 23, 2022",
    by: "Kristofer Pennell",
    title: "If You're Not Getting Your Garden Harvested Things!",
    text: "Lorem Ipsum is simply dummy text the printing and tpesetting industry. Lorem industry's standard dummy.",
  },
  {
    id: 2,
    img: Fruit2,
    alt: "fruit",
    date: "March 23, 2022",
    by: "Kristofer Pennell",
    title: "How to Plant Flowers with a Success Rate of 90% or Higher!",
    text: "Lorem Ipsum is simply dummy text the printing and tpesetting industry. Lorem industry's standard dummy.",
  },
];

export default function News() {
  return (
    <section className="py-20">
      <Container>
        <LineText className="mb-3">
          <h5 className="text-gray_light">Latest News</h5>
        </LineText>

        <h3 className="mb-8 text-3xl text-green_light">
          Check now latest tips and tricks of gardening and landscaping from
          blog.
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {cards.map((card) => (
            <div key={card.id} className="bg-green_ultra_light">
              <Image src={card.img} alt={card.alt} className="mb-6" />

              <div className="p-8">
                <div className="flex gap-8 mb-8">
                  <div className="flex gap-1">
                    <h4 className="text-lg text-green_light">Date:</h4>
                    <h4 className="text-lg">{card.date}</h4>
                  </div>

                  <div className="flex gap-1">
                    <h4 className="text-lg text-green_light">By:</h4>
                    <h4 className="text-lg">{card.by}</h4>
                  </div>
                </div>

                <h3 className="mb-4 text-2xl text-green_light">{card.title}</h3>
                <p className="mb-8 text-lg text-gray_light">{card.text}</p>
                <Button className="text-green_light">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
