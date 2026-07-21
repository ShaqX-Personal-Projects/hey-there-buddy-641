import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { teamPageData } from "@/data/team";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

const Team = () => {
  const { dict } = useLanguage();
  useSEO("team");

  return (
    <div className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={dict.team.eyebrow}
          title={dict.team.title}
          subtitle={dict.team.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {teamPageData.members.map((member) => {
            const info = dict.team.members[member.key];
            return (
              <Card key={member.key} className="border-gold/20 overflow-hidden">
                <div className="aspect-[3/4] overflow-hidden bg-muted/30">
                  <img
                    src={member.portrait}
                    alt={info.name}
                    width={600}
                    height={800}
                    className="w-full h-full object-cover bw-image hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-playfair text-2xl">{info.name}</CardTitle>
                  <CardDescription className="font-inter text-gold">{info.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-inter leading-relaxed">
                    {info.bio}
                  </p>
                  <div>
                    <h4 className="font-inter font-semibold text-sm mb-2">{dict.team.specialties}</h4>
                    <div className="flex flex-wrap gap-2">
                      {info.specialties.map((specialty, idx) => (
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
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-semibold mb-4">{dict.team.joinTeam.heading}</h3>
            <p className="text-muted-foreground font-inter mb-6">
              {dict.team.joinTeam.text}
            </p>
            <Link
              to="/contact"
              className="text-gold hover:underline font-inter font-medium"
            >
              {dict.team.joinTeam.link}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
