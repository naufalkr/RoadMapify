import { cn } from "@/lib/utils";

export const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure className={cn("relative w-64 cursor-default overflow-hidden p-4 ")}>
      <blockquote className="mt-2 text-sm text-class-tertiary my-3">
        {body}
      </blockquote>
      <div className="flex flex-row items-center gap-2 text-class-quaternary">
        <img className="rounded-full" width="24" height="24" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-xs font-medium ">
            {username} | {name}
          </figcaption>
          {/* <p className="text-xs font-medium dark:text-white/40">{username}</p> */}
        </div>
      </div>
    </figure>
  );
};
