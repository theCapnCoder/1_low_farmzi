import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { Container } from "../_components/container";
import Phone from "../../../public/images/phone.png";

const list = [
  {
    id: 1,
    title: "Expler",
    links: ["About us", "FAQ", "Press & Bolog"],
  },
  {
    id: 2,
    title: "Information",
    links: ["Style Guide", "Change Log", "License"],
  },
  {
    id: 3,
    title: "Service",
    links: ["Flower", "Planting", "Watering"],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-green_dark py-28">
        <Container className="mb-4 grid grid-cols-[60%_40%]">
          <div className="flex justify-between py-16 pr-24 text-white">
            {list.map((list) => (
              <div key={list.id}>
                <h3 className="mb-12 font-playfair_display text-3xl">
                  {list.title}
                </h3>

                <div className="flex flex-col gap-4">
                  {list.links.map((link, idx) => (
                    <h4 key={idx}>{link}</h4>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green_medium p-16 text-white">
            <Image src={Logo} alt="logo" className="mb-24" />

            <p className="mb-7 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry has been the industry`s standard.
            </p>

            <div className="flex items-center gap-10">
              <Image src={Phone} alt="phone" />

              <div>
                <h4 className="leading-relaxed text-gray_light">Call us:</h4>
                <h4 className="font-bold leading-relaxed">+00 89 458 648</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex justify-center bg-[#0a312c] py-5 leading-relaxed text-white">
        <h5>
          © 2022 design and developed by
          <span className="leading-relaxed text-green_light"> Brandbes</span>.
          Powered by
          <span className="leading-relaxed text-green_light"> Webflow</span>.
        </h5>
      </div>
    </footer>
  );
}
