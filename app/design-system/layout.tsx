export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="w-2/3 lg:w-full mx-auto">{children}</div>;
}
