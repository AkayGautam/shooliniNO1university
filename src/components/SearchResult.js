import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Styles } from './common/styles/search'
import Footer from './Footer'
import SearchResearcher from './SearchResearcher'
import Link from 'next/link'
import axios from 'axios'
import BreadcrumbBox from './common/Breadcrumb'
import { Container, Row, Col, Form } from 'react-bootstrap'

const BaseURL = process.env.REACT_APP_BASE_URI

const SearchResult = ({ result, query }) => {

  // const [searchResults, setSearchResults] = useState([])
  // const [searchTerm, setSearchTerm] = useState(null)

  // const [searchPages, setSearchPages] = useState(null)
  // const [searchPageResults, setSearchPageResults] = useState([])

  // const searchHandler = async (e) => {
  //   if (e) e.preventDefault()
  //   if (!searchTerm) return
  //   let { data } = await axios.post(
  //     `https://shooliniuniversity.com/media/SearchAPI`,
  //     {
  //       auth: 'shoolini@999',
  //       keywords: searchTerm,
  //     },
  //   )
  //   setSearchResults([data.success, searchTerm])
  // }

  // const searchPage = async (e) => {
  //   if (e) e.preventDefault()
  //   // setSearchResults([]);
  //   if (!searchPages) return
  //   let { data } = await axios.post(
  //     `https://shooliniuniversity.com/media/SearchAPI`,
  //     {
  //       auth: 'shoolini@999',
  //       keywords: searchPages,
  //     },
  //   )
  //   setSearchPageResults([data.success, searchPages])
  // }


 
  
  return (
    <>
      <Styles>
        <Header />
        <section
          className="breadcrumb-area" 
          style={{
            backgroundImage: `url(/assets/images/breadcrumb-bg.jpg)`,
          }}
          >   
          <Container>
            <Row>
              <Col md="12" className="text-center">
                <div className="breadcrumb-box mt-5">
                  <h1 className="breadcrumb-title"> {query} </h1>
                </div>
              </Col>
            </Row> 
          </Container>
        </section>
        <Container className="p-3">
          <div className="row searchedCourse mainContent">
            <div className="col-md-8 pt-2">
              <div className="py-2">
                <div class="section-title">
                  <h4> Search Results for </h4>
                  <h3>{query}</h3>
                </div>
              </div>
              <div className="py-2">
                <div className="row">
                  {result.map((i, idx) => {
                    return (
                      <div className="col-md-6" key={idx}>
                        <div className="cuCourse">
                          <Link className="detailView" href={`/${i.url}`}>
                           
                              <div>
                                <h3> {i.title} </h3>
                                <p>{i.excerpt}</p>
                              </div>
                           
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <Col className="mt-md-4 pt-2" md="4">
              <div className="sidebar-content pt-md-2">
                <SearchResearcher />

              
              </div>
            </Col>
          </div>
        </Container>
        <Footer />
      </Styles>
    </>
  )
}

export default SearchResult
