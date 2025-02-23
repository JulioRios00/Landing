import Header from "@/components/Header";
import Skills from "@/components/Skills";
import History from "@/components/History";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { HEADER } from "@/lib/consts";
import CoolStuff from "@/components/CoolStuff";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-4 right-4">
        <ThemeToggle />
      </nav>

      <div className="container mx-auto px-4 py-16 space-y-8">
        <div>
          {" "}
          <Header
            name={HEADER.name}
            title={HEADER.title}
            description={HEADER.description}
            imageUrl={HEADER.imageUrl}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="h-full text-center">
            <CardHeader className="pb-0">
              <CardTitle>Languages & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <Skills />
            </CardContent>
          </Card>

          <Card className="h-full">
            <CardHeader className="text-center">
              <CardTitle>History</CardTitle>
            </CardHeader>
            <CardContent>
              <History />
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card >
            <CardHeader className="text-center">
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <Projects />
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="text-center pb-10">
              <CardTitle>Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <Contact />
            </CardContent>
          </Card>
          <Card className="h-full">
            <CardHeader className="text-center">
              <CardTitle>Cool Stuff about me</CardTitle>
            </CardHeader>
            <CardContent>
              <CoolStuff />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
