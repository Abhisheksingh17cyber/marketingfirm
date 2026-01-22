import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Calendar, User, Clock, ArrowRight, Search,
  Tag, ChevronRight
} from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    'all',
    'Construction',
    'Real Estate',
    'Interior Design',
    'Market Trends',
    'Tips & Guides'
  ]

  const blogPosts = [
    {
      id: 1,
      title: '2024 Luxury Real Estate Market Trends: What to Expect',
      excerpt: 'Discover the key trends shaping the luxury real estate market this year, from sustainable building practices to smart home integration.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      category: 'Market Trends',
      author: 'Alexander Sterling',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      date: 'Dec 15, 2024',
      readTime: '8 min read',
      featured: true
    },
    {
      id: 2,
      title: 'The Ultimate Guide to Custom Home Construction',
      excerpt: 'Everything you need to know about building your dream custom home, from planning to final walkthrough.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800',
      category: 'Construction',
      author: 'Marcus Williams',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      date: 'Dec 10, 2024',
      readTime: '12 min read',
      featured: true
    },
    {
      id: 3,
      title: '10 Interior Design Trends Dominating 2024',
      excerpt: 'From biophilic design to warm minimalism, explore the interior design trends transforming luxury homes this year.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      category: 'Interior Design',
      author: 'Victoria Chen',
      authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      featured: false
    },
    {
      id: 4,
      title: 'First-Time Home Buyer\'s Complete Guide',
      excerpt: 'Navigate the home buying process with confidence using our comprehensive guide for first-time buyers.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      category: 'Tips & Guides',
      author: 'Sophia Rodriguez',
      authorImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
      date: 'Nov 28, 2024',
      readTime: '10 min read',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainable Building: The Future of Construction',
      excerpt: 'Learn how sustainable building practices are revolutionizing the construction industry and benefiting homeowners.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      category: 'Construction',
      author: 'Marcus Williams',
      authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      date: 'Nov 20, 2024',
      readTime: '7 min read',
      featured: false
    },
    {
      id: 6,
      title: 'Maximizing ROI on Rental Properties',
      excerpt: 'Expert strategies for maximizing your return on investment when purchasing and managing rental properties.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
      category: 'Real Estate',
      author: 'Alexander Sterling',
      authorImage: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100',
      date: 'Nov 15, 2024',
      readTime: '9 min read',
      featured: false
    },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920"
            alt="Blog"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-950/95 via-dark-950/80 to-dark-950/95" />
        </div>

        <div className="container-custom px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="subheading">Our Blog</span>
            <h1 className="heading-xl text-white mt-4 mb-6">
              Insights & <span className="text-gradient-gold">Inspiration</span>
            </h1>
            <p className="text-xl text-secondary-300 leading-relaxed">
              Expert advice, industry trends, and inspiration for your real estate 
              and construction journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-8 bg-dark-900/50 sticky top-20 z-30 backdrop-blur-xl border-b border-gold-400/10">
        <div className="container-custom px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-gold-400 text-dark-950'
                      : 'bg-dark-900/50 text-secondary-300 border border-gold-400/20 hover:border-gold-400/40'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === 'all' && searchQuery === '' && (
        <section className="section-padding bg-dark-950">
          <div className="container-custom px-4 lg:px-8">
            <SectionHeading
              subtitle="Featured"
              title="Editor's Picks"
              align="left"
            />

            <div className="grid lg:grid-cols-2 gap-8 mt-12">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-premium group overflow-hidden"
                >
                  <div className="relative overflow-hidden aspect-[16/9]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gold-400 text-dark-950 text-xs font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center gap-1 text-gold-400 text-sm">
                        <Tag size={14} />
                        {post.category}
                      </span>
                      <span className="text-secondary-500">•</span>
                      <span className="flex items-center gap-1 text-secondary-400 text-sm">
                        <Clock size={14} />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl font-semibold text-white mb-3 group-hover:text-gold-400 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>

                    <p className="text-secondary-400 mb-6 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gold-400/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-400/30">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-secondary-400 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-gold-400 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                      >
                        Read More <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="section-padding bg-dark-900/30">
        <div className="container-custom px-4 lg:px-8">
          {selectedCategory === 'all' && searchQuery === '' && (
            <SectionHeading
              subtitle="Latest Articles"
              title="Recent Posts"
              align="left"
            />
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="card-premium group overflow-hidden"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-dark-950/80 text-gold-400 text-xs font-medium rounded-full border border-gold-400/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-secondary-400 text-sm mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-gold-400 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-secondary-400 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-3 pt-4 border-t border-gold-400/10">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-gold-400/30">
                      <img
                        src={post.authorImage}
                        alt={post.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <span className="text-white text-sm">{post.author}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-secondary-400 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="btn-primary"
              >
                View All Posts
              </button>
            </div>
          )}

          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-gold opacity-10" />
        <div className="container-custom px-4 lg:px-8 relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg text-white mb-6">
              Stay Updated
            </h2>
            <p className="body-text max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter for the latest industry insights, 
              market updates, and expert advice delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-dark-900/50 border border-gold-400/20 rounded-lg text-white placeholder:text-secondary-500 focus:outline-none focus:border-gold-400/50 transition-colors"
              />
              <button className="btn-primary flex items-center justify-center gap-2">
                Subscribe
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Blog
