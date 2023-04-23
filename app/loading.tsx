import Image from "next/image";

import spinner from "../public/images/spinner.svg";

export default function Loading() {
  return (
    <div className="container">
      <Image src={spinner} />
      <h1>Loading...</h1>
      <p>The page is currently being fetched, please be patient</p>
    </div>
  );
}
