
import { Trophy, Medal } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

interface CodingPlatform {
  name: string;
  url: string;
}

export default function AchievementsSection() {
  const codingPlatforms: CodingPlatform[] = [{
    name: "LeetCode",
    url: "https://leetcode.com/u/purush_9985/"
  }, {
    name: "GeeksForGeeks",
    url: "https://www.geeksforgeeks.org/user/purushothaxbhp/"
  }];

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title mb-16">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Trophy className="h-6 w-6 text-yellow-500" />
                Coding Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AspectRatio ratio={16/9} className="mb-4">
                <img 
                  src="/lovable-uploads/cdb17573-3a87-4990-b02b-a40720b44791.png"
                  alt="Coding Achievements"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
              <p className="text-lg mb-4 text-center">Solved 500+ coding problems across various platforms</p>
            </CardContent>
            <CardFooter className="flex justify-center gap-8">
              {codingPlatforms.map(platform => (
                <Button key={platform.name} variant="outline" asChild>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer">
                    {platform.name}
                  </a>
                </Button>
              ))}
            </CardFooter>
          </Card>

          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <Medal className="h-6 w-6 text-yellow-500" />
                LeetCode Streak Badge
              </CardTitle>
            </CardHeader>
            <CardContent>
            <AspectRatio ratio={3/3} className="mb-4">
                <img 
                  src="/50-50.png"
                  alt="Coding Achievements"
                  className="rounded-md object-cover w-full h-full"
                />
              </AspectRatio>
              <p className="text-lg text-center">
                Secured the prestigious 50 Days Badge on LeetCode for consistent daily problem-solving
              </p>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                Demonstrated dedication to continuous learning and algorithmic problem-solving
              </p>
            </CardContent>
            
          </Card>
        </div>
      </div>
    </section>
  );
}
