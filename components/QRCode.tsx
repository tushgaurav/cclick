"use client";

import { useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import options from "../public/misc/qr_options.js";

const QRCode = () => {
  const pathname = usePathname();

  const ref = useRef(null);

  useEffect(() => {
    // Dynamically import qr-code-styling only client-side
    if (typeof window !== "undefined") {
      import("qr-code-styling").then(({ default: QRCodeStyling }) => {
        const qrCode = new QRCodeStyling({
          ...options,
          data: "https://www.cclick.click/" + pathname,
        });

        qrCode.append(ref.current);
      });
    }
  }, []);

  return (
    <div>
      <div ref={ref} id="qr-code"></div>
    </div>
  );
};

export default QRCode;
