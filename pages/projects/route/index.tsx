import ProjectsHero from "../../../component/projects/projects-hero"
import ProjectsFilter from "../../../component/projects/projects-filter"
import ProjectsGrid from "../../../component/projects/projects-grid"
import FeaturedProject from "../../../component/projects/featured-project"
import ProjectCategories from "../../../component/projects/project-categories"
import IndustriesServed from "../../../component/projects/industries-served"
import ResultsMetrics from "../../../component/projects/results-metrics"
import ProjectsCTA from "../../../component/projects/projects-cta"

export const metadata = {
  title: "Projects | Tech Solutions",
  description: "Explore our portfolio of successful technology projects across various industries.",
}

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsFilter />
      <ProjectsGrid />
      <FeaturedProject />
      <ProjectCategories />
      <IndustriesServed />
      <ResultsMetrics />
      <ProjectsCTA />
    </main>
  )
}
