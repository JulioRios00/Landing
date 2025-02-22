import { PROJECTS } from "@/lib/consts";
import Link from "next/link";
export default function Projects() {
  return (
    <ul>
      <div className="space-y-4">
        {PROJECTS.map((project, index) => (
          <li key={index} className="flex flex-col">
            <Link
              href={project.link}
			  target="_blank"
              className="group p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
            >
              <span className="font-semibold block group-hover:text-blue-500 transition-colors">
                {project.name}
              </span>
              <span className="text-sm text-muted-foreground block group-hover:text-blue-400 transition-colors">
                {project.description}
              </span>
            </Link>
          </li>
        ))}
      </div>
    </ul>
  );
}