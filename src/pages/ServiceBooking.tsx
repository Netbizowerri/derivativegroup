import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import SectionHeading from '@/components/SectionHeading';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xlgrvzde';

const ServiceBooking = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialService = searchParams.get('service') || '';

  const [service, setService] = useState(initialService);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [budget, setBudget] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialService) setService(initialService);
  }, [initialService]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const payload = {
      service,
      name,
      email,
      phone,
      company,
      preferredDate,
      preferredTime,
      budget,
      message,
      timestamp: new Date().toISOString(),
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Submission failed');
      }

      // On success redirect to thank you with service and name
      const params = new URLSearchParams();
      if (service) params.set('service', service);
      if (name) params.set('name', name);
      navigate(`/thank-you?${params.toString()}`);
    } catch (err: any) {
      setError(err?.message || 'Submission failed');
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead title="Book a Service | Derivative Group" description="Book a service appointment with Derivative Group." />

      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Service Booking"
            title="Book a Service"
            description="Complete the form below to request a booking. We'll review your request and get back to you to confirm details."
            centered
          />

          <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Service</label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition-shadow shadow-sm hover:shadow-md"
                  >
                    <option value="">-- Select a Service --</option>
                    <option>Business Funding</option>
                    <option>Financial Advisory</option>
                    <option>Investment Guidance</option>
                    <option>Corporate Finance</option>
                    <option>Property Investment Advisory</option>
                    <option>Development Support</option>
                    <option>Asset Management</option>
                    <option>Transaction Advisory</option>
                    <option>Strategic Planning</option>
                    <option>Operations Optimization</option>
                    <option>Organizational Development</option>
                    <option>Innovation & Growth</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Full Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Phone</label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Company (optional)</label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Preferred Date</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-muted-foreground mb-2">Preferred Time</label>
                    <input
                      type="time"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Estimated Budget (optional)</label>
                  <input
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="e.g., ₦5,000,000"
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">Additional Details</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={6}
                    className="w-full rounded-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent/40 transition shadow-sm hover:shadow-md"
                  />
                </div>

                {error && <p className="text-sm text-destructive">{error}</p>}

                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center px-6 py-3 bg-accent text-white rounded-md shadow hover:shadow-lg transform hover:-translate-y-0.5 transition"
                  >
                    {submitting ? 'Submitting…' : 'Request Booking'}
                  </button>
                </div>
              </form>
            </div>

            <aside className="bg-card p-6 rounded-lg border border-border shadow-sm">
              <h4 className="text-lg font-semibold mb-3">What happens next</h4>
              <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                <li>We review your request and confirm availability.</li>
                <li>Our team reaches out to finalize details and next steps.</li>
                <li>We send a formal proposal and booking confirmation.</li>
              </ol>

              <div className="mt-6">
                <h5 className="text-sm font-medium mb-2">Need immediate assistance?</h5>
                <p className="text-sm text-muted-foreground">Call our team or use the chat widget for quick support.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceBooking;
