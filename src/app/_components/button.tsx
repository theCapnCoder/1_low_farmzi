import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Button: React.FC<Props> = ({ children }) => {
  return <button className="bg-white py-2 px-12">{children}</button>;
};
