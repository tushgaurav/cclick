"use client";

import { useEffect, useState } from "react";
import { generateUsername } from "unique-username-generator";
import Loading from "@/app/(common)/loading";

import styles from "../styles/form.module.css";
import HoverButton from "./HoverButton";
import ShortLink from "./ShortLink";

function generateBackhalf() {
  let random = Math.floor(1000 + Math.random() * 9000);
  let backhalf = generateUsername("_");

  return backhalf + random;
}

const LinkForm = () => {
  const [backhalf, setBackhalf] = useState("");
  const [generate, setGenerate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});
  const [displayShort, setDisplayShort] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false); // [buttonDisabled, setButtonDisabled
  const [backhalfAvailable, setBackhalfAvailable] = useState(true); // [backhalfAvailable, setBackhalfAvailable

  useEffect(() => {
    setBackhalf(generateBackhalf());
  }, [generate]);

  const checkBackhalfAvailable = async (e) => {
    const backhalf = e.target.value;
    setBackhalf(backhalf);
    const post = {
      backhalf: backhalf,
    };

    const jsonData = JSON.stringify(post);

    fetch("/api/available/backhalf", {
      method: "POST",
      body: jsonData,
    }).then((response) => {
      if (response.status === 200) {
        setBackhalfAvailable(true);
        setButtonDisabled(false);
      } else {
        setBackhalfAvailable(false);
        setButtonDisabled(true);
      }
    });
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const post = {
      title: e.currentTarget.title.value,
      link: e.currentTarget.link.value,
      backhalf: e.currentTarget.backhalf.value,
    };

    const jsonData = JSON.stringify(post);

    const response = await fetch("/api/post/link", {
      method: "POST",
      body: jsonData,
    });

    const data = await response.json();
    console.log(data);
    setResult(data);
    setLoading(false);
    setDisplayShort(true);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : displayShort ? (
        <ShortLink
          link={result.link}
          fullLink={result.link}
          backhalf={result.backhalf}
        />
      ) : (
        <form onSubmit={handleSubmit} className={styles.form}>
          <h1>Shorten Links</h1>

          <div>
            <label
              title="The title of your link"
              className={styles.label}
              htmlFor="title"
            >
              Link Title
            </label>
            <input
              className={styles.input}
              type="text"
              id="title"
              name="title"
            />
          </div>

          <div>
            <label
              title="Enter the link you want to shorten here"
              className={styles.label}
              htmlFor="link"
            >
              Full Link <span className={styles.required}>*</span>
            </label>
            <input
              className={styles.input}
              type="url"
              id="link"
              name="link"
              required
            />
          </div>

          <div>
            <label
              title="Slug is like a username, which is added to the url to display your paste, it needs to be unique."
              className={styles.label}
              htmlFor="slug"
            >
              Customise Backhalf <span className={styles.required}>*</span>{" "}
              <span className={styles.unique}>unique</span>
              {backhalfAvailable ? (
                <span className={styles.available}>available</span>
              ) : (
                <span className={styles.exists}> not available</span>
              )}
            </label>
            <input
              className={styles.input}
              type="text"
              id="backhalf"
              name="backhalf"
              value={backhalf}
              onChange={checkBackhalfAvailable}
            />
          </div>

          <div className={styles.fix}>
            <HoverButton disabled={buttonDisabled}>Shorten Link</HoverButton>
          </div>
        </form>
      )}
    </div>
  );
};

export default LinkForm;
