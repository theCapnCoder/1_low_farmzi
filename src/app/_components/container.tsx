import { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export const Container: React.FC<Props> = ({ children }) => {
  return <div className="m-auto max-w-[1140px] w-full">{children}</div>;
};
