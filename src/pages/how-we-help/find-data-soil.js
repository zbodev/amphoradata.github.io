import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function FindData() {
  return (
    <Layout title="Data Catalogue">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">
              You can get the insights you need in 30 seconds
            </p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link className="font_medium text--black" to="find-data">
                  Vegetation
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-weather"
                >
                  Weather
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link className="font_medium text--black" to="find-data-water">
                  Water
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="find-data-soil"
                >
                  Soil
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="find-data-economic"
                >
                  Economic
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link className="font_medium text--black" to="find-data-other">
                  Other
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={classnames("row", styles.justifyContentCenter)}>
          <div className="col col--9">
            <hr
              style={{
                borderWidth: "0.5px",
              }}
            />
          </div>
        </div>

        <div>
          {features && features.length && (
            <section className={styles.features}>
              <div className="container">
                <div>
                  {features.map((props, idx) => (
                    <Feature key={idx} {...props} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </Layout>
  );
}

const features = [
  {
    title: <>Static composition</>,
    imageUrl: "img/26_Kings_rd_NDVI_180220.png",
    description: (
      <>
        Estimated soil composition up to 2 meters for any location in Australia.
        Resolution is 90 m. 1000s of locations available for free, more
        available upon request.
      </>
    ),
  },
  {
    title: <>Real-time moisture</>,
    imageUrl: "img/Forest_image.PNG",
    description: (
      <>
        Remote sensing of soil moisture in surface layer with 1 week delay.
        Resolution is 30m Any global location available for free on request.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={classnames("row", styles.feature)}
      style={{ paddingBottom: "30px" }}
    >
      {imgUrl && (
        <div
          className="text--center"
          style={{ paddingLeft: "60px", paddingRight: "60px" }}
        >
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <div style={{ paddingRight: "60px", width: "600px" }}>
        <h3 className="font_large">{title}</h3>
        <p className="font_medium">{description}</p>
      </div>
      <div className={styles.buttons}>
        <Link
          className="font_medium text--white"
          to={useBaseUrl("https://identity.amphoradata.com/Account/Register")}
        >
          Get data
        </Link>
      </div>
    </div>
  );
}

export default FindData;
