import Image from "next/image";

interface HeaderProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function Header({
  name,
  title,
  description,
  imageUrl,
}: HeaderProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8 w-full">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={name}
        width={200}
        height={200}
        className="rounded-full object-cover w-48 h-48"
      />
      <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl text-muted-foreground mb-4">{title}</h2>
        <p className="text-muted-foreground w-full">{description}</p>
      </div>
    </div>
  );
}
