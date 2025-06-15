
import { ExternalLink, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FeaturedArticles = () => {
  const articles = [
    {
      title: "Building Scalable Microservices: Lessons from Production",
      excerpt: "Key insights from designing and maintaining microservices at scale, including common pitfalls and architectural patterns that work.",
      date: "2024-01-15",
      readTime: "12 min read",
      tags: ["Microservices", "Architecture", "Scale"],
      featured: true,
    },
    {
      title: "The Engineer's Guide to System Design Interviews",
      excerpt: "A comprehensive guide to acing system design interviews, with real examples and step-by-step breakdowns.",
      date: "2024-01-08",
      readTime: "18 min read",
      tags: ["Career", "Interviews", "System Design"],
      featured: true,
    },
    {
      title: "Database Sharding Strategies for High-Traffic Applications",
      excerpt: "Practical approaches to database sharding, when to use it, and how to implement it without breaking existing systems.",
      date: "2024-01-01",
      readTime: "15 min read",
      tags: ["Databases", "Performance", "Architecture"],
      featured: false,
    },
    {
      title: "Monitoring and Observability: Beyond Basic Metrics",
      excerpt: "How to build comprehensive monitoring systems that actually help you understand your applications in production.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["Monitoring", "DevOps", "Observability"],
      featured: false,
    },
  ];

  return (
    <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            In-depth technical articles about software engineering, system design, and lessons learned from building production systems.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
            View All Articles
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
