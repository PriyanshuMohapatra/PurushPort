
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Education {
  institution: string;
  location: string;
  degree: string;
  period: string;
  details: string;
}

export default function EducationSection() {
  const education: Education[] = [
    {
      institution: "Lovely Professional University",
      location: "Phagwara, Punjab",
      degree: "Bachelor of Technology",
      period: "Pursuing",
      details: "Computer Science and Engineering; CGPA: 8.9"
    },
    {
      institution: "Kamala Junior College",
      location: "Markapur, Andhra Pradesh",
      degree: "Intermediate",
      period: "Mar' 20 – May' 21",
      details: "PCM; Percentage: 96%"
    },
    {
      institution: "Nandyal Public School",
      location: "Nandyal, Andhra Pradesh",
      degree: "Matriculation",
      period: "Mar' 18 – May' 20",
      details: "Percentage: 91.2%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-container">
        <h2 className="section-title mb-16">Education</h2>
        
        <div className="space-y-8 max-w-3xl mx-auto">
          {education.map((edu, idx) => (
            <Card key={idx} className="card-hover">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.location}</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{edu.degree}</p>
                    <p className="text-sm text-muted-foreground">{edu.period}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p>{edu.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
