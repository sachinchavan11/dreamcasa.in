import BlogsHero from '@/components/Blogshero';
import React from 'react';
import SEO from '@/components/SEO';

const Blogs = () => {
  return (
    <div>
      <SEO
        title="Exploring Neighborhoods: Your Guide to Locating the Perfect Home"
        description="Explore the world of real estate investment with our in-depth guide. From market trends to expert tips, discover everything you need to know for a successful venture in the property market."
        keywords="Real Estate Investment,
        Property Market Trends,
        Homebuying Tips,
        Selling Strategies,
        Neighborhood Exploration,
        Real Estate Financing"
      />
      <BlogsHero />
    </div>
  );
};

export default Blogs;
