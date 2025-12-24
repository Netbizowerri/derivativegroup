import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTABanner = ({
  title,
  description,
  buttonText = 'Get Started',
  buttonLink = '/contact',
}: CTABannerProps) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-primary" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-secondary/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-2xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-6">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
            {description}
          </p>
          <Link to={buttonLink} className="btn-accent group">
            {buttonText}
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
