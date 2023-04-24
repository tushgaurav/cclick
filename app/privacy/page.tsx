import Link from "next/link";
import Section from "@/components/Section";

export default function PrivacyPolicy() {
  return (
    <div className="container">
      <main>
        <div className="main-content">
          <h1>Privacy Policy</h1>
          <p>
            At cclick, we take your privacy seriously. This Privacy Policy
            describes how we collect, use, and share information about you when
            you use our platform.
          </p>
        </div>
      </main>

      <Section>
        <div className="section-content">
          <h4>What information do we collect?</h4>
          <p>
            When you use our platform, we may collect certain information about
            your use of the platform, including:{" "}
          </p>
          <ul>
            <li>Your IP address and device information;</li>
            <li>Your browser type and operating system;</li>
            <li>The content you post on our platform; and</li>
            <li>
              Other information you provide to us, such as your name and email
              address.
            </li>
          </ul>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>How We Use Your Information</h4>
          <p>We use the information we collect about you to:</p>
          <ul>
            <li>Provide and improve our platform;</li>
            <li>
              Communicate with you about our platform and any updates or
              changes;
            </li>
            <li>Enforce our Terms of Use and other policies; and</li>
            <li>Comply with legal obligations.</li>
          </ul>
          <p style={{ paddingTop: "0.5em" }}>
            We may also use the information we collect for other purposes with
            your consent.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Information Sharing</h4>
          <p>
            We may share your information with third parties in the following
            circumstances:
          </p>
          <ul>
            <li>With your consent;</li>
            <li>
              With service providers who perform services on our behalf, such as
              hosting or payment processing;
            </li>
            <li>
              To comply with legal obligations or respond to lawful requests
              from authorities;
            </li>
            <li>
              To protect our rights, property, or safety, or the rights,
              property, or safety of others; or
            </li>
            <li>
              In connection with a merger, acquisition, or other corporate
              transaction.
            </li>
          </ul>
          <p style={{ paddingTop: "0.5em" }}>
            We may also share aggregated or anonymized information that does not
            personally identify you.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Data Retention</h4>
          <p>
            We will retain your information for as long as necessary to provide
            our platform and fulfill the purposes described in this Privacy
            Policy, unless a longer retention period is required or permitted by
            law.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Security</h4>
          <p>
            We take reasonable measures to protect your information from
            unauthorized access, use, or disclosure. However, please be aware
            that no security measures are perfect or impenetrable.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Your Rights</h4>
          <p>
            You may have certain rights with respect to your personal
            information, including the right to access, correct, or delete your
            information. Please contact us using the information provided below
            if you would like to exercise any of these rights.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Changes to this Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. If we make any
            material changes, we will notify you by email or through a notice on
            our platform prior to the change becoming effective. We encourage
            you to review this Privacy Policy periodically to stay informed
            about how we are protecting your information.
          </p>
        </div>
      </Section>

      <Section>
        <div className="section-content">
          <h4>Contact Us</h4>
          <p>
            If you have any questions about this Privacy Policy or our privacy
            practices, please contact us at{" "}
            <Link className="link" href="mailto:contact@cclick.click">
              mail us
            </Link>
          </p>
        </div>
      </Section>
    </div>
  );
}
