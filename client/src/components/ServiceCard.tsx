import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="gradient-border group cursor-pointer hover:scale-105 transition-all duration-300">
      <div className="gradient-border-content p-8">
        <div className="text-accent-400 mb-4">
          <service.icon className="w-12 h-12" />
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-accent-400 transition-colors">
          {service.title}
        </h3>
        <p className="text-gray-300 mb-6">{service.description}</p>
        <Link href={`/services/${service.slug}`}>
          <div className="flex items-center text-accent-400 font-medium">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
          </div>
        </Link>
      </div>
    </div>
  );
}
