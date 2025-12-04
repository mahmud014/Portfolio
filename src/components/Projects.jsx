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
      github: "#",
      live: "#"
    },
    {
      title: "Todo App",
      description: "Simple task management app with CRUD operations. Learning project to practice React hooks and state management.",
      tech: ["React", "JavaScript", "CSS"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Weather App",
      description: "Weather forecast application using OpenWeather API. Displays current weather and 5-day forecast.",
      tech: ["React", "API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "E-commerce Store",
      description: "Full-stack e-commerce platform with shopping cart, payment integration, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, comments, and user authentication.",
      tech: ["Next.js", "Tailwind", "Firebase"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Task Manager",
      description: "Collaborative task management tool with real-time updates and team features.",
      tech: ["React", "Express", "Socket.io"],
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Recipe Finder",
      description: "Search and discover recipes from various cuisines with ingredient filters and nutrition info.",
      tech: ["React", "API", "CSS"],
      image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracker",
      description: "Track workouts, calories, and fitness goals with charts and progress visualization.",
      tech: ["React", "Chart.js", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with group chats, file sharing, and emoji support.",
      tech: ["React", "Firebase", "Tailwind"],
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
    },
    {
      title: "Movie Database",
      description: "Browse movies, TV shows with ratings, reviews, and watchlist functionality.",
      tech: ["React", "TMDB API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop",
      github: "#",
      live: "#"
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
          className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span 
            className="w-2 h-2 bg-primary rounded-full"
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
                    className="flex items-center gap-2 bg-primary text-[#0d2426] px-4 py-2 rounded-full font-semibold"
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
