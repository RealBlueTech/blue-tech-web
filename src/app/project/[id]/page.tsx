"use client"
import { useParams } from 'next/navigation';
import ProjectDetailPage from "../../../../component/projects/project-detail/detail"

export default function Project() {
  const params = useParams();
  const slug = params?.id as string; 
  
  return <ProjectDetailPage params={{ slug  }} />
}
