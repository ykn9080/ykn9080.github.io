import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import Breadcrumb from "../components/BreadCrumb"
import Img from "gatsby-image"
import { wordCut } from "../utility"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useIntl } from "react-intl"

const WorkList = ({ data, location }) => {
  const intl = useIntl()
  const works = data.allMdx.nodes
  const list = works.map(work => {
    return { title: work.frontmatter.title, slug: work.frontmatter.slug }
  })

  return (
    <Layout>
      <Seo title="Work List" />
      <Breadcrumb location={location} />
      <div className="headtitle">
        <h3>{intl.formatMessage({ id: "work-head" })}</h3>
        <p> {intl.formatMessage({ id: "work-sub" })}</p>
      </div>
      <div className="bodycontent">
        {works.map(work => {
          return (
            <div className="ImgContainer ImgLarge">
              <Link
                to={`/works/${work.frontmatter.slug}`}
                key={work.title}
                state={{ list: list }}
              >
                <h4>{work.frontmatter.title}</h4>
                <div className="Img2div">
                  <Img
                    className="Img1"
                    fluid={work.frontmatter.thumb.childImageSharp.fluid}
                  />
                </div>
                <p title={work.frontmatter.excerpt}>
                  {wordCut(work.frontmatter.excerpt, 80, "", "...")}
                </p>
              </Link>
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
export const query = graphql`
  query hello($locale: String!) {
    allMdx(
      filter: {
        fields: { locale: { eq: $locale } }
        frontmatter: { type: { eq: "work" } }
      }
    ) {
      nodes {
        frontmatter {
          title
          demo
          videoTitle
          videoSourceURL
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          slug
          seq
          npmorg
          github
          excerpt
        }
      }
    }
  }
`

export default WorkList
