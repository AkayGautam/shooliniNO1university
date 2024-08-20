import {
  programApi,
  testimonialApi,
  GetNavigationSchema,
  GetSiteLinkSchema,
} from "../../Api";

export default async function handler(req, res) {
  const programs = programApi();
  const testimonial = testimonialApi();
  const navigation = GetNavigationSchema();
  const siteLink = GetSiteLinkSchema();

  const [programData, testimonialData, navigationData, siteLinkData] =
    await Promise.all([programs, testimonial, navigation, siteLink]);

  res.setHeader("Content-Type", "application/json");

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59",
    "application/xml"
  );

  res.status(200).json({
    programs: programData,
    testimonials: testimonialData,
    navigation: navigationData,
    siteLink: siteLinkData,
  });
}