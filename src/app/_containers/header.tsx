import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import clsx from "clsx";

export default function Header() {
  const links = ["Home", "Pages", "Contact", "About", "Blog"];

  return (
    <header
      className={clsx(
        "flex items-center justify-between px-[70px] py-8",
        "bg-green_light",
      )}
    >
      <Image src={Logo} alt="logo" />

      <ul className={clsx("flex gap-10", "text-white_light")}>
        {links.map((link) => (
          <li key={link} className="hover:text-white cursor-pointer">
            {link}
          </li>
        ))}
      </ul>

      <div className={clsx("flex")}>
        <div>SVG</div>

        <div className={clsx("flex flex-col")}>
          <div className="text-white_light">Call us:</div>
          <div className="text-white">+00 89 458 648</div>
        </div>
      </div>
    </header>
  );
}
