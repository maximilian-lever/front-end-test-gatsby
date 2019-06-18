import React from "react"
import styles from './blog.module.scss'
import Layout from "../components/layout"
import SEO from "../components/seo"
import image from "../components/img/test-pattern-152459_960_720.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className={styles.block}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>Latest and greatest happenings</h1>
          <div className={styles.post}>
            <img alt="Post picture" src={image}/>
            <p>Announcements</p>
            <h2>Wayin And WIREWAX Announce Partnership To Incorporate Data Collecting 
              Experiences Into Interactive Videos</h2>
            <p>Wayin and WIREWAX partner to empower enterprise brands to create 
              highly-engaging, interactive videos that collect zero-party data across 
              all digital channels</p>
            <button>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
