import Image from "next/image";
import hero_img from "../public/images/hero_image.png";
import section_img_1 from "../public/images/section-image-1.png";
import section_img_2 from "../public/images/section-image-2.png";
import section_img_3 from "../public/images/section-image-3.png";
import Stats from "@/components/Stats";
import Button from "@/components/Button";
import Section from "@/components/Section";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="container">
      <main>
        <div className="main-content">
          <h1>Store and share your text snippets in a click</h1>
          <p>
            Simplify your digital life with our powerful link shortening and
            pasteing tools.
          </p>
          <Button type="primary">
            <Link href="/new/paste">Create Paste</Link>
          </Button>
        </div>

        <Image src={hero_img} alt="hero" className="hero-image" />
      </main>

      <Section>
        <div className="section-content">
          <h2>Large public repository of data</h2>
          <p>
            Our users post millions of text snippets every day, and we store all
            of them in our database. You can search for any text snippet and
            find it in seconds. We also provide an API to access our database.
          </p>
          <Button type="secondary">
            <Link href="/paste/public">Explore Pastes</Link>
          </Button>
        </div>
        <Image
          src={section_img_3}
          className="section-image"
          alt="section image"
        />
      </Section>

      <Section>
        <div className="section-content">
          <h2>Save your pastes at ease</h2>
          <p>
            cclick.click is a simple and service that lets you store and share
            your text snippets with anyone. Whether you need to share code,
            notes, logs, or anything else, cclick.click makes it easy and fast.
            Just paste your text, copy the link, and share it with anyone.
          </p>
        </div>
        <Image
          src={section_img_1}
          className="section-image"
          alt="section image"
        />
      </Section>

      <Section>
        <div className="section-content">
          <h2>Store unlimited text snippets</h2>
          <p>
            store unlimited text snippets, share them instantly, highlight
            syntax, protect with passwords, and more. We always keep adding new
            features to make your experience better.
          </p>
        </div>
        <Image
          src={section_img_2}
          className="section-image"
          alt="section image"
        />
      </Section>

      <Stats />
    </div>
  );
}
