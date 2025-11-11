import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamPageData } from "@/data/team";

const Team = () => {

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Meet Our Team"
          title="Team"
          subtitle="Dedicated professionals committed to excellence in every detail"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {teamPageData.members.map((member, index) => (
            <Card key={index} className="border-gold/20 overflow-hidden">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={member.portrait}
                  alt={member.name}
                  className="w-full h-full object-cover bw-image hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-playfair text-2xl">{member.name}</CardTitle>
                <CardDescription className="font-inter text-gold">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {member.bio}
                </p>
                <div>
                  <h4 className="font-inter font-semibold text-sm mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-inter px-3 py-1 border border-gold/30 rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-semibold mb-4">{teamPageData.joinTeam.heading}</h3>
            <p className="text-muted-foreground font-inter mb-6">
              {teamPageData.joinTeam.text}
            </p>
            <a
              href="/contact"
              className="text-gold hover:underline font-inter font-medium"
            >
              Contact us about opportunities
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
