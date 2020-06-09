import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "../styles.module.css";

function SimplifiedIntegration() {
  return (
    <Layout title="Simplify Integration">
      <div className="container container--fluid">
        <div className={classnames("row mt-12", styles.justifyContentCenter)}>
          <div className="col col--9">
            <p className="font_large">
              Simplify your integration of third-party data
            </p>
            <div className={classnames("row mt-4", styles.spaceEvenly)}>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration"
                >
                  Impact
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-how-it-works"
                >
                  How it works
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-features"
                >
                  Features
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium_bold text--black"
                  to="simplified-integration-success"
                >
                  Success stories
                </Link>
              </div>
              <div className={styles.buttons_tab}>
                <Link
                  className="font_medium text--black"
                  to="simplified-integration-details"
                >
                  More details
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
    title: <>Australian Agtech</>,
    imageUrl: "img/share_data_pick.png",
    description: (
      <>
        A leading Australian agtech uses Amphora Data to access new data
        sources. They use Amphora Data to get satellite imagery, soil maps,
        electricity forecasts is used in their farmer facing software.
      </>
    ),
  },
  {
    title: <>Eliiza Data Science Consultancy</>,
    imageUrl: "img/share_data_pick.png",
    description: (
      <>
        Eliiza, a leading data science consultancy in Melbourne, uses Amphora
        Data to find new datasets to develop new prediction tools for
        electricity prices and river flows.
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
    </div>
  );
}

export default SimplifiedIntegration;
