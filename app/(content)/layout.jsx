import MainHeader from "@/components/main-header/main-header";

export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
};

export default function ContentLayout({ children }) {
  return (
    <div className="page">
      <MainHeader />
      {children}
    </div>
  );
}
