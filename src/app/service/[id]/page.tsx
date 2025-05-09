"use client"
import { useParams } from 'next/navigation';
import ServiceDetails from "../../../../pages/servicepage/route/detail"

export default function Service() {
    const params = useParams();
    const slug = params?.id as string; 
  
    return <ServiceDetails params={{ slug }}  />
}

