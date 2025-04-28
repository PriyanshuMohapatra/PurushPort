import { useState, useEffect } from "react";
import { Card, CardContent } from "./ui/card";
interface SkillCategory {
  title: string;
  skills: string[];
}
export default function SkillsSection() {
  const skillCategories: SkillCategory[] = [{
    title: "Programming Languages",
    skills: ["Java", "Python", "R"]
  }, {
    title: "Tools Related to Data Science",
    skills: ["MS Excel", "R Studio", "Hadoop", "Hive", "Tableau"]
  }, {
    title: "Libraries",
    skills: ["NumPy", "Pandas"]
  }];
  return <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-container">
        <h2 className="section-title mb-16">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => <div key={idx} className="card-hover bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-md">
              <h3 className="font-semibold mb-6 text-center text-2xl">{category.title}</h3>
              <RotatingSkills skills={category.skills} />
            </div>)}
        </div>
      </div>
    </section>;
}
function RotatingSkills({
  skills
}: {
  skills: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);
  return <div className="relative h-16">
      {skills.map((skill, idx) => <div key={skill} className="absolute w-full transition-all duration-500 ease-in-out" style={{
      opacity: currentIndex === idx ? 1 : 0,
      transform: `translateY(${currentIndex === idx ? '0' : '20px'})`
    }}>
          <p className="text-lg font-medium text-center">{skill}</p>
        </div>)}
    </div>;
}