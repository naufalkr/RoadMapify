import Navbar from "../navbar";
import ClassNavbar from "../navbar";

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      {children}
    </section>
  );
}
