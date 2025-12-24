import { Link } from 'react-router-dom';
import { ArrowRight, Building2, MapPin, TrendingUp, Key, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import propertyHero from '@/assets/property-hero.jpg';

const Property = () => {
  const services = [
    {
      icon: Building2,
      title: 'Property Investment Advisory',
      description: 'Expert guidance on identifying high-value real estate investment opportunities that align with your portfolio goals.',
    },
    {
      icon: MapPin,
      title: 'Development Support',
      description: 'End-to-end support for real estate development projects, from site acquisition to project completion.',
    },
    {
      icon: TrendingUp,
      title: 'Asset Management',
      description: 'Professional management of your property portfolio to maximize returns and protect your investment.',
    },
    {
      icon: Key,
      title: 'Transaction Advisory',
      description: 'Comprehensive support for property acquisitions, dispositions, and portfolio restructuring.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Property & Real Estate Advisory | Derivative Group"
        description="Expert property advisory, investment consulting, and real estate development support."
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${propertyHero})` }}
        />
        <div className="absolute inset-0 bg-primary/85" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Property Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
              Unlock Real Estate Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed opacity-0 animate-fade-up delay-200">
              Navigate the property market with confidence. Our expert advisory services 
              help you identify, acquire, and manage high-value real estate investments.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Expertise"
            title="Comprehensive Property Solutions"
            description="From investment advisory to development support, we provide the expertise you need to succeed in real estate."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="flex items-start space-x-6 p-8 bg-card border border-border card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm flex-shrink-0">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4">
                    <Link to={`/service-booking?service=${encodeURIComponent(service.title)}`} className="text-sm btn-outline">
                      Book Service
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Invest */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Why Real Estate"
                title="Build Lasting Wealth Through Property"
                description="Real estate remains one of the most reliable vehicles for wealth creation and preservation."
              />

              <ul className="space-y-4 mb-8">
                {[
                  'Tangible asset with intrinsic value',
                  'Hedge against inflation and market volatility',
                  'Potential for capital appreciation and rental income',
                  'Portfolio diversification benefits',
                  'Tax advantages and wealth transfer opportunities',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={`/service-booking?service=${encodeURIComponent('Property Services')}`} className="btn-primary group">
                Explore Opportunities
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="relative">
              <div className="bg-primary p-8 rounded-sm">
                <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">
                  Key Markets We Cover
                </h3>
                <div className="space-y-4">
                  {[
                    { location: 'Lagos', focus: 'Commercial & Residential' },
                    { location: 'Abuja', focus: 'Government District & Luxury' },
                    { location: 'Port Harcourt', focus: 'Industrial & Commercial' },
                    { location: 'Ibadan', focus: 'Emerging Opportunities' },
                  ].map((market) => (
                    <div
                      key={market.location}
                      className="flex justify-between items-center border-b border-primary-foreground/20 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="font-semibold text-primary-foreground">{market.location}</span>
                      <span className="text-sm text-accent">{market.focus}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Start Your Property Investment Journey"
        description="Partner with Derivative Group to identify and capitalize on the best real estate opportunities."
        buttonText="Book a Service"
        buttonLink={`/service-booking?service=${encodeURIComponent('Property Services')}`}
      />
    </>
  );
};

export default Property;
