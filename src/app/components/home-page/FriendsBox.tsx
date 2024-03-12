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
      "http://berkeley.edu/vulputate.aspx?quisque=nam&erat=nulla&eros=integer&viverra=pede&eget=justo&congue=lacinia&eget=eget&semper=tincidunt&rutrum=eget&nulla=tempus&nunc=vel&purus=pede&phasellus=morbi&in=porttitor&felis=lorem&donec=id&semper=ligula&sapien=suspendisse&a=ornare&libero=consequat&nam=lectus&dui=in&proin=est&leo=risus&odio=auctor&porttitor=sed&id=tristique&consequat=in&in=tempus&consequat=sit&ut=amet&nulla=sem&sed=fusce&accumsan=consequat&felis=nulla&ut=nisl&at=nunc&dolor=nisl&quis=duis&odio=bibendum&consequat=felis&varius=sed&integer=interdum&ac=venenatis&leo=turpis&pellentesque=enim&ultrices=blandit&mattis=mi&odio=in&donec=porttitor&vitae=pede&nisi=justo&nam=eu&ultrices=massa&libero=donec&non=dapibus&mattis=duis&pulvinar=at&nulla=velit&pede=eu&ullamcorper=est&augue=congue&a=elementum&suscipit=in&nulla=hac&elit=habitasse&ac=platea&nulla=dictumst&sed=morbi&vel=vestibulum&enim=velit&sit=id&amet=pretium&nunc=iaculis&viverra=diam&dapibus=erat&nulla=fermentum&suscipit=justo&ligula=nec&in=condimentum&lacus=neque&curabitur=sapien&at=placerat&ipsum=ante",
  },
  {
    id: 2,
    first_name: "Salem",
    last_name: "Vanin",
    profile_pic:
      "https://latimes.com/sit/amet/lobortis/sapien/sapien.jpg?augue=ac&vestibulum=neque&rutrum=duis&rutrum=bibendum&neque=morbi&aenean=non&auctor=quam&gravida=nec&sem=dui&praesent=luctus&id=rutrum&massa=nulla&id=tellus&nisl=in&venenatis=sagittis&lacinia=dui&aenean=vel&sit=nisl&amet=duis&justo=ac&morbi=nibh&ut=fusce&odio=lacus&cras=purus&mi=aliquet&pede=at&malesuada=feugiat&in=non&imperdiet=pretium&et=quis&commodo=lectus&vulputate=suspendisse&justo=potenti&in=in&blandit=eleifend&ultrices=quam&enim=a&lorem=odio&ipsum=in&dolor=hac&sit=habitasse&amet=platea&consectetuer=dictumst&adipiscing=maecenas&elit=ut&proin=massa&interdum=quis&mauris=augue&non=luctus&ligula=tincidunt&pellentesque=nulla&ultrices=mollis",
  },
  {
    id: 3,
    first_name: "Simona",
    last_name: "Gowdie",
    profile_pic:
      "https://umich.edu/molestie/sed/justo.aspx?cras=adipiscing&pellentesque=molestie&volutpat=hendrerit&dui=at&maecenas=vulputate&tristique=vitae&est=nisl&et=aenean&tempus=lectus&semper=pellentesque&est=eget&quam=nunc&pharetra=donec&magna=quis&ac=orci&consequat=eget&metus=orci&sapien=vehicula&ut=condimentum",
  },
  {
    id: 4,
    first_name: "Olivie",
    last_name: "Agron",
    profile_pic:
      "http://mac.com/ut/at/dolor/quis/odio.xml?potenti=pede&nullam=libero&porttitor=quis&lacus=orci&at=nullam&turpis=molestie&donec=nibh&posuere=in&metus=lectus&vitae=pellentesque&ipsum=at&aliquam=nulla&non=suspendisse&mauris=potenti&morbi=cras&non=in&lectus=purus&aliquam=eu&sit=magna&amet=vulputate&diam=luctus&in=cum&magna=sociis&bibendum=natoque&imperdiet=penatibus&nullam=et&orci=magnis&pede=dis&venenatis=parturient&non=montes&sodales=nascetur&sed=ridiculus&tincidunt=mus&eu=vivamus&felis=vestibulum&fusce=sagittis&posuere=sapien&felis=cum&sed=sociis&lacus=natoque&morbi=penatibus&sem=et&mauris=magnis&laoreet=dis&ut=parturient&rhoncus=montes&aliquet=nascetur&pulvinar=ridiculus&sed=mus",
  },
  {
    id: 5,
    first_name: "Riordan",
    last_name: "Ashe",
    profile_pic:
      "http://macromedia.com/a/suscipit/nulla.xml?justo=malesuada&sollicitudin=in&ut=imperdiet&suscipit=et&a=commodo&feugiat=vulputate&et=justo&eros=in&vestibulum=blandit&ac=ultrices&est=enim&lacinia=lorem&nisi=ipsum&venenatis=dolor&tristique=sit&fusce=amet&congue=consectetuer&diam=adipiscing&id=elit&ornare=proin&imperdiet=interdum&sapien=mauris&urna=non&pretium=ligula&nisl=pellentesque&ut=ultrices&volutpat=phasellus&sapien=id&arcu=sapien&sed=in&augue=sapien&aliquam=iaculis&erat=congue&volutpat=vivamus&in=metus&congue=arcu&etiam=adipiscing&justo=molestie&etiam=hendrerit&pretium=at&iaculis=vulputate&justo=vitae&in=nisl&hac=aenean&habitasse=lectus&platea=pellentesque&dictumst=eget&etiam=nunc&faucibus=donec&cursus=quis&urna=orci&ut=eget&tellus=orci&nulla=vehicula&ut=condimentum&erat=curabitur&id=in&mauris=libero&vulputate=ut&elementum=massa&nullam=volutpat&varius=convallis&nulla=morbi&facilisi=odio",
  },
  {
    id: 6,
    first_name: "Waylin",
    last_name: "Kindle",
    profile_pic:
      "https://last.fm/ipsum.html?elementum=justo&in=etiam&hac=pretium&habitasse=iaculis&platea=justo&dictumst=in&morbi=hac&vestibulum=habitasse&velit=platea&id=dictumst&pretium=etiam&iaculis=faucibus&diam=cursus&erat=urna&fermentum=ut&justo=tellus&nec=nulla&condimentum=ut&neque=erat&sapien=id&placerat=mauris&ante=vulputate&nulla=elementum&justo=nullam&aliquam=varius&quis=nulla&turpis=facilisi&eget=cras&elit=non&sodales=velit&scelerisque=nec&mauris=nisi&sit=vulputate&amet=nonummy&eros=maecenas&suspendisse=tincidunt&accumsan=lacus&tortor=at&quis=velit&turpis=vivamus&sed=vel",
  },
  {
    id: 7,
    first_name: "Christiano",
    last_name: "Borrows",
    profile_pic:
      "https://networksolutions.com/odio/condimentum/id/luctus/nec.png?aliquam=nam&convallis=congue&nunc=risus&proin=semper&at=porta&turpis=volutpat&a=quam&pede=pede&posuere=lobortis&nonummy=ligula&integer=sit&non=amet&velit=eleifend&donec=pede&diam=libero&neque=quis&vestibulum=orci&eget=nullam&vulputate=molestie&ut=nibh&ultrices=in&vel=lectus&augue=pellentesque&vestibulum=at&ante=nulla&ipsum=suspendisse&primis=potenti&in=cras&faucibus=in&orci=purus&luctus=eu&et=magna&ultrices=vulputate&posuere=luctus&cubilia=cum&curae=sociis&donec=natoque&pharetra=penatibus&magna=et&vestibulum=magnis&aliquet=dis",
  },
  {
    id: 8,
    first_name: "Lek",
    last_name: "Hamnet",
    profile_pic:
      "http://e-recht24.de/quis/augue.png?volutpat=morbi&eleifend=porttitor&donec=lorem&ut=id&dolor=ligula&morbi=suspendisse&vel=ornare&lectus=consequat&in=lectus&quam=in&fringilla=est&rhoncus=risus&mauris=auctor&enim=sed&leo=tristique&rhoncus=in&sed=tempus&vestibulum=sit&sit=amet&amet=sem&cursus=fusce&id=consequat&turpis=nulla&integer=nisl&aliquet=nunc&massa=nisl&id=duis&lobortis=bibendum&convallis=felis&tortor=sed&risus=interdum&dapibus=venenatis&augue=turpis&vel=enim&accumsan=blandit&tellus=mi&nisi=in&eu=porttitor&orci=pede&mauris=justo&lacinia=eu&sapien=massa&quis=donec&libero=dapibus&nullam=duis&sit=at&amet=velit&turpis=eu&elementum=est&ligula=congue&vehicula=elementum&consequat=in&morbi=hac&a=habitasse&ipsum=platea&integer=dictumst&a=morbi&nibh=vestibulum&in=velit&quis=id&justo=pretium&maecenas=iaculis&rhoncus=diam&aliquam=erat&lacus=fermentum&morbi=justo&quis=nec&tortor=condimentum&id=neque&nulla=sapien&ultrices=placerat&aliquet=ante&maecenas=nulla&leo=justo&odio=aliquam&condimentum=quis&id=turpis&luctus=eget&nec=elit",
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
        <MapFriends friends={friends} />
      </div>
    </div>
  );
}

function MapFriends({ friends }: MapFriendsProps) {
  return friends.map((friend: Friend) => (
    <div
      key={friend.id}
      className=" w-[255px] inline-block text-center mr-[10px] mb-[15px]"
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
