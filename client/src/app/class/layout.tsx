import ClassNavbar from "./navbar";

export default function ClassLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
