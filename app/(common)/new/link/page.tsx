import LinkForm from "@/components/LinkForm";
import ShortLink from "@/components/ShortLink";

export const metadata = {
  title: "Shorten Links | cclick",
  opengraph: {
    title: "Shorten Links on cclick",
  },
};

export default function CreateLink() {
  return (
    <div className="container">
      <LinkForm />
    </div>
  );
}
