# MySpace Clone Portfolio

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Live site can be viewed [here](https://loganjbellemare.vercel.app).

## Disclaimer

This is a fan-based project, and has no affiliation with MySpace or SpaceHey in any way. I just wanted to have a little fun with my portfolio as an ex-Scene Kid and someone who loves old internet.

## Getting Started

If you would like a local version to experiment with, follow these steps

First, fork and clone this repository

Install Dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
#or
bun install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Database Setup

This project is connected to a MongoDB Atlas Cluster using Mongoose. For more information on using Mongoose, check out their docs [here](https://mongoosejs.com/docs/).

Database connection is established in `./src/database/index.js`. If you're cloning this to run on your local machine, set up a `.env` file with your MongoDB connection string, and make sure the correct variable name is processed in `index.js` file.

This project uses two different data assets, `Projects`, which are the projects displayed on the Projects page, and `Assets`, which are the images and blinkies displayed on the About page. Models for both can be found for both in `./models`, for reference on data shape.

### Seeding Database

All of the seed data I used are in files I added to my `.gitignore`, if you want to seed your database on your local version, create a `seeds.js` file in the root directory of your project, and load with your seed data. Then using the Model exported from `./models/projects.ts` for project data and `./models/assets.ts/` for asset data (images displayed on About page), create a seeder function in `seeds.js` to seed your database, mine looks like this if you want to use it:

```
const seedDB = async () => {
  try {
    // delete previous data | avoid duplication
    await Assets.deleteMany();
    await Assets.insertMany(seedData);
    console.log("data imported");

    process.exit();
  } catch (error) {
    console.log("data not imported:", error.message);
    process.exit(1);
  }
};

const clearDB = async () => {
  try {
    await Assets.deleteMany();

    console.log("data destroyed");
    process.exit();
  } catch (error) {
    console.log("Data not destroyed:", error.message);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  clearDB();
} else {
  seedDB();
}
```

I also added seeder scripts to my package.json, running:

```bash
npm run data:seed
# or
npm run assets:seed
# will seed databases, while:
npm run data:destroy
# or
npm run assets:destroy
# will clear all data in each respective table
```

## API Documentation

All API components make use of Next.js' server-side rendering.

Similarly to when seeding the database, they use the `ConnectToDB` function exported from `./src/database/index.js` to connect to the MongoDB Atlas Cluster, and use the Projects and Assets Models respectively.

### Routes

All API routes only support GET requests at this time, and all routes follow the same routing pattern:

`/api/[data-type]/[request-method]`

All API routes also support a `?search=` URL query parameter, returning data with `data.name` matching the value of the `search` param.

All routes will return a Next response object parsed to JSON. For example, a request made to `/api/projects/get` will return an object of this shape:

```
{"success":true,"data":[...array of project objects],"message":"Data fetched successfully"}
```

## Front End Component Setup

This project utilizes Next.js 14's app directory to handle routing. For the most part, all components related to each subroute are in that route's folder, and common components stored in the `./src/app/components` directory, in addition to all home page components in `./src/app/components/home-page`.

All styling is done with Tailwind. Learn more about Tailwind [here](https://tailwindcss.com/docs/installation).

### Contact Form Setup

I used [Web3Forms](https://docs.web3forms.com) for my email integration, if you want to use this as well, all you have to do is sign up with them and change the access code in `./src/app/contact/Contact.tsx` to your access code:

```
export default async function ContactView() {
  //web3forms handleSubmit
  async function handleSubmit(event: any) {
    event.preventDefault();
    let formData = new FormData(event.target);

    formData.append("access_key", "[YOUR_ACCESS_KEY]");

    ...
  }
  return ...
  }
```

### Background Image

I made a custom background image for this site, feel free to add your own on your local version, just replace the image in `./src/image` with your image, and rename it `Bg-image.PNG`.

## Learn More about Next.js

If you have any questions related to Next.js specifically, take a look at their docs:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Technologies Used

- Next.js - 14.1.0
- React - ^18.0.0
- ReactDOM - ^18.0.0
- React Icons - ^5.0.1
- Tailwind - ^3.3.0
- Typescript - ^5.0.0
- Mongoose - ^8.2.0
- ts-node - ^10.9.2
- dotenv - ^16.4.5
- nuqs (for URL state management) - ^1.17.1
- clsx (for className modification) - ^2.1.0
- Web3Forms (for email integration)

## Dev Notes

Feel free to play around with this and send me any questions you may have. I'd love to see any fun themes you can make with this! You can go to the live site and contact me there, or directly contact me [here](mailto:loganbellemare444@gmail.com) with anything you may have.
