import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const LineText: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-[2.5rem_1fr] items-center gap-2">
      <div className="h-[0.0625rem] w-10 bg-white_light"></div>
      {children}
    </div>
  );
};
