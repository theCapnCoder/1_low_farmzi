import clsx from "clsx";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  gray?: boolean;
  green?: boolean;
  className?: string;
  lineClassName?: string;
}>;

export const LineText: React.FC<Props> = ({
  children,
  gray,
  green,
  className,
  lineClassName,
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-[2.5rem_1fr] items-center gap-2",
        className,
      )}
    >
      <div
        className={clsx(
          "h-[0.0625rem] w-10",
          {
            "bg-gray_dark": gray,
            "bg-green_light": green,
          },
          lineClassName,
        )}
      ></div>
      {children}
    </div>
  );
};
