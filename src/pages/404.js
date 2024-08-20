import React, { useEffect, useState } from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card as Cards,
  Button,
  Table,
} from 'react-bootstrap'

import Link from "next/link";

const BASE_URI = 'https://shooliniuniversity.com'

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0) 
    return () => {}
  }, [])

  useEffect(() => {
    document.title = `404 | Shoolini University`

    return () => {
      document.title = 'Shoolini University'
    }
  })

  return (
    <div className="main-wrapper course-details-page">
      {/* Header 2 */}
    <Header />
      {/* Breadcroumb */}
    <div className="body404"> 
      <main>
      
  <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
  <h2>Error: 404 page not found</h2>
  <p>Sorry, the page you're looking for cannot be accessed</p>

    <Link className="backHome" href={BASE_URI}> Go Back to Home </Link>


</main>
</div>  

  
    </div>
  )
}

export default NotFound
