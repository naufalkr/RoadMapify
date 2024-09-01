import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TryItButton from "./button";
import Navbar from "./navbar";
import Link from "next/link";
import { ArrowUpRightIcon } from "lucide-react";
import Marquee from "@/components/magicui/marquee";
import { ReviewCard } from "./reviewCard";

export default function Home() {
  const images = [
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "telkomsel",
      link: "https://soerabaja45.co.id/wp-content/uploads/2021/12/logo-telkomsel-baru-e1638845397379.png",
    },
    {
      id: "gojek",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/GoTo_logo.png/640px-GoTo_logo.png",
    },
  ];

  const services = [
    {
      id: "0",
      title: "Generate own roadmap using AI",
      link: "/",
      image: "",
    },
    {
      id: "1",
      title: "Class based on your roadmap",
      link: "/",
      image: "",
    },
    {
      id: "2",
      title: "Quiz for all materials",
      link: "/",
      image: "",
    },
    {
      id: "3",
      title: "Beginner Friendly",
      link: "/",
      image: "",
    },
  ];

  const reviews = [
    {
      name: "Jack",
      username: "@jack",
      body: "I've never seen anything like this before. It's amazing. I love it.",
      img: "https://avatar.vercel.sh/jack",
    },
    {
      name: "Jill",
      username: "@jill",
      body: "I don't know what to say. I'm speechless. This is amazing.",
      img: "https://avatar.vercel.sh/jill",
    },
    {
      name: "John",
      username: "@john",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/john",
    },
    {
      name: "Jane",
      username: "@jane",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jane",
    },
    {
      name: "Jenny",
      username: "@jenny",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/jenny",
    },
    {
      name: "James",
      username: "@james",
      body: "I'm at a loss for words. This is amazing. I love it.",
      img: "https://avatar.vercel.sh/james",
    },
  ];

  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <div>
        {/* try and search lerningpath */}
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:p-0 items-center justify-center">
          <div className="mt-10 mb-20 flex flex-col gap-20 ">
            <div className="md:grid md:grid-cols-2">
              {/* Jumbotron */}
              <div className="flex flex-col gap-5">
                <p className="text-5xl text-black font-bold text-start">
                  Know your <br />{" "}
                  <span className="text-class-quaternary font-extrabold">
                    Learning Path
                  </span>{" "}
                  more <br />{" "}
                  <span className="text-class-quaternary  font-extrabold">
                    Easily
                  </span>{" "}
                  and{" "}
                  <span className="text-class-quaternary  font-extrabold">
                    Precisely
                  </span>
                  .
                </p>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Harum eius dignissimos ipsam tempora quia. Laboriosam
                  doloribus laborum maiores dolorum, aut dolore commodi non
                  eaque quis quos voluptatum adipisci consectetur! Et!
                </p>
                <div className="w1-/2">
                  <TryItButton />
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              {images.map((images: any) => (
                <div key={images.id}>
                  <img
                    src={images.link}
                    alt=""
                    className="h-20 w-auto object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex jusitfy-start items-center gap-3 w-[100%]">
                <h2 className="bg-class-quaternary px-1 font-semibold text-2xl">
                  Services
                </h2>
                <p className="text-sm w-[50%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem autem hic itaque adipisci natus praesentium animi
                  consequatur dolorum explicabo obcaecati.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                {services.map((service: any) => (
                  <Card
                    key={service.id}
                    className={`border-2 ${service.id == 1 || service.id == 2 ? "border-class-tertiary bg-class-primary" : "border-class-primary bg-class-tertiary"} rounded-3xl`}
                  >
                    <CardHeader></CardHeader>
                    <CardContent className="grid grid-cols-2">
                      <div className="flex flex-col gap-8">
                        <CardTitle
                          className={`${service.id == 1 || service.id == 2 ? "text-start bg-class-tertiary" : "bg-class-quaternary"} text-class-primary"`}
                        >
                          {service.title}
                        </CardTitle>
                        <Link
                          href={service.link}
                          className="flex items-center gap-2"
                        >
                          <ArrowUpRightIcon
                            size={24}
                            className={`${service.id == 1 || service.id == 2 ? "text-class-primary bg-class-tertiary" : "text-class-tertiary bg-class-primary"} rounded-full p-1`}
                          />
                          <p
                            className={`${service.id == 1 || service.id == 2 ? "text-class-tertiary " : "text-class-primary "} text-sm`}
                          >
                            Read more
                          </p>
                        </Link>
                      </div>
                      <img src="" alt="" className="h-24 w-auto" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <div>
              <Card className="rounded-3xl bg-class-secondary p-3">
                <CardHeader>
                  <CardTitle className="text-start text-class-primary">
                    About Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem autem hic itaque adipisci natus praesentium animi
                    consequatur dolorum explicabo obcaecati.
                  </p>
                  <img src="" alt="" className="h-24 w-auto" />
                </CardContent>
                <CardFooter>
                  <TryItButton />
                </CardFooter>
              </Card>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex jusitfy-start items-center gap-3 w-[100%]">
                <h2 className="bg-class-quaternary px-1 font-semibold text-2xl">
                  Reviews
                </h2>
                <p className="text-sm w-[50%]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatem autem hic itaque adipisci natus praesentium animi
                  consequatur dolorum explicabo obcaecati.
                </p>
              </div>
              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background ">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review.username} {...review} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
    </>
  );
}
