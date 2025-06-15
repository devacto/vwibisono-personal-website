
import { ExternalLink, Clock, Calendar, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './FeaturedArticles.css';

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
    <section id="articles" className="articles-section">
      <div className="articles-container">
        <div className="articles-header">
          <h2 className="articles-title">
            Featured Articles
          </h2>
          <p className="articles-description">
            In-depth technical articles about software engineering, system design, and lessons learned from building production systems.
          </p>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <Card key={index} className="article-card">
              <CardHeader>
                <div className="article-header">
                  <div className="article-meta">
                    <span className="article-meta-item">
                      <Calendar className="article-meta-icon" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="article-meta-item">
                      <Clock className="article-meta-icon" />
                      {article.readTime}
                    </span>
                  </div>
                  <ExternalLink className="article-external-icon" />
                </div>
                <CardTitle className="article-title">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="article-excerpt">
                  {article.excerpt}
                </p>
                <div className="article-tags">
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

        <div className="articles-footer">
          <a href="#" className="articles-view-all">
            View All Articles
            <ArrowRight className="articles-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
</lov_write>

<lov-write file_path="src/components/Footer.tsx">
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-section-title">Get In Touch</h3>
            <p className="footer-description">
              I'm always open to discussing interesting projects, technical challenges, 
              or opportunities to collaborate.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link">
                <Github className="footer-social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/vwib/" className="footer-social-link">
                <Linkedin className="footer-social-icon" />
              </a>
              <a href="https://x.com/VictorWibisono" className="footer-social-link">
                <Twitter className="footer-social-icon" />
              </a>
              <a href="#" className="footer-social-link">
                <Mail className="footer-social-icon" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-section-title">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Home</a></li>
              <li><a href="#articles" className="footer-link">Articles</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-section-title">Newsletter</h3>
            <p className="footer-newsletter-description">
              Subscribe to get the latest articles and insights directly in your inbox.
            </p>
            <div className="footer-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-newsletter-input"
              />
              <button className="footer-newsletter-button">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Victor Wibisono. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
