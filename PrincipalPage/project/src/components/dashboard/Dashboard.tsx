import React from 'react';
import { FileText, MessageSquare, Clock } from 'lucide-react';

const Dashboard: React.FC = () => {
  const recentArticles = [
    {
      title: "Machine Learning in Healthcare",
      status: "Under Review",
      comments: 3,
      date: "2024-03-15"
    },
    {
      title: "Quantum Computing Advances",
      status: "Published",
      comments: 8,
      date: "2024-03-10"
    },
    {
      title: "Climate Change Impact Analysis",
      status: "Draft",
      comments: 0,
      date: "2024-03-08"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-light-blue-100 rounded-lg">
              <FileText className="h-6 w-6 text-light-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Articles</p>
              <p className="text-2xl font-semibold text-gray-900">12</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Reviews Received</p>
              <p className="text-2xl font-semibold text-gray-900">48</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Pending Reviews</p>
              <p className="text-2xl font-semibold text-gray-900">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Articles */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900">Recent Articles</h2>
        </div>
        <div className="border-t border-gray-200">
          <ul className="divide-y divide-gray-200">
            {recentArticles.map((article, index) => (
              <li key={index} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-900">
                      {article.title}
                    </h3>
                    <div className="mt-1 flex items-center space-x-4">
                      <span className="text-sm text-gray-500">{article.date}</span>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${article.status === 'Published' ? 'bg-green-100 text-green-800' :
                          article.status === 'Under Review' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'}`}>
                        {article.status}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <MessageSquare className="h-4 w-4" />
                    <span>{article.comments}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;