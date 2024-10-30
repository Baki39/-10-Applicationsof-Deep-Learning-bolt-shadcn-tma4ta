import { useState } from 'react';
import { Brain } from 'lucide-react';
import { ApplicationCard } from '@/components/ApplicationCard';
import { applications } from '@/data/applications';

export function HomePage() {
  const [activeApp, setActiveApp] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            10 Fascinating Applications of Deep Learning
          </h1>
          <div className="flex justify-center mb-12">
            <Brain className="w-24 h-24 text-cyan-400" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore how deep learning is revolutionizing various fields, from autonomous vehicles to creative arts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <ApplicationCard
              key={index}
              app={app}
              index={index}
              isActive={activeApp === index}
              onMouseEnter={() => setActiveApp(index)}
              onMouseLeave={() => setActiveApp(null)}
            />
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-500">
          <p>Powered by advanced neural networks and machine learning technologies</p>
        </footer>
      </div>
    </div>
  );
}