import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
}>;

export const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={clsx("m-auto w-full max-w-[1140px]", className)}>
      {children}
    </div>
  );
};
