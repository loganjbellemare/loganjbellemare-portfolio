import React from "react";
import Container from "../Container";
import classNames from "@/app/utils/classNames";
import Image from "next/image";

type Props = {};

export default function HomePage(props: Props) {
  return (
    <Container
      className={classNames(" flex justify-between p-4 gap-2 items-center")}
    >
      {/** left side of profile view */}
      <div className="w-[40%] table-cell left-0 align-top">
        <h3>Logan Bellemare</h3>
        <div className="flex items-center justify-start gap-2">
          <div>
            <Image
              width={200}
              height={200}
              src="https://iili.io/JGr23Dx.jpg"
              alt="Logan's profile picture"
              className=" max-w-[160px] max-h-[160px] mt-[10px]"
            />
          </div>
          <div className=" block text-[80%] max-w-[160px] max-h-[160px]">
            <p className="">
              "In this world, the most fearsome one is a mediocre man who has
              nothing else" -Sigma,
              <br />
              <i>文豪ストレイドッグス(Bungou Stray Dogs)</i>
              <br />
              <b>Asagiri Kafka</b>
            </p>
            <p className=" ">
              Last Active:
              <br /> 666 seconds ago
            </p>
          </div>
        </div>
        <div>
          <p>Mood: 眠い zzzzz 😴</p>
        </div>
      </div>
      {/** right side of profile view */}
      <div>hello from right</div>
    </Container>
  );
}
