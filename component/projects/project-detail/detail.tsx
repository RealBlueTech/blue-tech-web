import { notFound } from "next/navigation"
import ProjectHero from "../../../component/projects/project-detail/project-hero"
import ProjectOverview from "../../../component/projects/project-detail/project-overview"
import ProjectFeatures from "../../../component/projects/project-detail/project-features"
import ProjectChallenges from "../../../component/projects/project-detail/project-challenges"
import ProjectResults from "../../../component/projects/project-detail/project-results"
import RelatedProjects from "../../../component/projects/project-detail/related-projects"
import ProjectCTA from "../../../component/projects/project-detail/project-cta"
import { projects } from "../../../data/projects"


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found.",
    }
  }

  return {
    title: `${project.title} | Tech Solutions`,
    description: project.description,
    openGraph: {
      images: [project.image],
    },
  }
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectOverview project={project} />
      <ProjectFeatures project={project} />
      <ProjectChallenges project={project} />
      <ProjectResults project={project} />
      <RelatedProjects currentProjectId={project.id} />
      <ProjectCTA />
    </main>
  )
}
