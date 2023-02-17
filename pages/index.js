import Layout, { siteTitle } from "../components/layout";

import Head from "next/head";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam,
          odit porro, optio eaque alias consequatur ut deleniti cumque ex
          laborum, blanditiis inventore voluptatum eligendi nam cupiditate
          perspiciatis autem totam!
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
