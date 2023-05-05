"use client";

// QR Code Component v0.1 by cclick (https://cclick.click)
// // //
// Supply a qrdata prop to the component to generate a QR code
// If no qrdata prop is supplied, the component will generate a QR code for the current page

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "@/styles/qrcode.module.css";
import options from "../public/misc/qr_options.js";

const QRCode = (props) => {
  const pathname = usePathname();
  let data = props.qrdata;

  if (props.qrdata == "") {
    data = "https://www.cclick.click/" + pathname;
  }

  const ref = useRef(null);

  const qrToggle = () => {
    const qrCode = document.getElementById("qr-code");
    qrCode?.classList.toggle(styles.qr_code_active);
  };

  useEffect(() => {
    // Dynamically import qr-code-styling only client-side
    if (typeof window !== "undefined") {
      import("qr-code-styling").then(({ default: QRCodeStyling }) => {
        const qrCode = new QRCodeStyling({
          ...options,
          data: data,
        });

        qrCode.append(ref.current);
      });
    }
  }, []);

  return (
    <div className={styles.qr_code}>
      <h2 className={styles.qr_code_title}>
        QR Code
        <span className={styles.show_qr} onClick={qrToggle}>
          {" "}
          &#x21ba;
        </span>
      </h2>
      <div ref={ref} id="qr-code" className={styles.qr_code_hidden}></div>
    </div>
  );
};

export default QRCode;
