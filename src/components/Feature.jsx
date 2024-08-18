import React from "react";
import { Card, CardBody, Typography, Avatar } from "@material-tailwind/react";
 import zlogo from "../assets/logo.svg";
import f1 from "../assets/featureimg/1.png";
import f2 from "../assets/featureimg/2.png";
import f3 from "../assets/featureimg/3.png";
import f4 from "../assets/featureimg/4.png";
import f5 from "../assets/featureimg/5.png";
export function Feature() {
  return (
    <section className="lg:py-12 py-4 px-8">
      <div className="container mx-auto mb-10 text-center lg:mb-20">
       
        <Typography
          color="blue-gray"
          className="mb-4 !text-2xl font-bold lg:!text-6xl text-gray-900"
        >
          Who will you run into
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto max-w-lg !text-gray-500"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="mb-8 container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">

        <Card
          className="col-span-1 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
             $1M+ per month advertisers
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              We get insulted by others, lose trust for those We get back.
            </Typography>
            <img
              src={f1}
              alt="iphone"
              className="w-full xl:h-[270px] lg:h-[360px] lg:translate-y-8 translate-y-7 object-cover object-center"
            />
          </CardBody>
        </Card>


        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center ">   
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
               Fastest-growing Shopify stores
            </Typography>
            <Typography className="text-center mb-0 max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              It becomes harder for us to give others hand. We get our heart by
              people we love.
            </Typography>
            <img
              src={f2 }
              alt="laptop"
              className=" lg:translate-y-16 translate-y-10 object-cover items-center mx-auto"
            />
          </CardBody>
        </Card>
      </div>


      <div className="container mx-auto grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-3">
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
             54% marketers who generate over $100k per month
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Check out our proven methods, guides, and exercises that help make
              work better, and people happier.
            </Typography>
            <img
              src={f3}
              alt="laptop"
              className="mx-auto  lg:translate-y-6 translate-y-10 object-cover object-top"
            />
          </CardBody>
        </Card>


        <Card className="col-span-1 bg-gray-100/50" shadow={false}>
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
              Fastest-growing traffic sources
            </Typography>
            <Typography className="text-center max-w-xs mx-auto text-base font-normal leading-7 !text-gray-500">
              The time is now for it to be okay to be great. For being a bright
              color.
            </Typography>
            <img src={f4} alt="" />
            {/* <div className="flex items-center -space-x-4 justify-center mt-24">
              <Avatar
                size="xl"
                variant="circular"
                alt="user 1"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 2"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 3"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <Avatar
                size="xl"
                variant="circular"
                alt="user 4"
                className="border-2 border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
            </div> */}
            <div className="flex justify-between items-end mt-2">
              <div className="flex gap-2">
               <img src={zlogo} alt="logo"  className="h-8 w-8 inline-flex rounded-md"/>
                <Typography
                  as="a"
                  href="#"
                  color="blue-gray"
                  className="mr-4 text-xs text-left font-bold cursor-pointer"
                >
                  Zep <br /> Research
                </Typography>
              </div>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="text-xs font-bold cursor-pointer"
              >
               ZepResearch.com
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
      
      <div className="container mx-auto mt-8 grid lg:gap-x-8 gap-y-8 grid-cols-1 lg:grid-cols-2">
        <Card
          className="col-span-2 bg-gray-100/50 overflow-hidden"
          shadow={false}
        >
          <CardBody className="text-center">
            <Typography
              variant="h4"
              color="blue-gray"
              className="mb-2 font-medium"
            >
             Lead-Gen advertisers in finance, solar, insurance, health, and many more
            </Typography>
            <Typography className="text-center max-w-sm mx-auto text-base font-normal leading-7 !text-gray-500">
              Check out our proven methods, guides, and exercises that help make
              work better, and people happier.
            </Typography>
            <img
              src={f5}
              alt="laptop"
              className="mx-auto lg:translate-y-6 translate-y-10 object-cover object-top"
            />
          </CardBody>
        </Card>
        </div>
    </section>
  );
}
export default Feature;