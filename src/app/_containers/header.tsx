import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import clsx from "clsx";
import Phone from "../../../public/images/phone.png";

export default function Header() {
  const links = ["Home", "About", "Pages", "Blog", "Contact"];

  return (
    <header
      className={clsx(
        "flex items-center justify-between px-[70px] py-7",
        "bg-green_dark",
      )}
    >
      <Image src={Logo} alt="logo" />

      <ul
        className={clsx(
          "flex w-full max-w-sm justify-between mr-20",
          "text-green_light text-[0.938rem]",
        )}
      >
        {links.map((link) => (
          <li
            key={link}
            className="font-roboto cursor-pointer hover:text-white"
          >
            {link}
          </li>
        ))}
      </ul>

      <div className={clsx("flex items-center gap-6 mr-4")}>
        <Image src={Phone} alt="phone" width={44} height={44} />

        <div className={clsx("flex flex-col")}>
          <div className="text-green_light">Call us:</div>
          <div className="text-white">+00 89 458 648</div>
        </div>
      </div>
    </header>
  );
}
