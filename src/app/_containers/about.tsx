import Image from "next/image";
import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";
import Woman from "../../../public/images/woman.jpg";
import { Button } from "../_components/button";

export default function About() {
  return (
    <section>
      <Container>
        <div className="mb-10">
          <LineText>
            <h5 className="text-gray_light">About Company</h5>
          </LineText>
          <h3 className="text-3xl text-green_light">
            Farmzi have 35 years of experience and know smart way to grow and
            design your beautiful garden.
          </h3>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-10">
          <Image src={Woman} alt="woman" />

          <div>
            <h3 className="text-2xl text-green_light">Who we are?</h3>
            <h5 className="text-gray_light">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm ever
              since the 1500s, when an unknown printer took a galley scrambled
              it make a type specimen book.
            </h5>
            <h4 className="text-green_light">
              “Lorem Ipsum is simply dummy text of the printn industry lorem
              epsum has been the industry and scrambled it make a type specimen
              book”.
            </h4>

            <h3 className="text-2xl text-green_light">Mission and vision</h3>
            <h5 className="text-gray_light">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm ever
              since the 1500s, when an unknown printer took a galley scrambled
              it make a type specimen book.
            </h5>
            <h5 className="text-gray_light">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry. Lorem Ipsum has been the industry`s standard dumm
              scrambled it make a type specimen book.
            </h5>

            <Button className="border-2 border-green_light">Learn More</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
