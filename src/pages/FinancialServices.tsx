import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, PieChart, Wallet, Briefcase, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';
import CTABanner from '@/components/CTABanner';

const FinancialServices = () => {
  const services = [
    {
      icon: Wallet,
      title: 'Business Funding',
      description: 'Access flexible funding solutions designed to fuel your business growth, from working capital to expansion financing.',
      features: ['Working Capital', 'Growth Financing', 'Project Funding', 'Trade Finance'],
    },
    {
      icon: PieChart,
      title: 'Financial Advisory',
      description: 'Expert guidance on financial planning, risk management, and strategic financial decisions.',
      features: ['Financial Planning', 'Risk Assessment', 'Cash Flow Management', 'Tax Strategy'],
    },
    {
      icon: TrendingUp,
      title: 'Investment Guidance',
      description: 'Make informed investment decisions with our research-backed insights and portfolio strategies.',
      features: ['Portfolio Strategy', 'Market Analysis', 'Asset Allocation', 'Returns Optimization'],
    },
    {
      icon: Briefcase,
      title: 'Corporate Finance',
      description: 'Comprehensive corporate finance solutions including M&A advisory, valuations, and capital structuring.',
      features: ['M&A Advisory', 'Business Valuations', 'Capital Structuring', 'Due Diligence'],
    },
  ];

  return (
    <>
      <SEOHead
        title="Financial Services & Business Funding | Derivative Group"
        description="We provide business funding, financial advisory, investment guidance, and strategic financial planning."
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4 opacity-0 animate-fade-up">
              Financial Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight mb-6 opacity-0 animate-fade-up delay-100">
              Empowering Your Financial Future
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed opacity-0 animate-fade-up delay-200">
              From business funding to strategic financial advisory, we provide the expertise 
              and resources you need to achieve sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Comprehensive Financial Solutions"
            description="Tailored financial services designed to address your unique business needs and growth objectives."
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
                <ul className="grid grid-cols-2 gap-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link to={`/service-booking?service=${encodeURIComponent(service.title)}`} className="btn-outline">
                    Book Service
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '₦50B+', label: 'Funds Facilitated' },
                  { number: '500+', label: 'Businesses Served' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '24/7', label: 'Expert Support' },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card p-6 text-center shadow-soft opacity-0 animate-fade-up"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <span className="text-3xl font-serif font-bold text-accent">{stat.number}</span>
                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionHeading
                subtitle="The Derivative Advantage"
                title="Why Partner With Us?"
                description="We combine deep financial expertise with a client-centric approach to deliver solutions that truly make a difference."
              />
              <ul className="space-y-4">
                {[
                  'Tailored funding solutions for every business stage',
                  'Transparent terms with no hidden fees',
                  'Fast approval and disbursement processes',
                  'Ongoing support and financial guidance',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to={`/service-booking?service=${encodeURIComponent('Financial Services')}`} className="btn-primary mt-8 group">
                Discuss Your Needs
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Ready to Accelerate Your Growth?"
        description="Let's explore how our financial solutions can help you achieve your business objectives."
        buttonText="Book a Service"
        buttonLink={`/service-booking?service=${encodeURIComponent('Financial Services')}`}
      />
    </>
  );
};

export default FinancialServices;
