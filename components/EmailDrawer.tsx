import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function EmailDrawer() {
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center justify-center w-full p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group">
        <Mail className="mr-2 h-4 w-4 group-hover:text-blue-500" />
        <span className="group-hover:text-blue-500">Email</span>
      </DrawerTrigger>
      <DrawerContent>
        <div className="max-w-md mx-auto">
          <DrawerHeader className="text-center">
            <DrawerTitle>Send me an email</DrawerTitle>
            <DrawerDescription>
              Fill out the form below to send me a message
            </DrawerDescription>
          </DrawerHeader>
          <form className="space-y-4 mt-4 px-4">
            <Input placeholder="Your email" type="email" />
            <Input placeholder="Subject" />
            <Textarea placeholder="Your message" className="min-h-[150px]" />
            <Button className="w-full">Send Email</Button>
          </form>
        </div>
      </DrawerContent>
    </Drawer>
  )
}