import Image from "next/image";
import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Woman from "../../../public/images/woman.jpg";
import { Button } from "../_components/button";

export default function About() {
  return (
    <section className="py-28">
      <Container>
        <div className="mb-12">
          <LineText gray className="mb-2">
            <h5 className="text-lg text-gray_dark">About Company</h5>
          </LineText>
          <h3 className="max-w-5xl font-playfair_display text-5xl leading-tight text-green_dark">
            Farmzi have 35 years of experience and know smart way to grow and
            design your beautiful garden.
          </h3>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-10">
          <Image src={Woman} alt="woman" />

          <div className="max-w-xl pl-24 pt-16">
            <h3 className="mb-8 font-playfair_display text-3xl text-green_dark">
              Who we are?
            </h3>
            <h5 className="mb-4 leading-relaxed text-gray_dark">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm ever
              since the 1500s, when an unknown printer took a galley scrambled
              it make a type specimen book.
            </h5>
            <h4 className="mb-8 text-2xl text-green_dark">
              “Lorem Ipsum is simply dummy text of the printn industry lorem
              epsum has been the industry and scrambled it make a type specimen
              book”.
            </h4>

            <h3 className="mb-6 font-playfair_display text-3xl text-green_dark">
              Mission and vision
            </h3>
            <h5 className="mb-4 leading-relaxed text-gray_dark">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm ever
              since the 1500s, when an unknown printer took a galley scrambled
              it make a type specimen book.
            </h5>
            <h5 className="mb-24 leading-relaxed text-gray_dark">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm
              scrambled it make a type specimen book.
            </h5>

            <Button className="border-2 w-full max-w-52 border-green_dark leading-relaxed text-green_dark">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
