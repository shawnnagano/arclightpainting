import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Privacy Policy | Arclight Painting"
        description="Arclight Painting's privacy policy outlines how we collect, use, disclose, and protect your personal information."
        canonical="/privacy-policy"
      />
      <Header />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

          <p className="text-sm text-muted-foreground mb-2"><strong>Effective Date:</strong> 1/1/2024</p>
          <p className="text-sm text-muted-foreground mb-6"><strong>Last Updated:</strong> 12/24/2024</p>

          <p className="text-muted-foreground mb-6">
            Arclight Painting LLC ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information in compliance with applicable laws and regulations, including those related to SMS communications.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">1. Information We Collect</h2>
          <p className="text-muted-foreground mb-4">
            We collect personal information that you provide directly to us and information that is automatically collected when you interact with us. This includes:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Personal Information You Provide:</strong> Name, phone number, email address, physical address, payment information, and other details you provide when contacting us, making purchases, or signing up for services.</li>
            <li><strong>Communications Data:</strong> Information about your interactions with us through phone calls, SMS, emails, or other communications platforms.</li>
            <li><strong>Technical Information:</strong> Device information, IP address, browser type, and other metadata automatically collected through our website or services.</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">2. How We Use Your Information</h2>
          <p className="text-muted-foreground mb-4">We use your personal information to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Provide and manage our services, including responding to inquiries and fulfilling service requests.</li>
            <li>Improve our products and services based on customer interactions.</li>
            <li>Comply with legal obligations and enforce our terms of service.</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">3. SMS Communications</h2>
          <p className="text-muted-foreground mb-4">By opting in to receive SMS messages, you agree to the following:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li><strong>Types of Messages:</strong> Communications may include appointment reminders, promotions, service updates, and notifications.</li>
            <li><strong>Message Frequency:</strong> Message frequency varies depending on your interactions with us.</li>
            <li><strong>Standard Messaging Rates:</strong> Standard message and data rates may apply as determined by your mobile carrier.</li>
            <li><strong>Opt-Out:</strong> Reply "STOP" to opt-out of SMS communications at any time.</li>
            <li><strong>Help:</strong> Reply "HELP" for assistance or visit arclightpainting.com.</li>
            <li><strong>Opt Back In:</strong> To opt back in at any time reply "START".</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">4. How We Protect Your Information</h2>
          <p className="text-muted-foreground mb-4">
            We take reasonable technical, administrative, and physical measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Encryption of sensitive data during transmission.</li>
            <li>Regular security assessments of our systems and practices.</li>
            <li>Limiting access to personal information to authorized personnel only.</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">5. Sharing Your Information</h2>
          <p className="text-muted-foreground mb-6">
            SMS consent and phone number will never be shared or sold to any third party or affiliates for marketing purposes.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">6. Your Rights</h2>
          <p className="text-muted-foreground mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
            <li>Access, update, or delete your personal information.</li>
            <li>Opt-out of SMS communications by replying "STOP."</li>
            <li>Request details about how your information is collected and used.</li>
          </ul>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">7. Cookies and Tracking Technologies</h2>
          <p className="text-muted-foreground mb-6">
            We use cookies and similar technologies to enhance your experience on our website. You can manage your preferences through your browser settings.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">8. Children's Privacy</h2>
          <p className="text-muted-foreground mb-6">
            Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from them.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">9. Changes to This Policy</h2>
          <p className="text-muted-foreground mb-6">
            We may update this Privacy Policy from time to time. Any changes will be posted on our website with the updated effective date.
          </p>

          <hr className="my-6 border-border" />

          <h2 className="text-xl font-bold mb-4">10. Contact Us</h2>
          <p className="text-muted-foreground mb-2">
            If you have questions or concerns about this Privacy Policy or your personal information, please contact us at:
          </p>
          <p className="text-muted-foreground mb-1"><strong>Arclight Painting</strong></p>
          <p className="text-muted-foreground mb-1">PO Box 1484, Bothell, WA 98041</p>
          <p className="text-muted-foreground mb-1">info@arclightpainting.com</p>
          <p className="text-muted-foreground mb-6">425-757-1199</p>

          <hr className="my-6 border-border" />

          <p className="text-muted-foreground">
            This Privacy Policy ensures compliance with legal requirements while safeguarding your personal information. Thank you for trusting Arclight Painting!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
