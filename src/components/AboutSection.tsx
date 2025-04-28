import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Music, Film, Book, Gamepad } from 'lucide-react';

const AboutSection = () => {
  const hobbies = [
    { icon: <Book className="h-5 w-5" />, name: "Reading Books" },
    { icon: <Music className="h-5 w-5" />, name: "Listening to Music" },
    { icon: <Film className="h-5 w-5" />, name: "Watching Movies" },
    { icon: <Gamepad className="h-5 w-5" />, name: "Cooking" },
  ];

  return (
    <section id="about" className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white">
                About Me
              </CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Professional Profile & Background
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I am a passionate and innovative professional with a strong background in technology and data science. My expertise lies in transforming complex data into meaningful insights that drive strategic decision-making.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                With a keen eye for detail and a commitment to continuous learning, I leverage cutting-edge tools and methodologies to solve challenging problems and create impactful solutions.
              </p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Hobbies & Interests</h3>
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map((hobby, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-primary">{hobby.icon}</span>
                      <span className="text-gray-700 dark:text-gray-300">{hobby.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center items-center">
          <Avatar className="w-64 h-64 border-4 border-primary shadow-lg">
            <AvatarImage 
              src="/lovable-uploads/bc7912b8-2983-4092-82d3-3ac942c0a944.png" 
              alt="Professional Headshot" 
              className="object-cover object-center"
            />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
