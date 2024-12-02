import Image from "next/image";
import Man from "../../../public/images/man.jpg";
import { LineText } from "../_components/line-text";
import { Button } from "../_components/button";
import clsx from "clsx";
import { Container } from "../_components/container";

export default function Main() {
  return (
    <section className="bg-green_light">
      <Container>
        <div className={clsx("grid grid-cols-[1fr_1fr]")}>
          <div>
            <LineText>
              <h4 className="text-white_light">Make a garden with musion.</h4>
            </LineText>

            <h2 className="text-white">
              If you have a garden and a library, you have everything you need.
            </h2>

            <LineText>
              <h4 className="text-white_light">Marcus Tullius Cicero</h4>
            </LineText>

            <Button>All Services</Button>
          </div>

          <div>
            <Image src={Man} alt="man" className="w-full object-cover " />
          </div>
        </div>
      </Container>
    </section>
  );
}
