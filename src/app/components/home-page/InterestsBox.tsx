import React from "react";

export default function InterestsBox() {
  return (
    <div className="border-2 mb-2 border-purple-500 ">
      {/** header */}
      <div className="w-full bg-gradient-to-r from-purple-500 via-violet-500 to-purple-500 box-border text-white text-[80%] py-[2px] px-[7px]">
        <h4>
          <b>Logan's Interests</b>
        </h4>
      </div>
      {/** start of interests table */}
      <div className="box-border sm:text-xs md:text-[80%] overflow-x-auto">
        <table
          cellPadding={3}
          cellSpacing={3}
          className="w-full table border-separate border-gray-400"
        >
          <tbody className="box-border table-row-group align-middle border-spacing-2 sm:text-[80%] lg:text-[100%]">
            {/** general interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                General
              </td>
              <td className="table-cell align-top bg-purple-200">
                Art, anime/manga, Tamagotchi/digital pets, gaming, technology,
                human rights/wellbeing, animals, aesthetics, fashion (especially
                j-fashion), music, self-help/mental health,
                creepypasta/cryptids/folklore/SCPs, old internet, and subculture
                enthusiast
              </td>
            </tr>
            {/** music interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Music
              </td>
              <td className="table-cell align-top bg-purple-200">
                SLEEP TOKEN (WORSHIP), DANCE GAVIN DANCE BABY DOWNTOWN BATTLE
                MOUNTAIN TWOOOOO, anything alt adjacent really, metal, hardcore,
                edm, drum and bass, nu wave, also j-pop, j-metal, and vocaloid
              </td>
            </tr>
            {/** movies interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Movies
              </td>
              <td className="table-cell align-top bg-purple-200">
                Saw, Midsommar, Hellraiser, Studio Ghibli, anything from Jordan
                Peele and Ari Aster, Lord of the Rings, Halloween, Trick 'r'
                Treat, Troll 2, Monster House 2006, The Last Unicorn, The
                Shining, anything that picks my brain and makes me think or
                gives me a visceral emotional reaction
              </td>
            </tr>
            {/** television interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Television
              </td>
              <td className="table-cell align-top bg-purple-200">
                Chainsaw Man, Jigokuraku, Serial Experiments Lain, Jujutsu
                Kaisen, Solo Leveling, Sousou no Frieren, Made in Abyss,
                Jibaku-shounen Hanako-kun, Mahoutsukai no Yome, Bungou Stray
                Dogs, Demon Slayer, HunterxHunter, Mashle, Mob Psycho 100, Odd
                Taxi, Re:Zero, Ouran Host Club
              </td>
            </tr>
            {/** books interests */}
            <tr>
              <td className="table-cell w-[33%] align-top font-bold text-purple-800 bg-purple-300">
                Books
              </td>
              <td className="table-cell align-top bg-purple-200">
                Any listed anime above I've probably read the manga for,
                Jagaaaaaaan!, RG Veda, I'm a whole-hearted believer that Tatsuki
                Fujimoto is the most interesting writer alive I will read
                anyting he puts out
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
