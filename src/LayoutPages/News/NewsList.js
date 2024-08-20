import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import BreadcrumbBox from '../../components/common/Breadcrumb'
import { Styles } from '../../components/common/styles/header'
import Footer from '../../components/Footer'
import { Styless } from './style/news'
import { Row, Col, Card } from 'react-bootstrap'
import SearchResearcher from '../../components/SearchResearcher'
import Link from 'next/link'

const NewsListTemplate = ({ data }) => {
  const [news, setNews] = useState({})
  const [Data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    return () => { 
      document.title = `Shoolini University`
    }
  }, [])

  const dateFormat = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric' }
    var today = new Date(date)
    return today.toLocaleDateString('en-US', options)
  }

  const removeHTML = (str) => {
    var tmp = document.createElement('p')
    tmp.innerHTML = str
    return tmp.textContent || tmp.innerText || ''
  }
  
  useEffect(() => {
    var s=document.createElement("script"); s.type="text/javascript"; s.async=true; s.src="https://widgets.nopaperforms.com/emwgts.js"; document.body.appendChild(s); 
  })

  const employees = [
    {id: 4, name: 'Dean', country: 'Denmark'},
    {id: 3, name: 'Carl', country: 'Canada'},
    {id: 2, name: 'Bob', country: 'Belgium'},
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 5, name: 'Ethan', country: 'Egypt'},
  ];
  
   // 👇️ sort by String property ASCENDING (A - Z)
   const strAscending = [...data].sort((a, b) =>
   a.name > b.name ? 1 : -1,
 );
 console.log(strAscending);

 const cleanString = (str) => { 
  if (str === null || str === undefined) {
      return ''; 
  }
  return str.replace(/[-0-9]|\.png|\.jpg/g, ' ');   
};
  
  return (
    <>
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <BreadcrumbBox title="News" />
          <Styless>
            <section className="admidsionProcess my-5 pt-3 ">
              <div className="about__area about__area_one p-relative pt---100 pb---120 mb-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8">
                      <div className="section-title olList titleAdjust tables">
                        {/* <h4>About Us</h4> */}

                        {!data ? (
                          <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                              <span className="sr-only">Loading...</span>
                            </div>
                            <span>Loading...</span>
                          </div>
                        ) : (
                          <>
                            <Row>
                              {strAscending?.map((item, index) => {
                                 return (
                                   <Col
                                    md={6}
                                    sm={12}
                                    className="mb-3 newsSection"
                                    key={index}
                                  >
                                    <Link href={`/news/${item.slug}`}>
                                      <Card>
                                          <div className="newsImg">
                                            <Card.Img
                                              variant="top" alt={cleanString(item?.alt)}
                                              src={`https://shooliniuniversity.com/media/${item.avatar}`}
                                            />
                                           </div>
                                          <Card.Body>
                                            <Card.Title>
                                              {item.title}
                                            </Card.Title>
                                           <Card.Text>
                                            { removeHTML(item?.content) } 
                                            </Card.Text>
                                          </Card.Body>
                                        </Card>
                                    
                                    </Link>
                                  </Col>
                                )
                              })}
                            </Row>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="sidebar-content nnn">
                        <SearchResearcher />
                      </div>

                      <div className="sideBarNew">
                      <div className="enqForm course-search">
                          <h5 className="formName"> Admissions Open: 2024 </h5>
                          <div className="npf_wgts" data-height="400px" data-w="1222078993f709a639ec1d6ca2d2d084"></div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Styless>

          <Footer />
        </div>
      </Styles>
    </>
  )
}

export default NewsListTemplate
