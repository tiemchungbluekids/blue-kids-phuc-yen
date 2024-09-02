import Banner from "@/components/Banner";
import FullHeadSEO from "@/components/FullHeadSEO";
import { getPageBySlug } from "@/lib/wordpress/api";
import { Page } from "@/types/types";


export default async function Home() {
  const pageData: Page | null = await getPageBySlug("/");
  return (
    <>
      {pageData && < FullHeadSEO seo={pageData.seo} />}

      <Banner />
    </>
  );
}