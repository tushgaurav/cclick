"use client";

import styles from "../styles/pasteform.module.css";
import { useRouter } from "next/navigation";
import HoverButton from "./HoverButton";

const PasteForm = (userId: string) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const post = {
      title: e.target.title.value,
      content: e.target.content.value,
      slug: e.target.slug.value,
      anonymous: e.target.anonymous.value,
      visibility: e.target.visibility.value,
      ownerId: userId.userId,
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

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label className={styles.label} htmlFor="first">
          Paste Title
        </label>
        <input type="text" id="title" name="title" />
      </div>

      <div>
        <label className={styles.label} htmlFor="content">
          Content
        </label>
        <input type="text" id="content" name="content" required />
      </div>

      <div>
        <label className={styles.label} htmlFor="slug">
          Slug
        </label>
        <input type="text" id="slug" name="slug" />
      </div>

      <div>
        <label className={styles.label} htmlFor="anonymous">
          Anonomulsy
        </label>
        <input type="checkbox" name="anonymous" id="anonymous" value="true" />
      </div>

      <div>
        <label className={styles.label} htmlFor="visibility">
          Visibility
        </label>
        <select name="visibility" id="visibility">
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
