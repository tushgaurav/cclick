import Image from "next/image";
import not_found from "../public/images/not_found.png";
import Section from "./Section";

export default function PasteNotFound() {
  const styles = {
    height: "60vh",
  };

  return (
    <div style={styles} className="container">
      <main>
        <div className="main-content">
          <h1>Paste Not Found</h1>
          <p>This paste may be deleted.</p>
        </div>
        <Image src={not_found} alt="paste not found" />
      </main>
    </div>
  );
}
