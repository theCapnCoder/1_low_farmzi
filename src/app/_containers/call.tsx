import { Container } from "../_components/container";
import { LineText } from "../_components/line-text";

export default function Call() {
  return (
    <section className="bg-green_light py-20">
      <Container>
        <div className="grid grid-cols-[1fr_1fr]">
          <div>
            <LineText className="mb-2">
              <h5 className="text-white_light">Call To Action</h5>
            </LineText>
            <h3 className="text-3xl text-white">
              If you need any gardening service, you can contact with Farmzi.
            </h3>
          </div>

          <div className="bg-green_medium flex items-center justify-center gap-6">
            <div className="text-white_light">SVG</div>
            <div>
              <h5 className="text-white_light">Our Services</h5>
              <h5 className="text-white">+00 89 458 648</h5>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
