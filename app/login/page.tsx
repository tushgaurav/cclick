import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="container">
      <div className="center">
        <SignIn />
      </div>
    </div>
  );
}
