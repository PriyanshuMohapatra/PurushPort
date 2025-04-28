import { ArrowDown, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";

export default function HeroSection() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-purple-100/30 to-transparent dark:from-purple-900/10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-100/30 to-transparent dark:from-blue-900/10"></div>
      </div>
      
      <div className="section-container relative z-10 flex items-center justify-center text-center">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Purushotham Kotha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            I am passionate about discovering the stories that data silently tells beneath layers of complexity.
            My curiosity drives me across the realms of machine learning, AI innovations, and dynamic visual storytelling.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            I aim to transform intricate datasets into meaningful strategies by applying robust analytical techniques.
            I am committed to growing my skills through practical experiences and a continuous journey of learning in the ever-evolving field of data science.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button onClick={scrollToProjects} className="text-lg px-10 py-7">
              See my work
            </Button>
            <Button onClick={scrollToContact} variant="outline" className="text-lg px-10 py-7">
              Get in touch
            </Button>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" className="text-lg px-10 py-7">
                  <FileText className="mr-2 h-5 w-5" />
                  See my CV
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <AspectRatio ratio={8.27/11.69} className="bg-white">
                  <img
                    src="/lovable-uploads/41e159d8-30d8-4764-8c1c-6042cf2ea77e.png"
                    alt="Purushotham Kotha's CV"
                    className="object-contain w-full h-full"
                  />
                </AspectRatio>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg hover:shadow-xl transition-all"
        >
          <ArrowDown className="h-6 w-6 text-primary" />
        </button>
      </div>
    </section>
  );
}
