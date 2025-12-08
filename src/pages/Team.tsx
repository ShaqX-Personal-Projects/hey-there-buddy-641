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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="border-gold/20 overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={teamPageData.members[0].portrait}
                srcSet={`${teamPageData.members[0].portrait} 1x, ${teamPageData.members[0].portrait} 2x`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={dict.team.members.gashi.name}
                width={600}
                height={800}
                className="w-full h-full object-cover bw-image hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.team.members.gashi.name}</CardTitle>
              <CardDescription className="font-inter text-gold">{dict.team.members.gashi.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-inter leading-relaxed">
                {dict.team.members.gashi.bio}
              </p>
              <div>
                <h4 className="font-inter font-semibold text-sm mb-2">{dict.team.specialties}</h4>
                <div className="flex flex-wrap gap-2">
                  {dict.team.members.gashi.specialties.map((specialty, idx) => (
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

          <Card className="border-gold/20 overflow-hidden">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={teamPageData.members[1].portrait}
                srcSet={`${teamPageData.members[1].portrait} 1x, ${teamPageData.members[1].portrait} 2x`}
                sizes="(max-width: 768px) 100vw, 50vw"
                alt={dict.team.members.comingSoon.name}
                width={600}
                height={800}
                className="w-full h-full object-cover bw-image hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">{dict.team.members.comingSoon.name}</CardTitle>
              <CardDescription className="font-inter text-gold">{dict.team.members.comingSoon.role}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground font-inter leading-relaxed">
                {dict.team.members.comingSoon.bio}
              </p>
              <div>
                <h4 className="font-inter font-semibold text-sm mb-2">{dict.team.specialties}</h4>
                <div className="flex flex-wrap gap-2">
                  {dict.team.members.comingSoon.specialties.map((specialty, idx) => (
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
        </div>

        <div className="mt-16 text-center">
          <div className="bg-muted/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-playfair font-semibold mb-4">{dict.team.joinTeam.heading}</h3>
            <p className="text-muted-foreground font-inter mb-6">
              {dict.team.joinTeam.text}
            </p>
            <a
              href="/contact"
              className="text-gold hover:underline font-inter font-medium"
            >
              {dict.team.joinTeam.link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
