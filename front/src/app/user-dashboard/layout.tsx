import DashboardSidebar from "@/components/sidebar";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="flex flex-row h-auto w-full overflow-hidden bg-gray-100
     "
    >
      <DashboardSidebar />
      <main className="h-full w-full pl-10 pt-10">{children}</main>
    </div>
  );
}

export default DashboardLayout;
