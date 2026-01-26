'use client'

import { FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa"
import { useState, useRef, FormEvent } from "react"
import {  motion, useInView } from "framer-motion"
import toast from "react-hot-toast"
import { BsTwitterX } from "react-icons/bs"

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement
    const data = {
      firstName: (form.elements.namedItem("First Name") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("Last Name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("Phone Number") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await res.json()
      if (result.success) {
        toast.success("✓ Message sent successfully! I’ll get back to you soon.")
        form.reset()
      } else {
        toast.error("Failed to send message: " + result.error)
      }
    } catch (err) {
      toast.error("Something went wrong!")
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  const socialLinks = [
  { href: "https://github.com/mahmud014", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/shukurmahmud/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://x.com/MdShukurMahmud3", icon: BsTwitterX, label: "Twitter" },
];

  return (
    <section ref={ref} className="w-full max-w-7xl mx-auto py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side - Info */}
        <motion.div 
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <div>
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
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Contact Us</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch to discuss your <span className="text-secondary">next project</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Are you ready to take your project to the next level? Whether you&apos;re looking for a new website, a web application, or simply need advice.
            </motion.p>
          </div>

          <motion.div 
            className="space-y-6 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <motion.div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ scale: 1.1, rotate: 5 }}>
                <FaMapMarkerAlt className="text-secondary text-xl" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tangail Sadar,<br />Tangail, Bangladesh
                </p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" whileHover={{ x: 10 }} transition={{ duration: 0.3 }}>
              <motion.div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0" whileHover={{ scale: 1.1, rotate: 5 }}>
                <FaPhone className="text-secondary text-xl" />
              </motion.div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Phone Number</h3>
                <a href="tel:+8801799649027" className="text-gray-600 dark:text-gray-400 hover:text-secondary transition-colors">
                  +880 1799-649027
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Resume Badge */}
          <motion.a href="/Shukur_Mahmud_resume.pdf" download className="relative w-32 h-32 mt-8 block cursor-pointer group" initial={{ opacity: 0, scale: 0 }} animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }} transition={{ duration: 0.5, delay: 0.5, type: "spring" }} whileHover={{ scale: 1.1 }}>
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center animate-spin-slow group-hover:bg-primary transition-colors">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none"/>
                <text className="text-[8px] fill-primary group-hover:fill-white font-semibold uppercase tracking-wider transition-all">
                  <textPath href="#circlePath">• MY RESUME • MY RESUME • MY RESUME • MY RESUME</textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center" whileHover={{ scale: 1.2 }}>
                <span className="text-2xl">📄</span>
              </motion.div>
            </div>
          </motion.a>
        </motion.div>

        {/* Right Side - Form */}
        <motion.div className="bg-[#1a3a3a] dark:bg-gray-800 rounded-3xl p-8 md:p-10 shadow-2xl" initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Fill out the form below to connect with me. I&apos;ll get back to you soon to discuss your project or answer any questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">First Name</label>
                <input type="text" name="First Name" required className="w-full px-4 py-3 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all" placeholder="John"/>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Last Name</label>
                <input type="text" name="Last Name" required className="w-full px-4 py-3 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all" placeholder="Doe"/>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all" placeholder="john@example.com"/>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                <input type="tel" name="Phone Number" className="w-full px-4 py-3 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary transition-all" placeholder="+880 1234-567890"/>
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea rows={5} name="message" required className="w-full px-4 py-3 bg-[#0f2828] border border-gray-700 rounded-lg text-white outline-none focus:border-primary resize-none transition-all" placeholder="Your message here..."></textarea>
            </div>

            <motion.button type="submit" disabled={isSubmitting} className="bg-secondary text-primary font-bold px-8 py-4 rounded-full" whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(174, 255, 114, 0.3)" }} whileTap={{ scale: 0.95 }}>
              {isSubmitting ? "Sending..." : "Submit Message"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div
      className="flex justify-center gap-4 mt-16"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <div key={social.label} className="relative flex flex-col items-center group">
            <motion.a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2, backgroundColor: "#AEFF72", color: "#0D2426" }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="text-xl" />
            </motion.a>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-secondary text-primary px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
              {social.label}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-secondary rotate-45"></div>
            </div>
          </div>
        );
      })}
    </motion.div>
    </section>
  )
}

export default Contact
