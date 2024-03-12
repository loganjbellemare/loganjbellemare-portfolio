import React from "react";

type Props = {};

export default function CommentsBox() {
  return (
    <div className="my-[2-px] ml-2 box-border block text-[80%]">
      <h4 className="py-[2px] px-[7px] font-bold bg-pink-400 text-yellow-200 w-full">
        Logan's Friends Comments
      </h4>
      <div className="p-[7px]">
        <p>
          displaying <b className="text-purple-500">0</b> of{" "}
          <b className="text-purple-500">0</b> comments
        </p>
      </div>
    </div>
  );
}
