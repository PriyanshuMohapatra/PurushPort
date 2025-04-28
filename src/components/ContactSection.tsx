import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "./ui/use-toast";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Contact Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="your.email@example.com" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message..." rows={5} required />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-center">
            <p className="text-xl mb-6">Connect with me on social platforms:</p>
            <div className="space-y-4">
              <SocialLink 
                icon={<Linkedin className="h-5 w-5" />} 
                name="LinkedIn" 
                url="https://www.linkedin.com/in/purushotham-kotha/" 
              />
              <SocialLink 
                icon={<Github className="h-5 w-5" />} 
                name="GitHub" 
                url="https://github.com/purushothamkotha963" 
              />
              <SocialLink 
                icon={<Mail className="h-5 w-5" />} 
                name="Email" 
                url="mailto:purushothamkotha962@gmail.com" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ icon, name, url }: { icon: React.ReactNode; name: string; url: string }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition-shadow"
    >
      <span className="mr-3 text-primary">{icon}</span>
      <span className="font-medium">{name}</span>
    </a>
  );
}
