import { ProcessStep as ProcessStepType } from "@/lib/data";
import { CheckCircle } from "lucide-react";

interface ProcessStepProps {
  step: ProcessStepType;
  index: number;
}

export default function ProcessStep({ step, index }: ProcessStepProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex items-center lg:justify-center">
      <div className={`flex flex-col lg:flex-row${isEven ? "" : "-reverse"} items-center gap-8 lg:gap-16`}>
        {/* Content */}
        <div className={`lg:w-5/12 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              {String(index + 1).padStart(2, "0")}. {step.title}
            </h3>
            <p className="text-gray-300 mb-6">{step.description}</p>
            <ul className="text-sm text-gray-400 space-y-2">
              {step.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Icon */}
        <div className="relative z-10 flex-shrink-0">
          <div 
            className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center animate-glow"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <step.icon className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Placeholder (Desktop) */}
        <div className="lg:w-5/12 hidden lg:block"></div>
      </div>
    </div>
  );
}
