import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEOHead
        title="Page Not Found | Derivative Group"
        description="The page you're looking for doesn't exist. Return to Derivative Group homepage."
      />

      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-9xl font-serif font-bold text-accent/30">404</span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground -mt-6 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn-primary group">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline border-primary text-primary hover:bg-primary hover:text-primary-foreground group"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
