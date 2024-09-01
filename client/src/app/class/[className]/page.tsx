"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import ClassNavbar from "./navbar";

const ClassPage = ({ params }: { params: { className: string } }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const test = [1, 2, 3, 4, 5];

  const progress = 33; // Fetch data kelas, user, materi dan hitung jumlah materi done oleh user

  return (
    <>
      <header>
        <ClassNavbar
          namaMatkul={params.className}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          isSidebarCollapsed={isSidebarCollapsed}
        />
      </header>
      <div>
        {isSidebarCollapsed && (
          <button
            onClick={() => {
              setIsSidebarCollapsed(false);
            }}
            className="hidden lg:block absolute right-0 top-[7.3rem] px-5 py-3 bg-blue-800 rounded-l-full text-class-tertiary"
          >
            {"<"}
          </button>
        )}
        <div
          className={`grid ${isSidebarCollapsed ? "grid-cols-1" : "grid-cols-8"}`}
        >
          <div className="bg-[#333] col-span-6 py-10 h-screen text-justify text-class-tertiary">
            <div className="flex flex-col max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto gap-5">
              <p className="text-5xl">Testing</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit corporis consectetur molestiae sed enim non cumque
                libero dolor, facere ut voluptatum minima illo dolorem tenetur
                debitis commodi molestias sunt? Odit! Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Magni et suscipit animi, quia ea
                molestias voluptate eaque laudantium, odio dignissimos eligendi
                esse, illo nesciunt eius unde! Rem aperiam non voluptatem. Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
                ullam dignissimos asperiores pariatur explicabo debitis
                reprehenderit, delectus quod quisquam optio odit cumque quam quo
                non incidunt itaque accusamus. Ea, cupiditate?
              </p>
            </div>
          </div>
          {!isSidebarCollapsed && (
            <motion.div
              className="fixed lg:static flex flex-col right-0 col-span-2 h-screen bg-class-primary text-class-tertiary gap-5 py-10"
              initial={{ x: 0 }}
              animate={{ x: isSidebarCollapsed ? "100%" : 0 }}
              transition={{ type: "tween", duration: 0.8 }}
            >
              <div className="flex items-center justify-between px-8 gap-5">
                <button
                  onClick={() => {
                    setIsSidebarCollapsed(true);
                  }}
                  className="bg-blue-800 rounded-full px-5 py-3 text-class-tertiary"
                >
                  {">"}
                </button>
                <p className="font-bold text-xl">Daftar Materi</p>
              </div>
              {/* Progress */}
              <div className="px-8 mt-3">
                <Progress value={33} />
              </div>
              {test.map((id: number) => (
                <Accordion type="single" collapsible key={id}>
                  <AccordionItem value="item-1" className="px-8">
                    {/* nama subab */}
                    <AccordionTrigger>Interface</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex gap-2">
                        <a className="text-class-secondary hover:underline cursor-pointer">
                          {/* nama sub bab */}
                          Apa itu Interface?
                        </a>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default ClassPage;
