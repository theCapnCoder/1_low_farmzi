import Image from "next/image";
import Man from "../../../public/images/man.jpg";
import { LineText } from "../_components/line-text";
import { Button } from "../_components/button";
import clsx from "clsx";
import { Container } from "../_components/container";

export default function Main() {
  return (
    <section className="bg-green_dark pt-14 pb-24 mb-28 relative">
      <Container>
        <div className={clsx("grid grid-cols-[1fr_1fr]")}>
          <div className="pt-12">
            <LineText green className="mb-8">
              <h4 className="text-green_light">Make a garden with musion.</h4>
            </LineText>

            <h2 className="mb-6 max-w-md font-playfair_display text-6xl leading-tight text-white">
              If you have a garden and a library, you have everything you need.
            </h2>

            <LineText green className="mb-16">
              <h4 className="text-green_light">Marcus Tullius Cicero</h4>
            </LineText>

            <Button className="text-green_dark w-full max-w-52">All Services</Button>
          </div>

          <div>
            <Image src={Man} alt="man" className="absolute object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
