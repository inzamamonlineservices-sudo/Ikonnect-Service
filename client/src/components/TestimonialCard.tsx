import { Star } from "lucide-react";
import { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="glass-effect p-8 rounded-2xl">
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5" fill="currentColor" />
          ))}
        </div>
      </div>
      <blockquote className="text-gray-300 mb-6 italic">
        "{testimonial.content}"
      </blockquote>
      <div className="flex items-center">
        <img
          src={testimonial.avatar}
          alt={`${testimonial.name} avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
          data-testid={`img-testimonial-${testimonial.id}`}
        />
        <div>
          <div className="font-semibold text-white" data-testid={`text-testimonial-name-${testimonial.id}`}>
            {testimonial.name}
          </div>
          <div className="text-sm text-gray-400" data-testid={`text-testimonial-position-${testimonial.id}`}>
            {testimonial.position}
          </div>
        </div>
      </div>
    </div>
  );
}
