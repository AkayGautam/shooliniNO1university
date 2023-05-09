import React, { Suspense } from "react";
import HeaderTwo from '@/components/HeaderTwo'
import Head from "next/head";
import Styles from "../css/international-students";
import Footer from "@/components/Footer";
import BreadcrumbBox from "@/components/common/Breadcrumb";

const Globalfootprint = () => {
  return (
    <>
    
    <Suspense>
        <Head>
          <title>International Students Program | Shoolini University</title>
          <meta
            name="description"
            content="" />
          <meta name="keywords" content="" />
        </Head>

        <HeaderTwo />
        <BreadcrumbBox title="Global Footprint" />

        <Styles>

    <section classNAme="Introd">
        <div className="container">
            <div className="row">
                <div className="introText">
                    <p>Shoolini University has received numerous accolades and awards for its academic programs, research initiatives, and entrepreneurial spirit. As a result, it has established collaborations with leading universities and organisations worldwide. With a global outlook and interdisciplinary approach, we are a hub of innovation and knowledge creation, making significant contributions to the development of society and the world at large.   </p>
                </div>
            </div>
        </div>
        </section>


            </Styles>

            <Footer />
            </Suspense>
    
    </>
  )
}

export default Globalfootprint