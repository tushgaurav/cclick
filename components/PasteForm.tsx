"use client";

import { useState } from "react";

import slugify from "react-slugify";
import styles from "../styles/pasteform.module.css";
import { useRouter } from "next/navigation";
import HoverButton from "./HoverButton";
import Loading from "@/app/loading";

const PasteForm = (userId: string, userName: string) => {
  const [slug, setSlug] = useState("paste_title");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const generateSlugFromTitle = (e) => {
    const date = new Date();
    const day_prefix = date.getDay().toString();
    setSlug(
      slugify(e.target.value, {
        delimiter: "_",
        prefix: day_prefix,
      })
    );
  };

  const generateSlug = (e) => {
    setSlug(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
      slug: e.target.slug.value,
      anonymous: e.target.anonymous.value,
      visibility: e.target.visibility.value,
      ownerId: userId.userId,
      ownerName: userId.userName,
    };

    const jsonData = JSON.stringify(post);

    const response = await fetch("/api/post", {
      method: "POST",
      body: jsonData,
    });

    if (response.status === 200) {
      router.push(`/paste/${post.slug}`);
    }

    if (response.status === 500) {
      router.push("/paste/error");
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label
          title="The title of your paste"
          className={styles.label}
          htmlFor="title"
        >
          Paste Title
        </label>
        <input
          className={styles.input}
          type="text"
          id="title"
          name="title"
          onChange={generateSlugFromTitle}
        />
      </div>

      <div>
        <label
          title="Enter the text you want to save here"
          className={styles.label}
          htmlFor="content"
        >
          Content <span className={styles.required}>*</span>
        </label>
        <textarea
          className={styles.textarea}
          id="content"
          name="content"
          required
        />
      </div>

      <div>
        <label
          title="Slug is like a username, which is added to the url to display your paste, it needs to be unique."
          className={styles.label}
          htmlFor="slug"
        >
          Slug <span className={styles.required}>*</span>
        </label>
        <input
          className={styles.input}
          type="text"
          id="slug"
          name="slug"
          value={slug}
          onChange={generateSlug}
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="anonymous">
          Anonomulsy
        </label>
        <input
          className={styles.input}
          type="checkbox"
          name="anonymous"
          id="anonymous"
          value="true"
        />
      </div>

      <div>
        <label className={styles.label} htmlFor="visibility">
          Visibility
        </label>
        <select className={styles.select} name="visibility" id="visibility">
          <option value="PUBLIC">Public</option>
          <option value="PRIVATE">Private</option>
        </select>
      </div>

      <div>
        <HoverButton>Create Paste</HoverButton>
      </div>
    </form>
  );
};

export default PasteForm;
