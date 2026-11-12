import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Terms & Conditions | Arclight Painting"
        description="Terms & Conditions for JobTrack, the ADOS/JobTrack application operated by Arclight Services Co. (dba Arclight Painting) for scheduling, job tracking, quoting, invoicing and payments."
        canonical="/terms"
      />
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Terms &amp; Conditions — ADOS / JobTrack Application (app.arclightpainting.com)</h1>

          <p className="text-sm text-muted-foreground mb-1"><strong>Effective date:</strong> July 18, 2026</p>
          <p className="text-sm text-muted-foreground mb-6"><strong>Last updated:</strong> November 12, 2026</p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">1. ACCEPTANCE OF TERMS</h2>
          <p className="text-muted-foreground mb-6">
            By accessing or using the ADOS/JobTrack application ("the App"), operated by Arclight Services Co., doing business as Arclight Painting ("Arclight," "we," "us," "our"), you agree to these Terms &amp; Conditions. If you do not agree, do not use the App.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">2. DESCRIPTION OF SERVICE</h2>
          <p className="text-muted-foreground mb-6">
            The App is Arclight's operating platform for scheduling, job tracking, quoting, invoicing, and related business functions, used by Arclight employees, subcontractors ("Team Leaders"), and — for certain features (e.g., quotes, schedules, payments) — Arclight customers.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">3. ACCOUNTS &amp; ACCESS</h2>
          <p className="text-muted-foreground mb-6">
            Access is granted per individual account, scoped to the role/seat assigned to that user. Do not share login credentials. Report suspected unauthorized access immediately to admin@arclightpainting.com.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">4. ACCEPTABLE USE</h2>
          <p className="text-muted-foreground mb-6">
            Users may not: attempt to access data or systems outside their assigned role; interfere with or disrupt the App's operation; upload unlawful, harmful, or infringing content; use the App for any purpose other than Arclight business.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">5. CUSTOMER-FACING FEATURES (quotes, payments, schedules)</h2>
          <p className="text-muted-foreground mb-6">
            Where the App is used to present a quote, contract, schedule, or payment to a customer, that content is confirmed accurate as of the time presented; totals, dates, and balances update as the underlying job changes. Payments processed through the App are handled by our third-party payment processor(s) (e.g., Stripe) and are subject to that processor's own terms.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">6. INFORMATION SECURITY</h2>
          <p className="text-muted-foreground mb-4">
            Arclight maintains an internal Information Security Policy governing access control, encryption, monitoring, and incident response for the systems behind this App. In summary:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
            <li>Access to Arclight systems, including this App, is granted on a least-privilege, role-based basis and reviewed periodically.</li>
            <li>Data handled by the App is hosted with third-party providers (Google Workspace, Supabase, Cloudflare, and the financial/CRM vendors listed in our Information Security Policy) that maintain their own industry-standard security certifications; data in transit is encrypted.</li>
            <li>Suspected security incidents are investigated and, where legally required, affected parties are notified.</li>
            <li>Our full Information Security Policy is available on request from admin@arclightpainting.com and is incorporated into these Terms by reference.</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">7. DATA RETENTION &amp; DELETION</h2>
          <p className="text-muted-foreground mb-6">
            Personal and business data collected through the App is retained only as long as needed for the purpose collected, applicable legal/tax requirements (e.g., financial records retained per standard accounting guidance), or an active customer/employment relationship, after which it is deleted or anonymized. See our <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link> for consumer data rights, including the right to request access, correction, or deletion.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">8. CONSENT TO DATA COLLECTION</h2>
          <p className="text-muted-foreground mb-6">
            By using the App, you consent to the collection, processing, and storage of your information as described in our Privacy Policy and this section. Where the App connects to a third-party financial data provider (e.g., Plaid) to retrieve bank/transaction data for job-cost purposes, that connection is initiated only with the affected account holder's explicit action and is governed additionally by that provider's own consumer terms.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">9. INTELLECTUAL PROPERTY</h2>
          <p className="text-muted-foreground mb-6">
            The App, its design, and its underlying software are the property of Arclight Services Co. (dba Arclight Painting) and its technology partners. Users are granted a limited, non-transferable right to use the App for its intended business purpose only.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">10. DISCLAIMER OF WARRANTIES</h2>
          <p className="text-muted-foreground mb-6">
            The App is provided "as is." Arclight does not warrant the App will be uninterrupted or error-free.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">11. LIMITATION OF LIABILITY</h2>
          <p className="text-muted-foreground mb-6">
            To the fullest extent permitted by law, Arclight's liability arising from use of the App is limited to direct damages and shall not include indirect, incidental, or consequential damages.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">12. TERMINATION</h2>
          <p className="text-muted-foreground mb-6">
            Arclight may suspend or terminate App access for any user who violates these Terms, effective immediately.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">13. CHANGES TO THESE TERMS</h2>
          <p className="text-muted-foreground mb-6">
            We may update these Terms from time to time; changes are posted within the App with an updated "Last Updated" date.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">14. GOVERNING LAW</h2>
          <p className="text-muted-foreground mb-6">
            These Terms are governed by the laws of the State of Washington.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">15. CONTACT</h2>
          <p className="text-muted-foreground mb-1">Arclight Services Co., dba Arclight Painting</p>
          <p className="text-muted-foreground mb-1">PO Box 1484, Bothell, WA 98041</p>
          <p className="text-muted-foreground mb-6">admin@arclightpainting.com · 425-757-1199</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;
