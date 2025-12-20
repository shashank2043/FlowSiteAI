import React from 'react';
import Container from '../ui/Container';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import SectionHeader from '../ui/SectionHeader';
import { blogPosts } from '../../data/content';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

/**
 * Blog preview section with latest articles
 */
const BlogSection = () => {
    const [ref, isVisible] = useScrollAnimation();

    return (
        <section id="blog" className="section-padding bg-cream-50">
            <Container>
                <div ref={ref} className={isVisible ? 'animate-fade-in' : 'opacity-0'}>
                    <div className="flex items-end justify-between mb-16">
                        <SectionHeader
                            title="Latest Insights"
                            description="Tips, guides, and industry insights for modern businesses."
                            align="left"
                        />
                        <Button variant="outlined" className="hidden md:block">
                            View all
                        </Button>
                    </div>

                    {/* Blog Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
                        {blogPosts.map((post, index) => (
                            <Card
                                key={post.id}
                                className={`${isVisible ? 'animate-slide-up' : 'opacity-0'} cursor-pointer group`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Blog Image Placeholder */}
                                <div className="w-full h-64 bg-gradient-to-br from-primary-50 via-blue-50 to-cyan-50 rounded-2xl mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                                    <span className="text-7xl">📝</span>
                                </div>

                                {/* Category Badge */}
                                <Badge variant="info" className="mb-4">
                                    {post.category}
                                </Badge>

                                {/* Post Title & Description */}
                                <h3 className="text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{post.description}</p>
                            </Card>
                        ))}
                    </div>

                    {/* Mobile View All Button */}
                    <div className="text-center md:hidden">
                        <Button variant="outlined">View all</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default BlogSection;
