import { HISTORY } from "@/lib/consts";

export default function History() {
  return (
    <ul className="space-y-4">
      {HISTORY.map((item, index) => (
        <li key={index} className="flex flex-col">
          <span className="font-semibold">{item.year}</span>
          <span>{item.position}</span>
          <span className="text-sm text-muted-foreground">{item.company}</span>
		  <span className="text-sm text-muted-foreground">{item.description}</span>
        </li>
      ))}
    </ul>
  );
}
