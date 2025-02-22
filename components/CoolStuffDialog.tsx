import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { COOL_STUFF } from "@/lib/consts";
import Image from "next/image";

export default function CoolStuffDialog() {
  const renderMedia = (item: (typeof COOL_STUFF)[0]) => {
    if (item.type === "video") {
      return (
        <video controls className="h-[600px]" preload="metadata">
          <source src={COOL_STUFF[0].link} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <div className="p-2">
        <Image
          src={item.link}
          alt={item.text}
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      {COOL_STUFF.map((item, index) => (
        <Dialog key={index}>
          <DialogTrigger className="flex items-center justify-center w-full p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
            <span className="text-center">{item.text}</span>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader className="items-center">
              <DialogTitle className="text-center"></DialogTitle>
              <DialogDescription className="text-center">
                {renderMedia(item)}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
