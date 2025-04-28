import { Trophy } from "lucide-react";
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
        <h2 className="section-title mb-16 text-center">Achievements</h2>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          <Card className="card-hover mx-auto">
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
        </div>
      </div>
    </section>
  );
}
