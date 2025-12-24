import { useSearchParams, Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const service = searchParams.get('service');
  const name = searchParams.get('name');

  return (
    <>
      <SEOHead title="Thank You | Derivative Group" description="Thank you for your booking request." />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-serif font-bold mb-4">Thank you{name ? `, ${name}` : ''}!</h1>
            <p className="text-lg text-muted-foreground mb-6">
              Your booking request{service ? ` for ${service}` : ''} has been received. We will review it and contact you shortly to confirm details.
            </p>
            <div className="space-x-3">
              <Link to="/" className="btn-outline">Back to Home</Link>
              <Link to="/contact" className="btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThankYou;
