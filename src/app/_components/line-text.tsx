import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  className?: string;
  lineClassName?: string;
}>;

export const LineText: React.FC<Props> = ({ children, className, lineClassName }) => {
  return (
    <div className={clsx("grid grid-cols-[2.5rem_1fr] items-center gap-2", className)}>
      <div className={clsx("h-[0.0625rem] w-10 bg-white_light", lineClassName)}></div>
      {children}
    </div>
  );
};
