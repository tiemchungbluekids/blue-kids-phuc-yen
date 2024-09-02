import Banner from "@/components/Banner";
import FullHeadSEO from "@/components/FullHeadSEO";
import { getHomePage } from "@/lib/wordpress/api";
import { Page } from "@/types/types";


export default async function Home() {
  const pageData: Page | null = await getHomePage();
  return (
    <>
      {pageData && < FullHeadSEO seo={pageData.seo} />}

      <Banner />
    </>
  );
}