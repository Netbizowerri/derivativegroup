import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Users, Shield, Lightbulb } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';
import aboutTeam from '@/assets/about-team.jpg';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our dealings, building trust through transparency and honesty.',
    },
    {
      icon: Lightbulb,
      title: 'Excellence',
      description: 'We strive for exceptional quality in everything we do, continuously improving to exceed expectations.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We view every client relationship as a partnership, investing in your success as if it were our own.',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We measure our success by the positive impact we create for our clients, communities, and stakeholders.',
    },
  ];

  return (
    <>
      <SEOHead
        title="About Derivative Group | Trusted Business Solutions Partner"
        description="Learn about Derivative Group, our mission, values, and commitment to client success."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
              Your Trusted Partner for Growth
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed opacity-0 animate-fade-up delay-200">
              For over a decade, Derivative Group has been helping businesses and individuals 
              achieve their financial and strategic goals through expert guidance and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Who We Are"
                title="Building Success, One Partnership at a Time"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Derivative Group is a multi-disciplinary firm offering comprehensive solutions 
                  across financial services, property, and strategic consulting. Founded with a 
                  vision to bridge the gap between ambition and achievement, we have grown into 
                  a trusted partner for businesses and individuals across Nigeria.
                </p>
                <p>
                  Our team brings together decades of combined experience from leading institutions, 
                  combining deep industry knowledge with a client-centric approach that sets us apart. 
                  We believe in building lasting relationships, not transactions – and in delivering 
                  results that truly make a difference.
                </p>
                <p>
                  Whether you're seeking funding for your next venture, exploring real estate 
                  opportunities, or navigating complex business challenges, Derivative Group is 
                  here to guide you every step of the way.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={aboutTeam}
                alt="Derivative Group team members collaborating in a modern office"
                className="w-full rounded-sm shadow-card"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 shadow-soft opacity-0 animate-fade-up" style={{ animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted and impactful business solutions partner in Africa, 
                empowering enterprises and individuals to achieve sustainable prosperity 
                through innovative financial, property, and consulting services.
              </p>
            </div>

            <div className="bg-card p-8 shadow-soft opacity-0 animate-fade-up delay-100" style={{ animationFillMode: 'forwards' }}>
              <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional value to our clients by providing tailored solutions 
                that address their unique needs, leveraging our expertise, integrity, and 
                unwavering commitment to their success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Values"
            title="Principles That Guide Us"
            description="Our core values define who we are and how we serve our clients, partners, and communities."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="text-center opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-primary rounded-full mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Exist */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-6">
              Why We Exist
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-8">
              We exist because we believe every business deserves access to world-class 
              expertise. Too many promising ventures fail not from lack of potential, 
              but from lack of the right guidance at the right time. Derivative Group 
              bridges that gap – bringing institutional-grade solutions to businesses 
              of all sizes, and helping individuals build the wealth they deserve.
            </p>
            <Link to="/contact" className="btn-accent group">
              Partner With Us
              <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Work With Us?"
        description="Let's discuss how Derivative Group can help you achieve your goals."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
    </>
  );
};

export default About;
