import React from "react";
import classNames from "../utils/classNames";
import { BsSearchHeart } from "react-icons/bs";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
};

export default function Searchbar(props: Props) {
  return (
    <form
      className="flex relative items-center justify-center h-10"
      onSubmit={props.onSubmit}
    >
      <input
        type="text"
        onChange={props.onChange}
        value={props.value}
        placeholder="search for a project or art piece"
        className={classNames(
          "px-4 py-2 border border-purple-500 rounded-l-md focus:border-pink-400 focus:outline-none h-full"
        )}
      />
      <button className="px-4 py-[8px] bg-purple-500 text-white rounded-r-md focus:outline-none focus:bg-pink-400 hover:bg-pink-400 h-full">
        <BsSearchHeart />
      </button>
    </form>
  );
}
