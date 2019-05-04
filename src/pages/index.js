import React from "react"
import styles from './index.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.block}>
      <div className={styles.darkGrey}>
        <div className={styles.black}>
          <p>Author name</p>
          <p>The best way to wireframe a website</p>
          <p>Read More</p>
        </div>
      </div>
        <div className={styles.white}>
          <h2>Keys to writing copy that actually converts and sells users</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
          <p>Read More</p>
        </div>
        <div className={styles.white}>
          <h2>Keys to writing copy that actually converts and sells users</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
          <p>Read More</p>
        </div>
    </div>
  </Layout>
)

export default IndexPage
