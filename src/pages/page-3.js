import React from 'react'
import { graphql, StaticQuery ,Link } from 'gatsby'
import Layout from '../components/layout'

const getImageData = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
          size
          extension
          birthTime
        }
      }
    }
  }
`

export default () => (
  <Layout>
    <div>
      <h1>Hello from Page 3</h1>
      <h3>Image File Data</h3>
      <StaticQuery
        query={getImageData}
        render={data => (
          <table>
            <thead>
              <tr>
                <th>Relative Path</th>
                <th>Size of Image</th>
                <th>Extention</th>
                <th>Birthtime</th>
              </tr>
            </thead>
            <tbody>
              {data.allFile.edges.map((edge, index) => (
                <tr key={index}>
                  <td>{edge.node.relativePath}</td>
                  <td>{edge.node.size}</td>
                  <td>{edge.node.extension}</td>
                  <td>{edge.node.birthTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      />
      <Link to="/page-2">Go to Page 2</Link>
    </div>
  </Layout>
)