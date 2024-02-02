import Sidebar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex font-mono text-gray-300">
      <Sidebar />
      {children}
    </div>
  );
}
