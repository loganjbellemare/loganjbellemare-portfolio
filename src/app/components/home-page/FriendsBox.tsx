import React from "react";

type Friend = {
  id: number;
  first_name: string;
  last_name: string;
  profile_pic: string;
};

interface MapFriendsProps {
  friends: Friend[];
}

const friends = [
  {
    id: 1,
    first_name: "Alva",
    last_name: "Horrell",
    profile_pic:
      "https://qph.cf2.quoracdn.net/main-qimg-2c6014a9c5492436b1972a04c74b55cb-lq",
  },
  {
    id: 2,
    first_name: "Salem",
    last_name: "Vanin",
    profile_pic:
      "https://wallpapers.com/images/hd/cool-anime-girl-pfp-sajuna-inui-dgg3rwh8q6po13o6.jpg",
  },
  {
    id: 3,
    first_name: "Simona",
    last_name: "Gowdie",
    profile_pic:
      "https://cdn.hero.page/pfp/3b3e7feb-2729-4c9d-8094-cb136ec21309-cannon-busters'-philly-the-kid-influential-best-black-anime-characters-pfp-1.png",
  },
  {
    id: 4,
    first_name: "Olivie",
    last_name: "Agron",
    profile_pic: "https://avatars.pfptown.com/451/anime-pfp-1869.png",
  },
  {
    id: 5,
    first_name: "Riordan",
    last_name: "Ashe",
    profile_pic: "https://cdn.imgchest.com/files/345xcka2el7.png",
  },
  {
    id: 6,
    first_name: "Waylin",
    last_name: "Kindle",
    profile_pic: "https://avatarfiles.alphacoders.com/334/334049.png",
  },
  {
    id: 7,
    first_name: "Christiano",
    last_name: "Borrows",
    profile_pic: "https://pbs.twimg.com/media/Fbx2tRvXEAAuUW2.jpg",
  },
  {
    id: 8,
    first_name: "Lek",
    last_name: "Hamnet",
    profile_pic:
      "https://gachax.com/anime/wp-content/uploads/sites/29/2023/06/black-anime-girl-pfp-6-300x300.png",
  },
];

export default function FriendsBox() {
  return (
    <div className="ml-2 box-border block text-[80%]">
      <h4 className="py-[2px] px-[7px] font-bold bg-pink-400 text-yellow-200 w-full">
        Logan's Friend Space
      </h4>
      <div className="p-[7px]">
        <p>
          Logan has <b className="text-purple-500">{friends.length}</b> friends
        </p>
        <div className="block">
          <MapFriends friends={friends} />
        </div>
      </div>
    </div>
  );
}

function MapFriends({ friends }: MapFriendsProps) {
  return friends.map((friend: Friend) => (
    <div
      key={friend.id}
      className=" w-[105px] inline-block text-center mr-[10px] mb-[15px]"
    >
      <p className="font-bold w-full break-words align-text-center">
        {friend.first_name}
      </p>
      <img
        alt={`${friend.first_name}'s profile picture`}
        src={friend.profile_pic}
        loading="lazy"
        className="max-w-[95px] max-h-[95px] overflow-clip mx-auto"
      />
    </div>
  ));
}
