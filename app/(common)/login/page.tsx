import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="container clerk-login">
      <div className="center">
        <SignIn />
      </div>
    </div>
  );
}
