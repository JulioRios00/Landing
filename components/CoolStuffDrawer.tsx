import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { COOL_STUFF } from "@/lib/consts"

export default function CoolStuffDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
        {COOL_STUFF[0].text}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>

          <DrawerDescription>
            <iframe
              src={COOL_STUFF[0].link}
              className="w-full h-[600px]"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </DrawerDescription>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  )
}
