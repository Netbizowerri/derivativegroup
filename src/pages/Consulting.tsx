import { Link } from 'react-router-dom';
import { ArrowRight, Target, BarChart3, Users, Lightbulb, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const Consulting = () => {
  const services = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Define your vision and chart a clear path to sustainable growth with our strategic planning expertise.',
      deliverables: ['Vision & Mission Development', 'Strategic Roadmaps', 'Goal Setting Frameworks', 'Performance Metrics'],
    },
    {
      icon: BarChart3,
      title: 'Operations Optimization',
      description: 'Streamline processes, reduce costs, and improve efficiency across your organization.',
      deliverables: ['Process Mapping', 'Efficiency Audits', 'Cost Reduction Plans', 'Technology Integration'],
    },
    {
      icon: Users,
      title: 'Organizational Development',
      description: 'Build high-performing teams and organizational structures that drive results.',
      deliverables: ['Structure Design', 'Leadership Development', 'Culture Transformation', 'Change Management'],
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Growth',
      description: 'Identify new opportunities and develop strategies for market expansion and innovation.',
      deliverables: ['Market Analysis', 'Growth Strategies', 'New Product Development', 'Partnership Advisory'],
    },
  ];

  const process = [
    { phase: 'Assess', description: 'Deep-dive analysis of your current state and challenges' },
    { phase: 'Plan', description: 'Develop tailored strategies and actionable roadmaps' },
    { phase: 'Execute', description: 'Implement solutions with hands-on expert support' },
    { phase: 'Sustain', description: 'Ensure lasting results through monitoring and refinement' },
  ];

  return (
    <>
      <SEOHead
        title="Business & Strategic Consulting | Derivative Group"
        description="Strategic business consulting to drive growth, efficiency, and long-term success."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Consulting Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
              Transform Challenges Into Opportunities
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed opacity-0 animate-fade-up delay-200">
              Our strategic consulting services help businesses navigate complexity, 
              optimize operations, and unlock sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Services"
            title="Strategic Consulting Solutions"
            description="Comprehensive consulting services designed to address your most pressing business challenges."
            centered
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-card border border-border p-8 card-hover opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 rounded-sm mb-6">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="border-t border-border pt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                <div className="mt-6">
                  <Link to={`/service-booking?service=${encodeURIComponent(service.title)}`} className="btn-outline">
                    Book Service
                  </Link>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Process */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="How We Engage"
            title="Our Consulting Approach"
            description="A proven methodology that ensures clarity, alignment, and measurable outcomes."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div
                key={item.phase}
                className="relative text-center p-6 bg-card shadow-soft opacity-0 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-accent text-primary text-sm font-bold rounded-full">
                  {index + 1}
                </div>
                <h4 className="text-xl font-serif font-semibold text-foreground mt-4 mb-3">
                  {item.phase}
                </h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                subtitle="Industries We Serve"
                title="Cross-Sector Expertise"
                description="Our consultants bring deep experience across multiple industries, enabling us to deliver insights that truly make a difference."
              />

              <div className="grid grid-cols-2 gap-4">
                {[
                  'Financial Services',
                  'Real Estate',
                  'Manufacturing',
                  'Technology',
                  'Healthcare',
                  'Retail & Consumer',
                  'Energy & Utilities',
                  'Professional Services',
                ].map((industry, index) => (
                  <div
                    key={industry}
                    className="flex items-center space-x-3 p-3 bg-muted rounded-sm opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-sm font-medium text-foreground">{industry}</span>
                  </div>
                ))}
              </div>

              <Link to={`/service-booking?service=${encodeURIComponent('Consulting Services')}`} className="btn-primary mt-8 group">
                Start a Conversation
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-primary p-8 rounded-sm">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground mb-6">
                What Sets Us Apart
              </h3>
              <ul className="space-y-4">
                {[
                  'Hands-on approach with senior consultants on every engagement',
                  'Practical recommendations grounded in real-world experience',
                  'Focus on implementation and measurable results',
                  'Long-term partnership mindset, not transactional relationships',
                  'Local expertise with global best practices',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Elevate Your Business?"
        description="Let's discuss how our consulting expertise can help you achieve your strategic objectives."
        buttonText="Book a Service"
        buttonLink={`/service-booking?service=${encodeURIComponent('Consulting Services')}`}
      />
    </>
  );
};

export default Consulting;
