"use client";

import { useRouter } from "next/navigation";

const TryItButton = () => {
  const router = useRouter();
  const handle = () => {
    router.push("learning-path");
  };

  return (
    <button
      onClick={handle}
      className="px-6 py-3 bg-class-primary text-white text-sm rounded-lg"
    >
      Try it now!
    </button>
  );
};

export default TryItButton;
