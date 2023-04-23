import Image from "next/image";
import styles from "@/styles/homepage.module.css";
import Link from "next/link";

import hero_img from "../public/images/hero_image.png";
import section_img from "../public/images/section-image.png";

import Stats from "@/components/Stats";
import Button from "@/components/Button";
import Section from "@/components/Section";

// import Counter from "./compoents/nCdefaultounter";

async function getIp() {
  let data = await fetch("https://api.ipify.org/?format=json");
  return data.json();
}

export default async function Home() {
  let ip = await getIp();

  return (
    <div className="container">
      <main>
        <div className="main-content">
          <h1>everyone loves cclick</h1>
          <p>
            Simplify your digital life with our powerful link shortening and
            pasteing tools.
          </p>
          <Button type="primary">
            <a href="#" className="btn">
              Get Started
            </a>
          </Button>
        </div>
        <Image src={hero_img} alt="hero" className="hero-image" />
      </main>

      <Section>
        <div className="section-content">
          <h2>Save your pastes at ease.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            beatae! Eaque ad autem laboriosam qui aspernatur, quidem, odio
            magni, dicta voluptas consequuntur dolorum earum ipsa iusto mollitia
            nam veniam at. Illum provident expedita dolore natus dicta
            praesentium, ab cum ullam deserunt magnam assumenda repellat. Minus
            minima perferendis iste vel ullam?
          </p>
        </div>
        <Image
          src={section_img}
          className="section-image"
          alt="section image"
        />
      </Section>

      <Section>
        <div className="section-content">
          <h2>Save your pastes at ease.</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis,
            beatae! Eaque ad autem laboriosam qui aspernatur, quidem, odio
            magni, dicta voluptas consequuntur dolorum earum ipsa iusto mollitia
            nam veniam at. Illum provident expedita dolore natus dicta
            praesentium, ab cum ullam deserunt magnam assumenda repellat. Minus
            minima perferendis iste vel ullam?
          </p>
        </div>
        <Image
          src={section_img}
          className="section-image"
          alt="section image"
        />
      </Section>

      <Stats />
    </div>
  );
}
