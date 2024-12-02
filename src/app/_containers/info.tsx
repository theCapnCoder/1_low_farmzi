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
    <section className="py-20">
      <Container>
        <div className="mb-10 grid grid-cols-4 bg-green_ultra_light p-16">
          {list.map((item) => (
            <div key={item.count} className="flex flex-col items-center">
              <p className="mb-3 text-4xl text-green_light">{item.text}</p>
              <LineText>
                <h5 className="text-gray_light">{item.count}</h5>
              </LineText>
            </div>
          ))}
        </div>

        <div className="relative">
          <Image src={Field} alt="field" />
          <div className="absolute bottom-0 left-0 flex max-w-[25%] flex-col gap-4 bg-green_light px-12 py-16">
            <div>
              <h4 className="text-white_light">Project:</h4>
              <h3 className="text-xl text-white">Farm Design</h3>
            </div>

            <div>
              <h4 className="text-white_light">Client:</h4>
              <h3 className="text-xl text-white">Alex Milan</h3>
            </div>

            <div>
              <h4 className="text-white_light">Location:</h4>
              <h3 className="text-xl text-white">Mississippi, USA</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
