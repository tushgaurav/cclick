import Image from "next/image";
import checkmark from "../public/images/checkmark.png";

const styles = {
  checkmark: {
    display: "inline",
  },
};

export default function Checkmark() {
  return (
    <Image
      src={checkmark}
      style={styles.checkmark}
      alt="checkmark"
      width={20}
      height={20}
    />
  );
}
