import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Button: React.FC<Props> = ({ children, className }) => {
  return (
    <button className={clsx("bg-white px-12 py-2", className)}>
      {children}
    </button>
  );
};
