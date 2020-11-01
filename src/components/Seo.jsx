import React from "react";
import { Helmet } from "react-helmet";

const Seo = ({ title, desc }) => {
  const shortTitle = (title, maxLength = 50) => {
    if (title.length <= maxLength) return title;
    return title.substr(0, title.lastIndexOf(" ", maxLength));
  };

  return (
    <>
      {title && (
        <Helmet>
          <title>{`${shortTitle(title)} - Suchary.js.org`}</title>
          <meta property="og:title" content={`${title} - Suchary.js.org`} />
        </Helmet>
      )}
      {desc && (
        <Helmet>
          <meta name="description" content={desc} />
          <meta property="og:description" content={desc} />
        </Helmet>
      )}
    </>
  );
};

export default Seo;
