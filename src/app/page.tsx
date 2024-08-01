import Home from "./(home)";
import generateMetadata from "@/lib/metadata";

export const metadata = generateMetadata(
  { title: "Home" },
  { withSuffix: true }
);

export default function HomePage() {
  return <Home />;
}
