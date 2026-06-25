import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Eula = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="End User License Agreement (EULA) | Arclight Painting"
        description="End User License Agreement for ADOS (Arclight Operating System), the internal application used by Arclight Painting for bookkeeping and QuickBooks Online integration."
        canonical="/eula"
      />
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">End User License Agreement (EULA) — ADOS (Arclight Operating System)</h1>

          <p className="text-sm text-muted-foreground mb-6"><strong>Last updated:</strong> June 25, 2026</p>

          <p className="text-muted-foreground mb-6">
            This End User License Agreement ("Agreement") is a legal agreement between you ("User") and Arclight Services Co., doing business as Arclight Painting ("Arclight," "we," "us," or "our"), governing your access to and use of the ADOS (Arclight Operating System) application and its related software and integrations, including its connection to QuickBooks Online (collectively, the "Application"). By accessing or using the Application, you agree to be bound by this Agreement. If you do not agree, do not access or use the Application.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">1. License Grant</h2>
          <p className="text-muted-foreground mb-6">
            Arclight grants you a limited, non-exclusive, non-transferable, revocable license to use the Application solely for Arclight's internal business operations, including bookkeeping, accounts-receivable management, and maintenance of financial records.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">2. Permitted Use</h2>
          <p className="text-muted-foreground mb-6">
            The Application is intended for use by Arclight and its authorized personnel and agents. You may use the Application only for lawful business purposes and in accordance with this Agreement and all applicable laws and regulations.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">3. Restrictions</h2>
          <p className="text-muted-foreground mb-6">
            You may not: (a) copy, modify, distribute, sell, sublicense, or lease any part of the Application; (b) reverse engineer, decompile, or attempt to extract the source code, except to the extent permitted by law; (c) use the Application to violate any law or infringe any third-party right; (d) use the Application to move, transfer, or disburse funds — the Application does not perform money movement; or (e) share access credentials with, or grant access to, unauthorized parties.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">4. QuickBooks Online Integration</h2>
          <p className="text-muted-foreground mb-6">
            The Application connects to QuickBooks Online through Intuit's authorized API to read and update Arclight's own accounting records — for example, applying customer payments to invoices and adjusting invoice line items. The Application does not initiate payments, transfers, payroll, or any movement of funds. Your use of QuickBooks Online is additionally governed by Intuit's applicable terms.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">5. Data and Privacy</h2>
          <p className="text-muted-foreground mb-6">
            The Application accesses and processes Arclight's business and financial data to perform its functions. Our handling of personal information is described in our Privacy Policy at https://arclightpainting.com/privacy-policy. Access tokens and credentials are stored securely and used only to perform authorized operations.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">6. Intellectual Property</h2>
          <p className="text-muted-foreground mb-6">
            The Application and all related intellectual property are and remain the property of Arclight. This Agreement grants no ownership rights in the Application.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">7. Disclaimer of Warranties</h2>
          <p className="text-muted-foreground mb-6">
            The Application is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express or implied, including without limitation warranties of merchantability, fitness for a particular purpose, and non-infringement. Arclight does not warrant that the Application will be uninterrupted, secure, or error-free.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">8. Limitation of Liability</h2>
          <p className="text-muted-foreground mb-6">
            To the maximum extent permitted by law, Arclight shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, or data, arising out of or relating to your use of the Application.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">9. Termination</h2>
          <p className="text-muted-foreground mb-6">
            Arclight may suspend or terminate your access to the Application at any time, with or without cause. Upon termination, your license ends and you must cease all use of the Application.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">10. Governing Law</h2>
          <p className="text-muted-foreground mb-6">
            This Agreement is governed by the laws of the State of Washington, USA, without regard to its conflict-of-laws principles.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">11. Changes to this Agreement</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Agreement from time to time. Material changes will be reflected by the "Last updated" date above. Your continued use of the Application after changes take effect constitutes acceptance.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">12. Contact</h2>
          <p className="text-muted-foreground mb-1"><strong>Arclight Services Co.</strong> (dba Arclight Painting)</p>
          <p className="text-muted-foreground mb-1">Email: shawn@arclightpainting.com</p>
          <p className="text-muted-foreground mb-6">Phone: (425) 757-1199</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Eula;