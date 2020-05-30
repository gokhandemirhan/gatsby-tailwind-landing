import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Content1 from "../components/content-1";
import Content2 from "../components/content-2";
import Content3 from "../components/content-3";
import Content4 from "../components/content-4";

import Divider from '../components/divider'
import Divider2 from '../components/divider2'

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero />
      
    <Divider />
      <Content1 />
      <Divider2 />
      <Content3 />
      <Content2 />
      <Content4 />
    </Layout>
  );
}

export default IndexPage;
