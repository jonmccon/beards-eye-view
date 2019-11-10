import React from 'react';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import WorksSection from '../components/WorksSection';

const IndexPage = () => (
  <Layout>
    <AboutSection />
    <WorksSection variant="dark" />
  </Layout>
);

export default IndexPage;
