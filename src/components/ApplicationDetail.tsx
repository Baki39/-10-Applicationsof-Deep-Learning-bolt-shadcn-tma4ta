import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { applications } from '@/data/applications';

export function ApplicationDetail() {
  const { id } = useParams();
  const app = applications[Number(id)];

  if (!app) {
    return <div>Application not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <Link 
          to="/" 
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Applications
        </Link>

        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="p-4 rounded-lg bg-cyan-500/10 text-cyan-400">
              <app.icon className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-bold">{app.title}</h1>
          </div>

          <p className="text-xl text-gray-300 mb-8">{app.description}</p>

          <div className="space-y-6 text-gray-300">
            <h2 className="text-2xl font-semibold text-white">Key Features</h2>
            <ul className="list-disc list-inside space-y-3">
              {app.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white pt-4">Applications</h2>
            <ul className="list-disc list-inside space-y-3">
              {app.applications?.map((application, index) => (
                <li key={index}>{application}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-white pt-4">Future Potential</h2>
            <p>{app.futurePotential}</p>
          </div>
        </div>
      </div>
    </div>
  );
}