import TimelineEvent from "./TimelineEvent";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  imageSrc?: string;
}

interface TimelineProps {
  events: TimelineItem[];
}

const Timeline = ({ events }: TimelineProps) => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

      {/* Timeline Events */}
      <div className="relative">
        {events.map((event, index) => (
          <TimelineEvent
            key={index}
            date={event.date}
            title={event.title}
            description={event.description}
            imageSrc={event.imageSrc}
            side={index % 2 === 0 ? "left" : "right"}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
