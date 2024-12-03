import { Container } from "../_components/container";
import Leaves from "../../../public/images/leaves.jpg";
import Image from "next/image";
import { LineText } from "../_components/line-text";

export default function Intro() {
  return (
    <section className="bg-green_dark">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <div>
            <LineText green className="mb-4">
              <h5 className="leading-relaxed text-green_light">
                Company intro video
              </h5>
            </LineText>
            <h2 className="font-playfair_display text-5xl font-bold leading-tight text-white">
              See our intro video and lets start your dream project.
            </h2>
          </div>

          <Image src={Leaves} alt="leaves" />
        </div>
      </Container>
    </section>
  );
}
