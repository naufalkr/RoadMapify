"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowUturnLeftIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";
import { Dispatch, SetStateAction } from "react";

type ClassNavbarProps = {
  namaMatkul: string;
  setIsSidebarCollapsed: Dispatch<SetStateAction<boolean>>;
  isSidebarCollapsed: boolean;
};

const ClassNavbar = ({ ...props }: ClassNavbarProps) => {
  const router = useRouter();
  const returnHandler = () => {
    router.back();
  };

  const modulListHanlder = () => {
    props.setIsSidebarCollapsed(!props.isSidebarCollapsed);
  };
  return (
    <>
      <nav className="bg-class-primary text-class-tertiary border-b-[1px] border-class-secondary">
        <div className="max-w-6xl mx-auto">
          <div className="p-5 flex items-center justify-between">
            <button onClick={returnHandler}>
              <ArrowUturnLeftIcon className="w-6 h-auto" />
            </button>
            <p className="text-xl font-bold">{"Nama Matkul"}</p>
            <button onClick={modulListHanlder}>
              <ListBulletIcon className=" lg:hidden w-6 h-auto" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ClassNavbar;
