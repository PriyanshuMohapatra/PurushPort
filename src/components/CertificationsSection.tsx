import { Card, CardContent } from "./ui/card";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { AspectRatio } from "./ui/aspect-ratio";

export default function CertificationsSection() {
  const certificates = [
    {
      id: 1,
      title: "Cloud Computing",
      platform: "NPTEL",
      image: "/lovable-uploads/578656b5-51a1-4426-a5d8-b6dc5110dcb2.png"
    },
    {
      id: 2,
      title: "Data Analysis with Tableau",
      platform: "Coursera",
      image: "/lovable-uploads/c3cd2940-6862-4242-a181-3e7f1c966d5b.png"
    },
    {
      id: 3,
      title: "IBM DevOps and Software Engineering",
      platform: "Coursera",
      image: "/lovable-uploads/393af001-8c24-4636-ad2a-4ffbd55efe3f.png"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-white dark:bg-gray-950">
      <div className="section-container">
        <h2 className="section-title mb-16">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <CertificateCard key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificateCard({ certificate }: { certificate: { id: number; title: string; platform: string; image?: string } }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="certificate-card cursor-pointer">
          <CardContent className="p-0">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
              {certificate.image ? (
                <AspectRatio ratio={4/3} className="w-full">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              ) : (
                <div className="text-center p-6">
                  <p className="font-medium text-lg">{certificate.title}</p>
                  <p className="text-gray-500 dark:text-gray-400">{certificate.platform}</p>
                  <p className="mt-4 text-sm text-primary">Click to view</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      
      <DialogContent className="max-w-3xl">
        <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
          {certificate.image ? (
            <img 
              src={certificate.image} 
              alt={certificate.title}
              className="w-full h-full object-contain"
            />
          ) : (
            <div className="text-center p-6">
              <p className="font-bold text-xl">{certificate.title}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{certificate.platform}</p>
              <p>Certificate details will appear here</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
