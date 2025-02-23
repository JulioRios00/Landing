import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { COOL_STUFF } from "@/lib/consts";
import Image from "next/image";

export default function CoolStuffDialog() {
  const renderMedia = (item: (typeof COOL_STUFF)[0]) => {
    if (item.type === "video") {
      const videoId = item.link.split("/d/")[1].split("/view")[0];
      const embedUrl = `https://drive.google.com/file/d/${videoId}/preview`;

      return (
        <iframe
          src={embedUrl}
          width="100%"
          height="600"
          allow="autoplay"
          className="rounded-lg"
        />
      );
    }
    return (
      <Image
        src={item.link}
        alt={item.text}
        width={600}
        height={600}
        className="w-full h-auto"
      />
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
              <DialogTitle className="text-center pt-3 pb-2"> {item.secondaryText}</DialogTitle>
              {renderMedia(item)}
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
