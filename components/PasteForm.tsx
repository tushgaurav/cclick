"use client";
import { useState } from "react";

export default function PasteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <form>
      <label>
        Title:
        <input
          name="name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label>
        Content:
        <textarea
          name="content"
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
    </form>
  );
}
