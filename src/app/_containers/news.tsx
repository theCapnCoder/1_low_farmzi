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
    <section className="py-20 mb-8">
      <Container>
        <LineText className="mb-3" gray>
          <h5 className="text-lg leading-relaxed text-gray_dark">
            Latest News
          </h5>
        </LineText>

        <h3 className="text-title mb-12">
          Check now latest tips and tricks of gardening and landscaping from
          blog.
        </h3>

        <div className="grid grid-cols-2 gap-8">
          {cards.map((card) => (
            <div key={card.id} className="bg-green_ultra_light">
              <Image src={card.img} alt={card.alt} className="mb-1" />

              <div className="p-8">
                <div className="mb-5 flex gap-6">
                  <div className="flex gap-1">
                    <h4 className="text-green_dark">Date:</h4>
                    <h4 className="leading-relaxed text-gray_dark">{card.date}</h4>
                  </div>

                  <div className="flex gap-1">
                    <h4 className="text-green_dark">By:</h4>
                    <h4 className="leading-relaxed text-gray_dark">{card.by}</h4>
                  </div>
                </div>

                <h3 className="mb-6 text-2xl text-green_dark font-playfair_display leading-relaxed">{card.title}</h3>
                <p className="mb-12 text-gray_darkl leading-relaxed">{card.text}</p>
                <Button className="text-green_dark w-full max-w-52">Read More</Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
