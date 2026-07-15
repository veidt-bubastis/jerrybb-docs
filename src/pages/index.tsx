import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home(): ReactNode {
  return (
    <Layout
      title="JerryBB Support"
      description="Customer documentation for JerryBB.">
      <main className="container margin-vert--lg">
        <div className="hero hero--primary padding-vert--xl">
          <div className="container text--center">
            <h1>JerryBB Support</h1>
            <p>Understand the data. Prepare with confidence.</p>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Start with Getting Started
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
