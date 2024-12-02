import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import { Container } from "../_components/container";

const list = [
  {
    title: "About us",
    links: ["Press & Blog", "FAQ", "Explore"],
  },
  {
    title: "Change Log",
    links: ["License", "Style Guide", "Information"],
  },
  {
    title: "Flower",
    links: ["Watering", "Planting", "Service"],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="bg-green_light py-24">
        <Container className="grid grid-cols-2">
          <div className="flex justify-between text-white">
            {list.map((list) => (
              <div key={list.title}>
                <h3 className="mb-8 text-2xl">{list.title}</h3>

                <div className="flex flex-col gap-4">
                  {list.links.map((link) => (
                    <div key={link}>{link}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-green_medium p-16">
            <Image src={Logo} alt="logo" className="mb-20" />

            <p className="mb-6 text-white">
              Lorem Ipsum is simply dummy text of the printing and typeset
              industry has been the industry`s standard.
            </p>

            <div className="flex items-center gap-4">
              <div>SVG</div>

              <div>
                <h4 className="text-white_light">Call us:</h4>
                <h4 className="text-white">+00 89 458 648</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="flex justify-center bg-[#0a312c] py-3 text-white">
        <h5>
          © 2022 design and developed by
          <span className="text-[#a4d6cf]"> Brandbes</span>. Powered by
          <span className="text-[#a4d6cf]"> Webflow</span>.
        </h5>
      </div>
    </footer>
  );
}
