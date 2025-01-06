/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["shooliniuniversity.com"],
  },
  async rewrites() {
    return [
      {
        source: "/mba-admission",
        destination: "/html/index.html",
      }, 
      {
        source: "/gmb",
        destination: "/gmb/index.html",
      },
      {
        source: "/apply-feb-2025",
        destination: "/apply-feb2025/index.html",
      }, 
      {
        source: "/apply",
        destination: "/apply/index.html",
      },
      {
        source: "/engineering-admission",
        destination: "/engineering-admission/index.html",
      },
      {
        source: "/brp",
        destination: "/brp/index.html",
      },
      {
        source: "/biotechnology-admission",
        destination: "/biotechnology-admission/index.html",
      },
      {
        source: "/apply-admission-online",
        destination: "/apply-admission-online/index.html",
      },
      {
        source: "/phd-admission",
        destination: "/phd-admission/index.html",
      },
      {
        source: "/thankyou",
        destination: "/thankyou/index.html",
      },
      {
        source: "/centre-for-leadership-coaching",
        destination: "/VE-coaching/index.html",
      },
      {
        source: "/redirect", 
        destination: "/redirect/index.html",
      },
      {
        source: "/apply-admission", 
        destination: "/apply-addmission/index.html",
      },
      {
        source: "/demo-page", 
        destination: "/srp-lp/index.html",
      },
      {
        source: "/admissions-test", 
        destination: "/admissions/index.html",
      },
      {
        source: "/bihar-student-testimonial", 
        destination: "/bihar-student-testimonial/index.html",
      },
      {
        source: "/bihar-exam-page", 
        destination: "/bihar-exam-page/index.html",
      },
      {
        source: "/apply-new", 
        destination: "/applynew/index.html",
      },
      {
        source: "/mba-admission-2024", 
        destination: "/mba-admission-2024/index.html",
      },
      {
        source: "/mba-test", 
        destination: "/mba-test/index.html",
      },
      {
        source: "/mba-ranking", 
        destination: "/mba-ranking/index.html",
      }
      ,
      {
        source: "/mba-placement", 
        destination: "/mba-placement/index.html",
      },
      {
        source: "/clc-conference-2024", 
        destination: "/clc/index.html",
      },
      {
        source: "/clc-conference-2024/launch-conference", 
        destination: "/clc/launch-conference.html",
      },
      {
        source: "/clc-conference-2024/list-of-speakers", 
        destination: "/clc/speakers.html",
      }
    ];
  },  

  async redirects() {
    return [
      {
        source: "/programme/applied-sciences-biotechnology", 
        destination: "/faculty-of-applied-sciences-and-biotechnology",
        permanent: true,
      },
       {
        source: "/journalism-and-mass-communication", 
        destination: "/school-of-media-and-communication",
        permanent: true,
      },
      {
        source: "/faculty/profile/pk-khosla", 
        destination: "/faculty/profile/Prem-Kumar-Khosla",
        permanent: true,
      },
      {
        source: "/ba-hons-event-management", 
        destination: "/bajmc-hons-event-management",
        permanent: true,
      },
      {
        source: "/ba-hons-advertising-pr", 
        destination: "/bajmc-hons-advertising-pr",
        permanent: true,
      },
      {
        source: "/mba-agri-business",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-banking-and-insurance",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-biotechnology",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-communications",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-data-science",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, 
       {
        source: "/mba-e-commerce-operations",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-executive",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-financial-markets",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-food-technology",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-logistics-and-supply-chain-management",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      }, {
        source: "/mba-international-relations",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      },
       {
        source: "/mba-tourism",
        destination: "/master-of-business-administration-mba",
        permanent: true,
      },
      {
        source: "/faculty-of-applied-sciences-biotechnology",
        destination: "/faculty-members-applied-sciences-biotechnology",
        permanent: true,
      },
      {
        source: "/faculty-of-management-sciences-liberal-arts",
        destination: "/faculty-members-management-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-engineering-technology",
        destination: "/faculty-members-engineering-technology",
        permanent: true,
      },
      {
        source: "/faculty-of-basic-sciences",
        destination: "/faculty-members-basic-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-pharmaceutical-sciences",
        destination: "/faculty-members-pharmaceutical-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-law",
        destination: "/faculty-members-law",
        permanent: true,
      },
      {
        source: "/faculty-of-yogananda-school-of-ai-computer-and-data-sciences",
        destination: "/faculty-members-ai-computer-and-data-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-advanced-chemical-sciences",
        destination: "/faculty-members-advanced-chemical-sciences",
        permanent: true,
      },
      {
        source: "/faculty-of-agriculture-1",
        destination: "/faculty-of-agriculture",
        permanent: true,
      },
      {
        source: "/faculty-of-applied-sciences-and-biotechnology-1",
        destination: "/faculty-of-applied-sciences-and-biotechnology",
        permanent: true,
      },
      {
        source: "/faculty-of-management-sciences-and-liberal-arts",
        destination: "/faculty-of-management-sciences",
        permanent: true,
      },
      {
        source: "/legal-sciences",
        destination: "/faculty-of-legal-sciences",
        permanent: true,
      },
      {
        source: "/mba", 
        destination: "/master-of-business-administration-mba",
        permanent: true,
      },
      {
        source: "/activates-on-climate-actions", 
        destination: "/activities-on-climate-actions",
        permanent: true,
      },
      {
        source: "/b-tech-computer-science-and-engineering", 
        destination: "/b-tech-computer-science-engineering",
        permanent: true,
      },
      {
        source: "/bsc-university-of-melbourne", 
        destination: "/international/dual-degree?utm_source=organic&utm_medium=MELBOURNE-Degree&utm_campaign=MELBOURNE-Degree",
        permanent: true,
      },
      {
        source: "/shoolini-melbourne-science-technology-global-program", 
        destination: "/international/dual-degree",
        permanent: true,
      },  
      {
        source: "/srp-media", 
        destination: "/srp",
        permanent: true,
      },  
      {
        source: "/news/shoolini-ranks-high-with-20-scientists-in-stanfords-top-2", 
        destination: "/news/shoolini-ranks-high-with-19-scientists-in-stanfords-top-2?utm_source=organic&utm_medium=websiteticker&utm_campaign=19scientiststop2",
        permanent: true,
      }
    ];
  },
 
  
};

module.exports = nextConfig;
