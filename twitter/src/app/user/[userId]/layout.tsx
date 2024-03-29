import Navbar from "./components/navbar/Navbar";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className=" bg-red-100 p-4 lg:px-8">
            <Navbar />
            {children}
        </main>
    );
  }