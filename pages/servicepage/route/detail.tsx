import { notFound } from "next/navigation"
import { getServiceBySlug } from "../../../data/service"
import ServiceHero from "../../../component/services/service-detail/service-hero"
import ServiceOverview from "../../../component/services/service-detail/service-overview"
import ServiceFeatures from "../../../component/services/service-detail/service-features"
import ServicePricing from "../../../component/services/service-detail/service-pricing"
import ServiceProcess from "../../../component/services/service-detail/service-process"
import ServiceTechnologies from "../../../component/services/service-detail/service-technologies"
import ServiceFAQ from "../../../component/services/service-detail/service-faq"
import ServiceCTA from "../../../component/services/service-detail/service-cta"
import RelatedCaseStudies from "../../../component/services/service-detail/related-case-studies"

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
