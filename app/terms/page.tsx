import Section from "@/components/Section";
import Image from "next/image";

import cloud from "../../public/images/cloud.png";
import Link from "next/link";

export default function Terms() {
  return (
    <div className="container">
      <main>
        <div className="main-content">
          <h1>Terms of Use</h1>
          <p style={{ maxWidth: "90%" }}>
            Welcome to our open source alternative to Paste Bin! We're happy to
            have you here, but we do have some rules that we ask you to follow.
          </p>
        </div>

        <Image src={cloud} alt="cloud" className="section-image" />
      </main>
      <Section>
        <div className="section-content">
          <h4>
            By using our platform, you agree to abide by the following terms of
            use:
          </h4>
          <ol>
            <li>
              You are solely responsible for the content you post on our
              platform. This includes ensuring that you have the legal right to
              post the content and that it does not infringe on any intellectual
              property rights, privacy rights, or other rights of any third
              party.
            </li>
            <li>
              You may not use our platform to post content that is illegal,
              defamatory, harassing, or otherwise offensive or inappropriate.
            </li>
            <li>
              You may not use our platform to engage in any activity that
              violates Indian laws or regulations.
            </li>
            <li>
              We reserve the right to remove any content that violates these
              terms of use or is otherwise objectionable in our sole discretion.
            </li>
            <li>
              We may collect and use certain information about your use of our
              platform in accordance with our privacy policy, which you can read
              here{" "}
              <Link className="link" href="/privacy">
                Privacy Policy
              </Link>
              .
            </li>
            <li>
              Our platform is provided "as is" and we make no representations or
              warranties of any kind, express or implied, regarding its
              operation, availability, or content.
            </li>
          </ol>

          <p>
            By using our platform, you agree to these terms of use and to comply
            with all applicable laws and regulations. We reserve the right to
            update these terms of use at any time without notice, so please
            check this page regularly for updates. If you have any questions or
            concerns about our terms of use or our platform in general, please
            contact us at [insert contact information].
          </p>
          <h4>
            Thank you for choosing our open source alternative cclick, and we
            look forward to providing you with a reliable and user-friendly
            platform.
          </h4>
        </div>
      </Section>
    </div>
  );
}
