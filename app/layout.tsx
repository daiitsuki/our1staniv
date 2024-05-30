import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/reset.css";
import "../styles/global.css";

export const metadata = {
  title: "우리의 1년 돌아보기",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          <div className="children">{children} </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
