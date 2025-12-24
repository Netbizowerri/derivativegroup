import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, delay = 0 }: ServiceCardProps) => {
  return (
    <div 
      className="group bg-card border border-border p-8 card-hover opacity-0 animate-fade-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon className="w-7 h-7 text-accent group-hover:text-primary transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-serif font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-sm font-semibold uppercase tracking-wider text-secondary hover:text-accent transition-colors group/link"
      >
        Learn More
        <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
