import { Github, Home, Linkedin, Mail, FileText } from "lucide-react";
import { Separator } from "./ui/separator";
export default function FooterSection() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-semibold mb-4 text-2xl">Quick Links</h3>
          <div className="flex justify-center items-center gap-6">
            {[{
            name: "Home",
            id: "home",
            icon: <Home className="h-4 w-4" />
          }, {
            name: "About",
            id: "about",
            icon: null
          }, {
            name: "Skills",
            id: "skills",
            icon: null
          }, {
            name: "Projects",
            id: "projects",
            icon: null
          }, {
            name: "Contact",
            id: "contact",
            icon: null
          }].map(link => <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-gray-400 hover:text-white flex items-center gap-2">
                {link.icon}
                {link.name}
              </button>)}
          </div>
        </div>
        
        <Separator className="my-8 bg-gray-800" />
        
        <div className="text-center text-sm text-gray-400">
          <p>© 2025 Purushotham Kotha. All rights reserved.</p>
        </div>
      </div>
    </footer>;
}