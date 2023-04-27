import Image from "next/image";
import Section from "@/components/Section";
import { delay } from "@/lib/async";

export const metadata = {
  title: "About | cclick.click",
  openGraph: {
    title: "About",
  },
};

export default async function About() {
  return (
    <div className="container">
      <main>
        <div>
          <h1>About cclick</h1>
          <p>
            Here at our open source alternative to Paste Bin, we take sharing
            text seriously... but not ourselves! We're a team of techies, nerds,
            and all-around goofballs who believe that humor is the spice of
            life. We've been known to have heated debates about the merits of
            different programming languages, but we always find common ground
            when it comes to our love of memes and dad jokes. So if you're
            looking for a platform that takes your text seriously but also knows
            how to laugh at itself, you've come to the right place. Join us in
            our quest to make the internet a little more fun, one paste at a
            time!
          </p>
          <p>
            Whether you're a developer, a writer, a student, or just someone who
            needs to share text online, we're here to provide you with a
            reliable and user-friendly platform. Thank you for choosing our open
            source alternative to Paste Bin, and we look forward to serving you!
          </p>
        </div>
      </main>
      <Section>
        <div>
          <h2>Open Sourced</h2>
          <p>
            Welcome to our open source alternative to Paste Bin! We believe that
            everyone should have access to a simple and reliable platform for
            sharing text, code, and other snippets online. Our platform is
            designed to be user-friendly, secure, and customizable to meet the
            needs of different users.
          </p>
          <h2>Packed with Features</h2>
          <p>
            Our platform offers a range of features, including easy-to-use text
            editors, syntax highlighting for code, and customizable sharing
            options. You can create an account to save and manage your pastes,
            or use our platform anonymously to share your content with others.
          </p>
        </div>
      </Section>
    </div>
  );
}
