import { Typography, Card } from "@material-tailwind/react";
import { World } from "./ui/globe";
import { globeConfig, sampleArcs } from "../constents/varGlobe";

function StatsCard({ count, title, description }) {
  return (
    <Card color="transparent" shadow={false}>
      <Typography
        variant="gradient"
        className="text-4xl font-bold"
        color="blue-gray"
      >
        {count}
      </Typography>
      <hr className="mt-2 mb-4 max-w-sm" />
      <Typography
        variant="h5"
        color="blue-gray"
        className="mt-1 font-bold"
      >
        {title}
      </Typography>
      <Typography className="text-base max-w-xs font-normal leading-7 !text-gray-500">
        {description}
      </Typography>
    </Card>
  );
}

const stats = [
  {
    count: "15,000+",
    title: "Attendees",
    description: "You're racing ahead in your marathon training goals.",
  },
  {
    count: "300+",
    title: "Speakers",
    description: "Your financial acumen is paying off—literally.",
  },
  {
    count: "110+",
    title: "Countries",
    description:
      "Your commitment to health is inspiring and your stats show it.",
  },
  {
    count: "8,200+",
    title: "Networks",
    description: "Your contributions have made an impact in your community.",
  },
];

export function Stats() {
  return (
    <section className="lg:py-28 py-10 px-8 container mx-auto">
      <div className="lg:mb-24 mb-10">
        <Typography
          color="blue-gray"
         className='text-left text-3xl sm:text-5xl font-bold '
        >
          The Numbers Behind Zep Research
        </Typography>
        <Typography
          variant="lead"
          className="w-w-full !text-gray-600 max-w-xl"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="grid gap-10 lg:grid-cols-1 lg:gap-24 xl:grid-cols-2 items-center ">
        <Card
          className="bg-gray-100/50 py-2 text-center"
          shadow={false}
        >
          <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] h-screen">

        <Typography
          variant="h3"
          color="blue-gray"
          className="mt-10 font-bold"
        >
          The World&apos;s Number One Performance Marketing Event
       
        </Typography>
           <div className="absolute h-full w-full -bottom-20 py-12  md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
          {/* <Typography
            variant="h1"
            className="!text-green-500 !leading-snug text-5xl"
          >
           #1
          </Typography>
          <Typography
            variant="h5"
            color="blue-gray"
            className="mt-2 font-bold"
          >
            CO2 Emissions Offset
          </Typography> 
          <Typography
            variant="lead"
            className="mt-1 text-base mx-auto !text-gray-500 lg:w-8/12"
          >
            Congratulations on reaching a new milestone in environmental
            stewardship!
          </Typography> */}
        </Card>
        <div>
          <div className="grid lg:grid-cols-2 gap-10 gap-x-20">
            {stats.map((props, key) => (
              <StatsCard key={key} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;