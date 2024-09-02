// components/FullHeadSEO.tsx

import parse from "html-react-parser";

interface FullHeadSEOProps {
  seo?: {
    fullHead?: string;
  };
}

const FullHeadSEO: React.FC<FullHeadSEOProps> = ({ seo }) => {
  if (!seo || !seo.fullHead) return null; // Không render nếu không có dữ liệu SEO

  return <>{parse(seo.fullHead)}</>;
};

export default FullHeadSEO;