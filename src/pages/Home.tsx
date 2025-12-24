import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Building2, Users, CheckCircle, Shield, Award } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import heroBg from '@/assets/hero-bg.jpg';

const Home = () => {
  return (
    <>
      <SEOHead
        title="Derivative Group | Financial Services, Property & Consulting in Nigeria"
        description="Derivative Group provides funding, financial advisory, property solutions, and strategic consulting for businesses and individuals."
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-primary/80" />

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="max-w-4xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-6 opacity-0 animate-fade-up">
              Welcome to Derivative Group
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
              Building Wealth.
              <br />
              <span className="text-accent">Driving Growth.</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
              We provide expert financial services, property solutions, and strategic 
              consulting to empower businesses and individuals achieve sustainable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up delay-300">
              <Link to="/contact" className="btn-accent group">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in delay-500">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Services"
            title="Comprehensive Solutions for Your Success"
            description="From financial funding to property investment and strategic consulting, we offer end-to-end solutions tailored to your unique needs."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={TrendingUp}
              title="Financial Services"
              description="Access business funding, investment guidance, and expert financial advisory to accelerate your growth."
              link="/financial-services"
              delay={0}
            />
            <ServiceCard
              icon={Building2}
              title="Property Solutions"
              description="Expert property advisory, investment consulting, and development support for real estate opportunities."
              link="/property"
              delay={100}
            />
            <ServiceCard
              icon={Users}
              title="Strategic Consulting"
              description="Drive efficiency and long-term success with our strategic business consulting and corporate advisory."
              link="/consulting"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Why Choose Us"
                title="Trusted Partner for Business Growth"
                description="With decades of combined experience, we bring expertise, integrity, and a client-first approach to every engagement."
              />

              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Trust & Integrity',
                    description: 'We operate with the highest ethical standards, ensuring transparency in all our dealings.',
                  },
                  {
                    icon: Award,
                    title: 'Proven Expertise',
                    description: 'Our team brings deep industry knowledge across finance, property, and business consulting.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Results-Driven',
                    description: 'We focus on delivering measurable outcomes that drive real value for our clients.',
                  },
                ].map((item, index) => (
                  <div
                    key={item.title}
                    className="flex items-start space-x-4 opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center bg-accent/10 rounded-sm flex-shrink-0">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden relative">
                <img
                  src="https://i.ibb.co/6cG8R6Bx/DG.jpg"
                  alt="Derivative Group - Trusted Partner"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Process"
            title="How We Work With You"
            description="A structured approach that ensures clarity, efficiency, and exceptional results at every stage."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'We listen to understand your goals, challenges, and unique requirements.' },
              { step: '02', title: 'Strategy', description: 'Our experts develop a tailored plan aligned with your objectives.' },
              { step: '03', title: 'Execution', description: 'We implement solutions with precision, keeping you informed throughout.' },
              { step: '04', title: 'Results', description: 'Deliver measurable outcomes and provide ongoing support for sustained success.' },
            ].map((item, index) => (
              <div
                key={item.step}
                className="relative text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="relative z-10">
                  <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Ready to Transform Your Business?"
        description="Partner with Derivative Group for tailored solutions that drive real results. Let's discuss your goals today."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
};

export default Home;
