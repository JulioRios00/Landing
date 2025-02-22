import { COOL_STUFF } from "@/lib/consts";
import CoolStuffDialog from "./CoolStuffDialog";

export default function CoolStuff() {
  return (
    <>
      <div className="flex flex-col space-y-6 max-w-xs mx-auto">
        <CoolStuffDialog />
      </div>
    </>
  );
}
