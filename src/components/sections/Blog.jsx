import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, ArrowRight, X } from 'lucide-react';

const blogPosts = [
    {
        title: 'My Journey into Tech: From Hello World to Full Stack',
        excerpt: 'How I started my coding journey, the challenges I faced, and how I overcame them to become a passionate full-stack developer.',
        content: `
      <p>My journey into technology wasn't a straight line. It began with curiosity—wondering how the websites I visited every day were built. I started with simple HTML and CSS, hacking together basic pages. The first time I saw "Hello World" render on my screen, I was hooked.</p>
      
      <h3>The Challenge of JavaScript</h3>
      <p>Moving from static pages to dynamic logic was a hurdle. JavaScript felt chaotic at first. Concepts like closures, async/await, and the event loop took time to click. I spent countless nights debugging console errors and reading MDN documentation.</p>
      
      <h3>Discovering Content Creation</h3>
      <p>As I learned, I realized the value of documenting my process. Writing blog posts and sharing my projects not only helped me solidify my knowledge but also connected me with a community of like-minded developers.</p>
      
      <h3>Where I Am Now</h3>
      <p>Today, I'm confident building full-stack applications using the MERN stack, Next.js, and cloud technologies. The journey is far from over—in fact, in tech, learning never ends. And that's exactly why I love it.</p>
    `,
        date: 'Feb 15, 2026',
        author: 'Rahul Verma',
        readTime: '5 min read',
        tags: ['Career', 'Personal'],
        image: 'https://images.unsplash.com/photo-1456324504439-367cee101635?w=600&h=400&fit=crop'
    },
    {
        title: 'Why I Switched from Python to Go for Backend Services',
        excerpt: 'An in-depth look at performance differences, concurrency models, and why Golang became my go-to language for scalable microservices.',
        content: `
      <p>Python has always been my first love. Its readability and vast ecosystem make it perfect for rapid prototyping and data science. However, as I started building more performance-critical backend services, started hitting bottlenecks.</p>
      
      <h3>The Concurrency Need</h3>
      <p>Python's Global Interpreter Lock (GIL) can limit true parallelism in CPU-bound tasks. While async frameworks like FastAPI help, Go's goroutines offered a completely different paradigm. Lightweight threads managed by the Go runtime meant I could handle thousands of concurrent connections with minimal overhead.</p>
      
      <h3>Static Typing and Compilation</h3>
      <p>Go's static typing catches errors at compile time, which is a huge confidence booster for production deployments. The compiled binary is also small and dependency-free, making containerization with Docker incredibly efficient.</p>
      
      <h3>Conclusion</h3>
      <p>I still use Python for AI/ML tasks, but for high-throughput microservices, Go has become my default choice. It's not about one language being "better," but choosing the right tool for the job.</p>
    `,
        date: 'Feb 10, 2026',
        author: 'Rahul Verma',
        readTime: '8 min read',
        tags: ['Golang', 'Backend'],
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop'
    },
    {
        title: 'Understanding React Hooks: A Beginner\'s Guide',
        excerpt: 'Breaking down useState, useEffect, and custom hooks with simple examples. Master the fundamentals of modern React development.',
        content: `
      <p>React Hooks revolutionized how we write components. Gone are the days of complex class components and lifecycle methods like 'componentDidMount'. Hooks allow us to use state and other React features without writing a class.</p>
      
      <h3>useState</h3>
      <p>The most fundamental hook. It lets you add state to function components. Think of it as a way to "preserve" some values between function calls.</p>
      
      <h3>useEffect</h3>
      <p>This hook handles side effects—data fetching, subscriptions, or manually changing the DOM. It combines componentDidMount, componentDidUpdate, and componentWillUnmount into a single API.</p>
      
      <h3>Custom Hooks</h3>
      <p>The real power comes when you build your own hooks. Extracting component logic into reusable functions keeps your code clean and DRY (Don't Repeat Yourself).</p>
    `,
        date: 'Feb 05, 2026',
        author: 'Rahul Verma',
        readTime: '6 min read',
        tags: ['React', 'Frontend'],
        image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop'
    },
    {
        title: 'The Importance of Data Structures in Web Development',
        excerpt: 'Why algorithms matters even for frontend developers. Real-world scenarios where knowledge of Maps, Sets, and Trees saved the day.',
        content: `
      <p>It's a common myth that frontend developers don't need to know Data Structures and Algorithms (DSA). While you might not inverted a binary tree daily, understanding the underlying principles is crucial for performance.</p>
      
      <h3>Arrays vs. Sets</h3>
      <p>I once optimized a feature that filtered duplicate items from a large list. Using an Array with 'includes()' resulted in O(n^2) complexity. Switching to a Set reduced it to O(n), instantly making the UI snappy.</p>
      
      <h3>Hash Maps for State Management</h3>
      <p>When managing complex state in Redux or Context, normalizing data into hash maps (objects keyed by ID) makes lookups O(1) instead of searching through arrays every time.</p>
    `,
        date: 'Jan 28, 2026',
        author: 'Rahul Verma',
        readTime: '7 min read',
        tags: ['DSA', 'Programming'],
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop'
    },
    {
        title: '5 Tips for LANDING your First Dev Job as a Fresher',
        excerpt: 'Practical advice on building a portfolio, networking, and acing interviews. My experience navigating the job market as a fresh graduate.',
        content: `
      <p>Breaking into the tech industry can feel daunting. Here are the steps that worked for me:</p>
      
      <ol>
        <li><strong>Build Real Projects:</strong> Don't just follow tutorials. Build something that solves a problem you have. It shows initiative.</li>
        <li><strong>Network Authentically:</strong> Engage with developers on LinkedIn and Twitter. Don't just ask for referrals; contribute to conversations.</li>
        <li><strong>Master the Basics:</strong> Frameworks come and go, but strong fundamentals in JavaScript, HTML, and CSS are timeless.</li>
        <li><strong>Soft Skills Matter:</strong> Communication is just as important as coding. Be able to explain your thought process clearly.</li>
        <li><strong>Keep Learning:</strong> Show that you are adaptable and eager to grow. That's what every hiring manager looks for.</li>
      </ol>
    `,
        date: 'Jan 20, 2026',
        author: 'Rahul Verma',
        readTime: '4 min read',
        tags: ['Career', 'Advice'],
        image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&h=400&fit=crop'
    }
];

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <section id="blog" className="py-20 bg-black text-white font-mono relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Latest Insights
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Thoughts, tutorials, and experiences from my journey in software engineering.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedPost(post)}
                            className="group bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 flex flex-col h-full cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 rounded-t-xl"
                                    style={{ filter: 'grayscale(100%) contrast(1.2)' }}
                                    onError={({ currentTarget }) => {
                                        currentTarget.onerror = null;
                                        currentTarget.src = "https://placehold.co/600x400/111/444?font=mono&text=Blog";
                                    }}
                                />
                                <div className="absolute top-4 left-4 z-20 flex gap-2">
                                    {post.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 bg-black/80 backdrop-blur-sm text-white text-xs rounded border border-gray-700">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {post.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {post.author}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-gray-300 transition-colors line-clamp-2 leading-tight">
                                    {post.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-6 flex-1 line-clamp-3 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                <div
                                    className="inline-flex items-center gap-2 text-sm font-bold hover:text-gray-300 transition-colors mt-auto"
                                >
                                    Read Article
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Blog Post Modal */}
            <AnimatePresence>
                {selectedPost && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedPost(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative bg-gray-950 w-full max-w-4xl max-h-[90vh] rounded-2xl border border-gray-800 shadow-2xl overflow-hidden flex flex-col"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-gray-800 rounded-full text-white z-50 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Modal Content */}
                            <div className="overflow-y-auto custom-scrollbar">
                                <div className="aspect-video w-full relative">
                                    <img
                                        src={selectedPost.image}
                                        alt={selectedPost.title}
                                        className="w-full h-full object-cover"
                                        style={{ filter: 'grayscale(50%) contrast(1.1)' }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex flex-col justify-end p-8">
                                        <div className="flex gap-2 mb-4">
                                            {selectedPost.tags.map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded border border-gray-700">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">{selectedPost.title}</h2>
                                        <div className="flex items-center gap-6 text-sm text-gray-300">
                                            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {selectedPost.date}</span>
                                            <span className="flex items-center gap-2"><User className="w-4 h-4" /> {selectedPost.author}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-12 prose prose-invert prose-lg max-w-none">
                                    {/* Dangerously setting HTML for the blog content - in a real app, use a sanitizer */}
                                    <div dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Blog;
