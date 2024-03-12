import React from "react";

export default function InterestsBox() {
  return (
    <div className="border-2 mb-2 border-purple-500 ">
      {/** header */}
      <div className="w-full bg-purple-500 box-border text-white text-[80%] py-[2px] px-[7px]">
        <h4>
          <b>Logan's Interests</b>
        </h4>
      </div>
      {/** start of interests table */}
      <div className="box-border sm:text-xs md:text-[80%]">
        <table
          cellPadding={3}
          cellSpacing={3}
          className="w-full table border-separate border-gray-400"
        >
          <tbody className=" table-row-group align-middle border-spacing-2">
            {/** general interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                General
              </td>
              <td className="table-cell align-top bg-purple-200">
                some general interests
              </td>
            </tr>
            {/** music interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Music
              </td>
              <td className="table-cell align-top bg-purple-200">
                SLEEP TOKEN (WORSHIP)
              </td>
            </tr>
            {/** movies interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Movies
              </td>
              <td className="table-cell align-top bg-purple-200">Saw</td>
            </tr>
            {/** television interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Television
              </td>
              <td className="table-cell align-top bg-purple-200">
                Chainsaw Man, Jigokuraku, JJK, Solo Leveling, Sousou no Frieren,
                Made in Abyss, JSHK, Mahoutsukai no Yome, Bungou Stray Dogs
              </td>
            </tr>
            {/** books interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Books
              </td>
              <td className="table-cell align-top bg-purple-200">
                Any listed anime above I've probably read the manga for
              </td>
            </tr>
            {/** heroes interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Heroes
              </td>
              <td className="table-cell align-top bg-purple-200">
                VESSEL (WORSHIP), ASHNIKKO, ZHEANI SPARKES, ESPEON, IWAKURA
                LAIN, HATSUNE MIKU (TRANS RIGHTS + MINECRAFT BABY!)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
