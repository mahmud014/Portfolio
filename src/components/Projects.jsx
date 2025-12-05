import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const projects = [
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS. Features smooth animations and responsive design.",
      tech: ["React", "Tailwind", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "https://github.com/mahmud014/Portfolio",
      live: "https://shukur-portfolio.vercel.app"
    },
    {
      title: "Todo App",
      description: "Simple task management app with CRUD operations. Learning project to practice React hooks and state management.",
      tech: ["React", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "https://github.com/mahmud014/app-aplication",
      live: "https://quantumcode-aplication.vercel.app"
    },
    {
      title: "Book App",
      description: "Discover, read, and organize your favorite books with categories, ratings, and personalized reading lists.",
      tech: ["React", "API", "Tailwind"],
      image: "https://i.ibb.co.com/dwYMP3NZ/istockphoto-1313532517-612x612.jpg",
      github: "https://github.com/mahmud014/book-vibe",
      live: "https://book-vibe-chi.vercel.app/"
    },
    {
      title: "E-commerce Store",
      description: "Full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "https://github.com/mahmud014/Shoporo-next-app",
      live: "https://shoporo-next-app.vercel.app/"
    },
    {
      title: "News Portal App",
      description: "A modern news portal providing real-time headlines, category-based news, detailed articles, and a clean reading experience.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://i.ibb.co.com/xSgL5DWL/istockphoto-182779981-612x612.jpg",
      github: "https://github.com/mahmud014/The-Dragon-News",
      live: "https://dragon-news-37713.web.app/"
    },
    {
      title: "Skills Course App",
      description: "A learning platform offering skill-based courses with video lessons, quizzes, progress tracking, and certificate generation for students..",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "https://github.com/mahmud014/Skill-Hive",
      live: "https://skill-hive-gold.vercel.app/"
    },
    {
      title: "Restaurant App",
      description: "A modern restaurant app with online menu browsing, food ordering, table reservations, and real-time order tracking.",
      tech: ["React", "API", "CSS"],
      image: "https://i.ibb.co.com/8VmT9wK/istockphoto-172446562-612x612.jpg",
      github: "https://github.com/mahmud014/DishDive-restaurant-App",
      live: "https://dishdive-e699b.web.app/"
    },
    {
      title: "Emergency Hotline",
      description: "A quick-access emergency support app with one-tap calling, location sharing, and essential hotline numbers for police, fire service, and medical services.",
      tech: ["React", "Chart.js", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      github: "https://github.com/mahmud014/Emergency-Hotline-Assignment-5",
      live: "https://emergency-hotline-two.vercel.app/"
    },
    {
      title: "Mobile Pay App",
      description: "A secure and user-friendly mobile payment system for sending money, mobile recharge, bill payments, and transaction tracking.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://i.ibb.co.com/rRPp0qfy/photo-1651055705032-d4187855b004.jpg",
      github: "https://github.com/mahmud014/mobile-payoo",
      live: "https://mobile-payoo.vercel.app/"
    },
    {
      title: "Learning App",
      description: "Learn English easily with vocabulary practice, daily lessons, quizzes, and real-life examples — designed for Bangla speakers.",
      tech: ["React", "TMDB API", "Tailwind"],
      image: "https://i.ibb.co.com/sdNLPPyH/istockphoto-2208643645-612x612.webp",
      github: "https://github.com/mahmud014/English-janala-app",
      live: "https://english-janala-app.vercel.app/"
    }
  ]

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-secondary rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">My Projects</span>
        </motion.div>
        
        <motion.h2 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Showcasing my <span className="text-secondary">creative work</span>
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Projects I've built while learning web development
        </motion.p>
      </motion.div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="projects-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <motion.div 
              className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-secondary h-full"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden h-56">
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-60"></div>
                <motion.div 
                  className="absolute bottom-4 left-4 right-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                </motion.div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="bg-secondary/20 text-secondary text-xs px-3 py-1.5 rounded-full font-semibold"
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(174, 255, 114, 0.3)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a 
                    href={project.github} 
                    className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(13, 36, 38, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-lg" /> Code
                  </motion.a>
                  <motion.a 
                    href={project.live} 
                    className="flex items-center gap-2 bg-secondary text-primary px-4 py-2 rounded-full font-semibold"
                    whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(174, 255, 114, 0.3)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Projects
