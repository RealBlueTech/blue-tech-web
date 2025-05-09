"use client"
import { useParams } from 'next/navigation';
import ProjectDetailPage from "../../../../pages/projects/route/detail"

export default function Project() {
  const params = useParams();
  const slug = params?.id as string; 
  
  return <ProjectDetailPage params={{ slug  }} />
}
