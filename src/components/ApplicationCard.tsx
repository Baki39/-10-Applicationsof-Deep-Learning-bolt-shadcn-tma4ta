import { cn } from '@/lib/utils';
import { Application } from '@/types';
import { useNavigate } from 'react-router-dom';

interface ApplicationCardProps {
  app: Application;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

export function ApplicationCard({ app, index, isActive, onMouseEnter, onMouseLeave }: ApplicationCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "group relative p-6 rounded-xl transition-all duration-300 cursor-pointer",
        "bg-gradient-to-br from-gray-800 to-gray-900",
        "hover:from-gray-700 hover:to-gray-800",
        "border border-gray-700 hover:border-cyan-500/50",
        isActive ? "ring-2 ring-cyan-400" : ""
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => navigate(`/application/${index}`)}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
          <app.icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{app.title}</h3>
      </div>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
        {app.description}
      </p>
      <div className={cn(
        "absolute inset-0 border border-cyan-400/50 rounded-xl scale-105 opacity-0 transition-all duration-300",
        isActive ? "opacity-100" : "opacity-0"
      )} />
    </div>
  );
}