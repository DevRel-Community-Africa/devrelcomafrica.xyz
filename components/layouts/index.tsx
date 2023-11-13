import Head from "next/head";
import Header from "./Header";
import Seo from "./Seo";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
};
export default function Layout({ children }: LayoutProps) {
  const seo = {
    title: "DevRelComAfrica",
    description:
      " A platform for fostering the relevance of developer relations across Africa one developer at a time",
    url: " https://devrelcomafrica.xyz/",
    image:
      "https://imgtr.ee/images/2023/08/01/c1cb76d6c930a59b4d024d6da1cf779b.png",
    ogType: "",
  };
  return (
    <>
      <Head>
        <Seo seo={seo} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
