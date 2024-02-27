import React from "react";
import classNames from "../utils/classNames";

type Props = React.HTMLProps<HTMLDivElement>;

export default function Container(props: Props) {
  return (
    <div
      {...props}
      className={classNames(
        " lg:max-w-[75%] sm:max-w-[100%] m-auto bg-white",
        props.className
      )}
    ></div>
  );
}
