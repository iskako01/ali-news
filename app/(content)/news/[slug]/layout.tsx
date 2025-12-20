export default function NewsDetailsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
