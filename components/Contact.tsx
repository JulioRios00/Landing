import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "@/lib/consts";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-4 max-w-xs mx-auto ">
      {CONTACT.map((contact, index) => (
        <Link
          key={index}
          target="_blank"
          href={contact.link}
          className="flex items-center justify-center p-6 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
        >
          {contact.name === "GitHub" && (
            <Github className="mr-2 h-4 w-4 group-hover:text-blue-500" />
          )}
          {contact.name === "LinkedIn" && (
            <Linkedin className="mr-2 h-4 w-4 group-hover:text-blue-500" />
          )}
          {contact.name === "Email" && (
            <Mail className="mr-2 h-4 w-4 group-hover:text-blue-500" />
          )}

          <span className="group-hover:text-blue-500">{contact.name}</span>
        </Link>
      ))}
    </div>
  );
}
