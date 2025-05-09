import { notFound } from "next/navigation"
import { getServiceBySlug } from "../../../data/service"
import ServiceHero from "./service-hero"
import ServiceOverview from "./service-overview"
import ServiceFeatures from "./service-features"
import ServicePricing from "./service-pricing"
import ServiceProcess from "./service-process"
import ServiceTechnologies from "./service-technologies"
import ServiceFAQ from "./service-faq"
import ServiceCTA from "./service-cta"
import RelatedCaseStudies from "./related-case-studies"

export async function generateMetadata({ params }: { params: { slug: string } }) {

  const service = getServiceBySlug(params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service could not be found.",
    }
  }

  return {
    title: `${service.title} | Tech Solutions`,
    description: service.shortDescription,
  }
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug)

  if (!service) {
    notFound()
  }

  return (
    <main>
      <ServiceHero service={service} />
      <ServicePricing service={service} />
      <ServiceOverview service={service} />
      <ServiceFeatures service={service} />
      <ServiceProcess service={service} />
      <ServiceTechnologies service={service} />
      <RelatedCaseStudies caseStudyIds={service.caseStudies} />
      <ServiceFAQ service={service} />
      <ServiceCTA />
    </main>
  )
}
