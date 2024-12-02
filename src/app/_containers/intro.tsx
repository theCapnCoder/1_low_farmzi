import { Container } from "../_components/container";
import Leaves from "../../../public/images/leaves.jpg";
import Image from "next/image";
import { LineText } from "../_components/line-text";

export default function Intro() {
  return (
    <section className="bg-green_light">
      <Container>
        <div className="grid grid-cols-2 items-center">
          <div>
            <LineText className="mb-4">
              <h5 className="text-white_light">Company intro video</h5>
            </LineText>
            <h2 className="text-4xl text-white">
              See our intro video and lets start your dream project.
            </h2>
          </div>

          <Image src={Leaves} alt="leaves" />
        </div>
      </Container>
    </section>
  );
}
