"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";
import styles from "@/styles/shortlink.module.css";

const ClipboardButton = ({ text }) => {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button onClick={copy} className={styles.copy_btn}>
      <FontAwesomeIcon icon={faCopy} className={styles.copy_icon} />
      {copied ? "Copied!" : ""}
    </button>
  );
};

export default ClipboardButton;
