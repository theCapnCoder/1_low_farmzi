import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Image from "next/image";
import Field from "../../../public/images/field.jpg";

export default function Info() {
  const list = [
    { count: "Project Done", text: "847 +" },
    { count: "Happy Client", text: "753 +" },
    { count: "Team Member", text: "284 +" },
    { count: "Winning Award", text: "98 +" },
  ];
  return (
    <section className="py-24 mb-28">
      <Container>
        <div className="mb-24 grid grid-cols-4 bg-green_ultra_light py-16 ">
          {list.map((item) => (
            <div key={item.count} className="flex flex-col items-center">
              <p className="text-5xl leading-relaxed text-green_dark">
                {item.text}
              </p>
              <LineText gray>
                <h5 className="text-lg text-gray_dark">{item.count}</h5>
              </LineText>
            </div>
          ))}
        </div>

        <div className="relative">
          <Image src={Field} alt="field" />
          <div className="absolute bottom-0 left-0 flex max-w-[25%] flex-col gap-4 bg-green_dark px-11 py-12">
            <div>
              <h4 className="leading-relaxed text-green_light">Project:</h4>
              <h3 className="font-playfair_display text-2xl leading-relaxed text-white">
                Farm Design
              </h3>
            </div>

            <div>
              <h4 className="leading-relaxed text-green_light">Client:</h4>
              <h3 className="font-playfair_display text-2xl leading-relaxed text-white">
                Alex Milan
              </h3>
            </div>

            <div>
              <h4 className="leading-relaxed text-green_light">Location:</h4>
              <h3 className="font-playfair_display text-2xl leading-relaxed text-white">
                Mississippi, USA
              </h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
