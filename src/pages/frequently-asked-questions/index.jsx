import React, { Component, Suspense, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Styless from "./style/vission-mission";
import Header from "../../components/Header";
import BreadcrumbBox from "../../components/common/Breadcrumb";
import { Styles } from "../../components/common/styles/header";
import Footer from "../../components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import SearchResearcher from "../../components/SearchResearcher";
import Head from "next/head";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { GetFaq, GetNavigationSchema, GetSiteLinkSchema } from "@/Api";
import Schema from "@/components/Schema";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faqs = (props) => {
  const [expanded, setExpanded] = React.useState("panel1");
  console.log(props);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  useEffect(() => {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://widgets.nopaperforms.com/emwgts.js";
    document.body.appendChild(s);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schemaData = 
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the eligibility criteria for admission to Shoolini University?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Most courses at Shoolini University follow eligibility according to HP-PERC. For Undergraduate Programs, we accept 55% marks, plus interview. For professional programs, we accept the results of a relevant national entrance test, while for Postgraduate Programs, we require 60% marks plus interview. However, eligibility for specific programs must be checked on their respective pages."
    }
  },{
    "@type": "Question",
    "name": "Is Shoolini University UGC approved? Which programs are approved under UGC?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University was established by an Act of the Government of Himachal Pradesh in 2009 and is recognised and approved by the University Grants Commission (F No. 8-1/2010(CCP)-1/PU), dated 7.2.2011)."
    }
  },{
    "@type": "Question",
    "name": "What is your NAAC accreditation?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University has received accreditation from the National Assessment and Accreditation Council (NAAC), which is an autonomous body established by the University Grants Commission (UGC)."
    }
  },{
    "@type": "Question",
    "name": "Is Shoolini University a Deemed University?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University is a full-fledged State Private University set up under the HP Private Universities Act."
    }
  },{
    "@type": "Question",
    "name": "Is Shoolini University recognised by AICTE?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Any University which is approved by UGC does not require the approval of AICTE for their technical courses as stated by the honourable Supreme Court. Our Pharmacy courses are approved by PCI and our law programs are approved by the BCI."
    }
  },{
    "@type": "Question",
    "name": "Do you have entrance exams?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Entrance examinations will be required based on the course you are applying for. Some courses have exams, others have interviews, and some have regulatory requirements. Which course are you joining? Find your choice of course here ."
    }
  },{
    "@type": "Question",
    "name": "What is the duration of the entrance exam?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "A Shoolini Entrance exam is usually of 45 minutes duration. It is a multiple-choice question-based exam, which is taken online."
    }
  },{
    "@type": "Question",
    "name": "How much is the application fee?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our Application Fee is Rs 1,750 for domestic students and USD 50 for International students. Reach out to the Shoolini University’s Accounts Helpline 01792-352002 for fee-related queries."
    }
  },{
    "@type": "Question",
    "name": "What is the admission fee for courses at Shoolini University?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Semester Fee for Shoolini University depends on the course you take. You will find that on the specific course page."
    }
  },{
    "@type": "Question",
    "name": "Is there any provision to pay fee in instalments?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "For the convenience of students, the fee is paid in two instalments per year."
    }
  },{
    "@type": "Question",
    "name": "Can I apply online?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini’s entire application process is online. Once you register, we provide a registration number that stays with you throughout the duration of the admission process as well as once you join."
    }
  },{
    "@type": "Question",
    "name": "Who can I contact if I am facing problems with the form?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Once you register on the form, you will be assigned to a counsellor. You can easily reach out to them for help with filling up the form. Alternatively, you can call our admission helpline: 7018007000"
    }
  },{
    "@type": "Question",
    "name": "How can I check my admission status?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Each student who registers through our application form can easily access the status of their application by logging in with the credentials provided. Alternatively, you can call our admission helpline: 7018007000"
    }
  },{
    "@type": "Question",
    "name": "Will there be a waiting list?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, most of our courses tend to stay in demand and have a waiting list. Hence, we encourage students to apply on time to find a seat in the course of their choice."
    }
  },{
    "@type": "Question",
    "name": "What are the documents required to be submitted along with the application form?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Students have to file past education records, proof of birth and other identification details at the time of registration."
    }
  },{
    "@type": "Question",
    "name": "Does Shoolini University offer scholarships?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Shoolini University offers several scholarships to deserving students. You may check out our list of available scholarships while filling out the form online. The value of the scholarship ranges from 10%-100% of the tuition fee waiver on a case-to-case basis. However, applications for scholarships are high; hence the final decision rests with the Scholarship Committee."
    }
  },{
    "@type": "Question",
    "name": "Does Shoolini University offer exchange opportunities to students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University has developed strong academic bonds with more than 250+ higher institutions of learning in 28+ countries. Through such collaborations, our professors and students can get a better educational experience and a more global outlook."
    }
  },{
    "@type": "Question",
    "name": "Are internships available for students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. We have functional MoUs with several institutions and industries in India and abroad. Together, we engage in student and faculty exchange for internships, on-the-job training, project work, and collaborative research."
    }
  },{
    "@type": "Question",
    "name": "Does Shoolini University have a Placement Cell?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes. The University has a well-established Placement Cell which looks after all activities related to internships, career development, training and final placement of students. Our ‘Mission 130’ aims at 100% placements with 30% exceptional opportunities."
    }
  },{
    "@type": "Question",
    "name": "What is the Ranking of Shoolini University in India?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University is the No.1 Private University in India (Times Higher Education World University Rankings 2023) and the No.1 Research University (QS Asia University Rankings 2023). In NIRF 2022, we are ranked No.96 among all universities, No.36 in Pharmacy, No.125 in Engineering and 102-125 in Management among all Universities & Institutes. We are NAAC accredited (top 15% in India)."
    }
  },{
    "@type": "Question",
    "name": "How is Shoolini University ranked globally?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Since its inception in 2009, Shoolini University has received several global ranks, including No.9th in Asia for Citations (QS Ranking), Diamond Rating for Engineering (QS Ranking), Outstanding Student Support (THE Asia Awards, 2020), and SCIMAGO Institutions Rankings 2022 -- 514th in world and 35th in India. Shoolini is a Top 200 Global University (THE Impact World University Rankings 2022)."
    }
  },{
    "@type": "Question",
    "name": "Where is the Shoolini University campus located?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "By road, we are located 1.5 hours from Chandigarh and 1.5 hours from Shimla. The campus is situated in Kasauli Hills, Solan, Himachal Pradesh."
    }
  },{
    "@type": "Question",
    "name": "How big is the Shoolini campus?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University sprawls across 25 acres of land. It has 1 million sq. ft. constructed area."
    }
  },{
    "@type": "Question",
    "name": "Is hostel facility available for students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, Shoolini hostels are run by the international student housing company, Good Host Spaces. Every year, 3000-odd students stay on campus. There are separate hostels for boys and girls."
    }
  },{
    "@type": "Question",
    "name": "Does the campus have internet facilities?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, the campus has an extensive WiFi network with state-of-the-art technology backbone."
    }
  },{
    "@type": "Question",
    "name": "How many labs are available at Shoolini University?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini has 104+ labs and nine Centres of Excellence."
    }
  },{
    "@type": "Question",
    "name": "What are the medical facilities available to students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University has a well-equipped Medical Centre with support services like an ambulance and caretakers for routine care and 24x7 emergencies. We also have a tie-up with neighbouring MM Medical College & Hospital for critical cases"
    }
  },{
    "@type": "Question",
    "name": "Is NCC available for students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, you can join the National Cadet Corps (NCC) at Shoolini University and gear up to study the art of defence.  A number of extension and outreach programs have been conducted by the institution through NSS/NCC/Red Cross/YRC, etc.  (including Government-initiated programs such as Swachh Bharat, Aids Awareness, Gender Issue, etc., along with those organised in collaboration with the industry, community and NGOs)."
    }
  },{
    "@type": "Question",
    "name": "Are there any clubs that students can join?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, a range of activities are organised by the talented students of our clubs throughout the year. These Clubs are: Music Club: Raagrang, Theatre Club: Dramebaaz, Entrepreneurship Club: Samarthya, Painting Club: Satrangi Strokes, Photography Club: Shutterbug, Dance Club: Saksham, Adventure Club: Hiking and Trekking Club, Cooking Club: Baawle Bawarchi, and more."
    }
  },{
    "@type": "Question",
    "name": "What is your policy on ragging?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Shoolini University is committed to providing a culture of ragging-free campus environment and acting decisively against gender-based violence against women employees and students. To ensure quick redressal of complaints and curb the menace of ragging, committees are in place with stakeholders as members. These committees ensure timely action is taken for the redressal of all complaints. The Anti-Ragging Committee makes students aware of the adverse effects of ragging and deals strictly with all such occurrences."
    }
  },{
    "@type": "Question",
    "name": "Does Shoolini have a uniform for students?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "No, Shoolini students don’t have to wear a uniform. Students can dress up as they like. The only exceptions are students of Hotel Management and MBA courses, who are required to dress up formally. That is primarily because we want them to be job-ready when they graduate. Dressing up for the role is an integral part of the training."
    }
  },{
    "@type": "Question",
    "name": "Can I stay at a hostel at Shoolini University?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our modern hostels are run by an American MNC called Good Host Spaces. There are separate student residences for boys and girls for safety and security. You need to apply well in time to join the hostel because they are quickly occupied."
    }
  },{
    "@type": "Question",
    "name": "What are the hostel facilities available?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "WiFi, Hangout Zones, Common Rooms and Study Areas, Recreational areas with TV Room, Table Tennis, Chess, Carrom, etc. There is also a 200-seater Cineplex, caretakers for routine care/emergencies 24x7, Medical Centre with support services like ambulance, unisex salon, vending machines for snacks and refreshments (24x7)"
    }
  }]
};

  return (
    <Suspense
      fallback={
        <div className="loading">
          <div className="lds-dual-ring"></div>
        </div>
      }
    >
      <Head>
        <title>Frequently Asked Questions (FAQs) | Shoolini University</title>
        <meta
          name="description"
          content="Our Frequently Asked Questions (FAQs) make it easy for you to find answers to your most pressing inquiries. Find everything about Shoolini here!"
        />
        <meta
          name="keywords"
          content="FAQs, Frequently asked questions, Shoolini University, Shoolini FAQs, Application process, placements, scholarships, admissions 2023, Shoolini admissions, Student exchange programs, Shoolini courses, Shoolini rankings, no.1 provate university"
        />

<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

        
      </Head>
      {/* <Schema navigation={props.schema} faq={props.faq} /> */}
      <Styles>
        {/* Main Wrapper */}
        <div className="main-wrapper visionmission-page">
          {/* Header 2 */}
          <Header />

          {/* Breadcroumb */}
          <section className="faqs">
            <BreadcrumbBox title="Frequently Asked Questions" />
          </section>
          <Styless>
            <section className="about-us">
              <Container>
                <Row>
                  <Col md="8">
                    <div className="cuCourse">
                      <Row>
                        <Col md="12">
                          <div className="section-title">
                            <h2>Accreditations {"&"} Approvals </h2>
                          </div>
                          <div className="about-content">
                            <Accordion
                              expanded={expanded === "panel1"}
                              onChange={handleChange("panel1")}
                            >
                              <AccordionSummary
                                aria-controls="panel1d-content"
                                id="panel1d-header"
                              >
                                <Typography>
                                  What is the eligibility criteria for admission
                                  to Shoolini University?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Most courses at Shoolini University follow
                                  eligibility according to HP-PERC. For
                                  Undergraduate Programs, we accept 55% marks,
                                  plus interview. For professional programs, we
                                  accept the results of a relevant national
                                  entrance test, while for Postgraduate
                                  Programs, we require 60% marks plus interview.
                                  However, eligibility for specific programs
                                  must be checked on their respective pages.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion
                              expanded={expanded === "panel2"}
                              onChange={handleChange("panel2")}
                            >
                              <AccordionSummary
                                aria-controls="panel2d-content"
                                id="panel2d-header"
                              >
                                <Typography>
                                  Is Shoolini University UGC approved? Which
                                  programs are approved under UGC?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University was established by an Act
                                  of the Government of Himachal Pradesh in 2009
                                  and is recognised and approved by the
                                  University Grants Commission (F No.
                                  8-1/2010(CCP)-1/PU), dated 7.2.2011).
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                            <Accordion
                              expanded={expanded === "panel3"}
                              onChange={handleChange("panel3")}
                            >
                              <AccordionSummary
                                aria-controls="panel3d-content"
                                id="panel3d-header"
                              >
                                <Typography>
                                  What is your NAAC accreditation?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University has received accreditation
                                  from the National Assessment and Accreditation
                                  Council (NAAC), which is an autonomous body
                                  established by the University Grants
                                  Commission (UGC). <br />
                                  The University is accredited with NAAC B++
                                  grade.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel4"}
                              onChange={handleChange("panel4")}
                            >
                              <AccordionSummary
                                aria-controls="panel4d-content"
                                id="panel4d-header"
                              >
                                <Typography>
                                  Is Shoolini University a Deemed University?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University is a full-fledged State
                                  Private University set up under the HP Private
                                  Universities Act.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel5"}
                              onChange={handleChange("panel5")}
                            >
                              <AccordionSummary
                                aria-controls="panel5d-content"
                                id="panel5d-header"
                              >
                                <Typography>
                                  Is Shoolini University recognised by AICTE?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Any University which is approved by UGC does
                                  not require the approval of AICTE for their
                                  technical courses as stated by the honourable
                                  Supreme Court. Our Pharmacy courses are
                                  approved by PCI and our law programs are
                                  approved by the BCI.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>

                          <div className="section-title mt-4">
                            <h2>Admissions Procedure </h2>
                          </div>
                          <div className="about-content">
                            <Accordion
                              expanded={expanded === "panel6"}
                              onChange={handleChange("panel6")}
                            >
                              <AccordionSummary
                                aria-controls="panel6d-content"
                                id="panel6d-header"
                              >
                                <Typography>
                                  {" "}
                                  Do you have entrance exams?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Entrance examinations will be required based
                                  on the course you are applying for. Some
                                  courses have exams, others have interviews,
                                  and some have regulatory requirements. Which
                                  course are you joining? Find your choice of
                                  course{" "}
                                  <a
                                    href="https://admissions.shooliniuniversity.com/"
                                    target="_blank"
                                  >
                                    here{" "}
                                  </a>{" "}
                                  .
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel7"}
                              onChange={handleChange("panel7")}
                            >
                              <AccordionSummary
                                aria-controls="panel7d-content"
                                id="panel7d-header"
                              >
                                <Typography>
                                  {" "}
                                  What is the duration of the entrance exam?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  A Shoolini Entrance exam is usually of 45
                                  minutes duration. It is a multiple-choice
                                  question-based exam, which is taken online.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel8"}
                              onChange={handleChange("panel8")}
                            >
                              <AccordionSummary
                                aria-controls="panel8d-content"
                                id="panel8d-header"
                              >
                                <Typography>
                                  {" "}
                                  How much is the application fee?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Our Application Fee is Rs 1,750 for domestic
                                  students and USD 50 for International
                                  students. Reach out to the Shoolini
                                  University’s Accounts Helpline 01792-352002
                                  for fee-related queries.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel9"}
                              onChange={handleChange("panel9")}
                            >
                              <AccordionSummary
                                aria-controls="panel9d-content"
                                id="panel9d-header"
                              >
                                <Typography>
                                  {" "}
                                  What is the admission fee for courses at
                                  Shoolini University?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  The Semester Fee for Shoolini University
                                  depends on the course you take. You will find
                                  that on the specific course page.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel10"}
                              onChange={handleChange("panel10")}
                            >
                              <AccordionSummary
                                aria-controls="panel10d-content"
                                id="panel10d-header"
                              >
                                <Typography>
                                  {" "}
                                  Is there any provision to pay fee in
                                  instalments?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  For the convenience of students, the fee is
                                  paid in two instalments per year.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel11"}
                              onChange={handleChange("panel11")}
                            >
                              <AccordionSummary
                                aria-controls="panel11d-content"
                                id="panel11d-header"
                              >
                                <Typography> Can I apply online? </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini’s entire application process is
                                  online. Once you register, we provide a
                                  registration number that stays with you
                                  throughout the duration of the admission
                                  process as well as once you join. <br />
                                  It is a seamless process, and you can{" "}
                                  <a
                                    href="https://admissions.shooliniuniversity.com/"
                                    target="_blank"
                                  >
                                    {" "}
                                    apply online here
                                  </a>
                                  .
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel12"}
                              onChange={handleChange("panel12")}
                            >
                              <AccordionSummary
                                aria-controls="panel12d-content"
                                id="panel12d-header"
                              >
                                <Typography>
                                  {" "}
                                  Who can I contact if I am facing problems with
                                  the form?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Once you register on the form, you will be
                                  assigned to a counsellor. You can easily reach
                                  out to them for help with filling up the form.
                                  Alternatively, you can call our admission
                                  helpline: 7018007000
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel13"}
                              onChange={handleChange("panel13")}
                            >
                              <AccordionSummary
                                aria-controls="panel13d-content"
                                id="panel13d-header"
                              >
                                <Typography>
                                  {" "}
                                  How can I check my admission status?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Each student who registers through our
                                  application form can easily access the status
                                  of their application by logging in with the
                                  credentials provided. Alternatively, you can
                                  call our admission helpline: 7018007000
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel14"}
                              onChange={handleChange("panel14")}
                            >
                              <AccordionSummary
                                aria-controls="panel14d-content"
                                id="panel14d-header"
                              >
                                <Typography>
                                  {" "}
                                  Will there be a waiting list?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, most of our courses tend to stay in
                                  demand and have a waiting list. Hence, we
                                  encourage students to apply on time to find a
                                  seat in the course of their choice.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel15"}
                              onChange={handleChange("panel15")}
                            >
                              <AccordionSummary
                                aria-controls="panel15d-content"
                                id="panel15d-header"
                              >
                                <Typography>
                                  {" "}
                                  What are the documents required to be
                                  submitted along with the application form?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Students have to file past education records,
                                  proof of birth and other identification
                                  details at the time of registration.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel16"}
                              onChange={handleChange("panel16")}
                            >
                              <AccordionSummary
                                aria-controls="panel16d-content"
                                id="panel16d-header"
                              >
                                <Typography>
                                  {" "}
                                  Does Shoolini University offer scholarships?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, Shoolini University offers several
                                  scholarships to deserving students. You may
                                  check out our list of available scholarships
                                  while filling out the form online. The value
                                  of the scholarship ranges from 10%-100% of the
                                  tuition fee waiver on a case-to-case basis.
                                  However, applications for scholarships are
                                  high; hence the final decision rests with the
                                  Scholarship Committee.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>

                          <div className="section-title mt-4">
                            <h2> Student Opportunities </h2>
                          </div>
                          <div className="about-content">
                            <Accordion
                              expanded={expanded === "panel17"}
                              onChange={handleChange("panel17")}
                            >
                              <AccordionSummary
                                aria-controls="panel17d-content"
                                id="panel17d-header"
                              >
                                <Typography>
                                  {" "}
                                  Does Shoolini University offer exchange
                                  opportunities to students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University has developed strong
                                  academic bonds with more than 250+ higher
                                  institutions of learning in 28+ countries.
                                  Through such collaborations, our professors
                                  and students can get a better educational
                                  experience and a more global outlook.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel18"}
                              onChange={handleChange("panel18")}
                            >
                              <AccordionSummary
                                aria-controls="panel18d-content"
                                id="panel18d-header"
                              >
                                <Typography>
                                  {" "}
                                  Are internships available for students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes. We have functional MoUs with several
                                  institutions and industries in India and
                                  abroad. Together, we engage in student and
                                  faculty exchange for internships, on-the-job
                                  training, project work, and collaborative
                                  research.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel19"}
                              onChange={handleChange("panel19")}
                            >
                              <AccordionSummary
                                aria-controls="panel19d-content"
                                id="panel19d-header"
                              >
                                <Typography>
                                  {" "}
                                  Does Shoolini University have a Placement
                                  Cell?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes. The University has a well-established
                                  Placement Cell which looks after all
                                  activities related to internships, career
                                  development, training and final placement of
                                  students. Our ‘Mission 130’ aims at 100%
                                  placements with 30% exceptional opportunities.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel21"}
                              onChange={handleChange("panel21")}
                            >
                              <AccordionSummary
                                aria-controls="panel21d-content"
                                id="panel21d-header"
                              >
                                <Typography>
                                  {" "}
                                  What is the Ranking of Shoolini University in
                                  India?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University is the No.1 Private
                                  University in India (Times Higher Education
                                  World University Rankings 2023) and the No.1
                                  Research University (QS Asia University
                                  Rankings 2023). In NIRF 2022, we are ranked
                                  No.96 among all universities, No.36 in
                                  Pharmacy, No.125 in Engineering and 102-125 in
                                  Management among all Universities &
                                  Institutes. We are NAAC accredited (top 15% in
                                  India).
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel20"}
                              onChange={handleChange("panel20")}
                            >
                              <AccordionSummary
                                aria-controls="panel20d-content"
                                id="panel20d-header"
                              >
                                <Typography>
                                  {" "}
                                  How is Shoolini University ranked globally?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Since its inception in 2009, Shoolini
                                  University has received several global ranks,
                                  including No.9th in Asia for Citations (QS
                                  Ranking), Diamond Rating for Engineering (QS
                                  Ranking), Outstanding Student Support (THE
                                  Asia Awards, 2020), and SCIMAGO Institutions
                                  Rankings 2022 -- 514th in world and 35th in
                                  India. Shoolini is a Top 200 Global University
                                  (THE Impact World University Rankings 2022).
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                          <div className="section-title mt-4">
                            <h2>Infrastructure </h2>
                          </div>
                          <div className="about-content">
                            <Accordion
                              expanded={expanded === "panel22"}
                              onChange={handleChange("panel22")}
                            >
                              <AccordionSummary
                                aria-controls="panel22d-content"
                                id="panel22d-header"
                              >
                                <Typography>
                                  {" "}
                                  Where is the Shoolini University campus
                                  located?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  By road, we are located 1.5 hours from
                                  Chandigarh and 1.5 hours from Shimla. The
                                  campus is situated in Kasauli Hills, Solan,
                                  Himachal Pradesh.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel23"}
                              onChange={handleChange("panel23")}
                            >
                              <AccordionSummary
                                aria-controls="panel23d-content"
                                id="panel23d-header"
                              >
                                <Typography>
                                  {" "}
                                  How big is the Shoolini campus?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University sprawls across 25 acres of
                                  land. It has 1 million sq. ft. constructed
                                  area.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel24"}
                              onChange={handleChange("panel24")}
                            >
                              <AccordionSummary
                                aria-controls="panel22d-content"
                                id="panel22d-header"
                              >
                                <Typography>
                                  {" "}
                                  Is hostel facility available for students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, Shoolini hostels are run by the
                                  international student housing company, Good
                                  Host Spaces. Every year, 3000-odd students
                                  stay on campus. There are separate hostels for
                                  boys and girls.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel24"}
                              onChange={handleChange("panel24")}
                            >
                              <AccordionSummary
                                aria-controls="panel22d-content"
                                id="panel22d-header"
                              >
                                <Typography>
                                  {" "}
                                  Does the campus have internet facilities?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, the campus has an extensive WiFi network
                                  with state-of-the-art technology backbone.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel25"}
                              onChange={handleChange("panel25")}
                            >
                              <AccordionSummary
                                aria-controls="panel25d-content"
                                id="panel25d-header"
                              >
                                <Typography>
                                  {" "}
                                  How many labs are available at Shoolini
                                  University?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini has 104+ labs and nine Centres of
                                  Excellence.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel26"}
                              onChange={handleChange("panel26")}
                            >
                              <AccordionSummary
                                aria-controls="panel26d-content"
                                id="panel26d-header"
                              >
                                <Typography>
                                  {" "}
                                  What are the medical facilities available to
                                  students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University has a well-equipped
                                  Medical Centre with support services like an
                                  ambulance and caretakers for routine care and
                                  24x7 emergencies. We also have a tie-up with
                                  neighbouring MM Medical College {"&"} Hospital
                                  for critical cases.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>

                          <div className="section-title mt-4">
                            <h2> Campus Life </h2>
                          </div>
                          <div className="about-content">
                            <Accordion
                              expanded={expanded === "panel27"}
                              onChange={handleChange("panel27")}
                            >
                              <AccordionSummary
                                aria-controls="panel27d-content"
                                id="panel27d-header"
                              >
                                <Typography>
                                  {" "}
                                  Is NCC available for students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, you can join the National Cadet Corps
                                  (NCC) at Shoolini University and gear up to
                                  study the art of defence. <br />
                                  A number of extension and outreach programs
                                  have been conducted by the institution through
                                  NSS/NCC/Red Cross/YRC, etc. <br />
                                  (including Government-initiated programs such
                                  as Swachh Bharat, Aids Awareness, Gender
                                  Issue, etc., along with those organised in
                                  collaboration with the industry, community and
                                  NGOs).
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel28"}
                              onChange={handleChange("panel28")}
                            >
                              <AccordionSummary
                                aria-controls="panel28d-content"
                                id="panel28d-header"
                              >
                                <Typography>
                                  {" "}
                                  Are there any clubs that students can join?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Yes, a range of activities are organised by
                                  the talented students of our clubs throughout
                                  the year. These Clubs are: Music Club:
                                  Raagrang, Theatre Club: Dramebaaz,
                                  Entrepreneurship Club: Samarthya, Painting
                                  Club: Satrangi Strokes, Photography Club:
                                  Shutterbug, Dance Club: Saksham, Adventure
                                  Club: Hiking and Trekking Club, Cooking Club:
                                  Baawle Bawarchi, and more.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel29"}
                              onChange={handleChange("panel29")}
                            >
                              <AccordionSummary
                                aria-controls="panel29d-content"
                                id="panel29d-header"
                              >
                                <Typography>
                                  {" "}
                                  What is your policy on ragging?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Shoolini University is committed to providing
                                  a culture of ragging-free campus environment
                                  and acting decisively against gender-based
                                  violence against women employees and students.
                                  To ensure quick redressal of complaints and
                                  curb the menace of ragging, committees are in
                                  place with stakeholders as members. These
                                  committees ensure timely action is taken for
                                  the redressal of all complaints. The
                                  Anti-Ragging Committee makes students aware of
                                  the adverse effects of ragging and deals
                                  strictly with all such occurrences.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel30"}
                              onChange={handleChange("panel30")}
                            >
                              <AccordionSummary
                                aria-controls="panel30d-content"
                                id="panel30d-header"
                              >
                                <Typography>
                                  {" "}
                                  Does Shoolini have a uniform for students?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  No, Shoolini students don’t have to wear a
                                  uniform. Students can dress up as they like.
                                  The only exceptions are students of Hotel
                                  Management and MBA courses, who are required
                                  to dress up formally. That is primarily
                                  because we want them to be job-ready when they
                                  graduate. Dressing up for the role is an
                                  integral part of the training.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel31"}
                              onChange={handleChange("panel31")}
                            >
                              <AccordionSummary
                                aria-controls="panel31d-content"
                                id="panel31d-header"
                              >
                                <Typography>
                                  {" "}
                                  Can I stay at a hostel at Shoolini University?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  Our modern hostels are run by an American MNC
                                  called Good Host Spaces. There are separate
                                  student residences for boys and girls for
                                  safety and security. You need to apply well in
                                  time to join the hostel because they are
                                  quickly occupied.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>

                            <Accordion
                              expanded={expanded === "panel32"}
                              onChange={handleChange("panel32")}
                            >
                              <AccordionSummary
                                aria-controls="panel32d-content"
                                id="panel32d-header"
                              >
                                <Typography>
                                  {" "}
                                  What are the hostel facilities available?{" "}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography>
                                  WiFi, Hangout Zones, Common Rooms and Study
                                  Areas, Recreational areas with TV Room, Table
                                  Tennis, Chess, Carrom, etc. There is also a
                                  200-seater Cineplex, caretakers for routine
                                  care/emergencies 24x7, Medical Centre with
                                  support services like ambulance, unisex salon,
                                  vending machines for snacks and refreshments
                                  (24x7) {"&"} laundry services.
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md="4">
                    <SearchResearcher />
                    <div className="sideBarNew">
                      <div className="enqForm course-search">
                        <h5 className="formName"> Admissions Open: 2023 </h5>
                        <div
                          class="npf_wgts text-right"
                          data-height="450px"
                          data-w="c57c3e7d09ac9528ae58dc877386a87f"
                        ></div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>

            <Footer />
          </Styless>
        </div>
      </Styles>
    </Suspense>
  );
};

export const getServerSideProps = async () => {
  const schema = await GetNavigationSchema();
  const faq = await GetFaq("frequently-asked-questions");

  return {
    props: {
      schema,
      faq,
    },
  };
};

export default Faqs;
