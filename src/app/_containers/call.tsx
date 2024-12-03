import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Phone from "../../../public/images/phone.png";
import Image from "next/image";

export default function Call() {
  return (
    <section className="bg-green_dark py-20">
      <Container>
        <div className="grid grid-cols-[60%_40%] items-center">
          <div>
            <LineText green className="mb-2">
              <h5 className="text-green_light">Call To Action</h5>
            </LineText>
            <h3 className="font-playfair_display text-5xl leading-tight text-white">
              If you need any gardening service, you can contact with Farmzi.
            </h3>
          </div>

          <div className="flex items-center justify-center gap-6 p-4 bg-green_medium">
            <Image src={Phone} alt="call" />
            <div>
              <h5 className="text-lg leading-relaxed text-green_light">
                Our Services
              </h5>
              <h5 className="text-lg leading-relaxed text-white">
                +00 89 458 648
              </h5>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
