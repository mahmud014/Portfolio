import Marquee from "react-fast-marquee"
import { FaReact, FaNodeJs, FaHtml5, FaGitAlt, FaWordpress } from "react-icons/fa"
import { SiTailwindcss, SiMongodb, SiJavascript, SiNextdotjs, SiDaisyui, SiExpress } from "react-icons/si"

const SkillsMarquee = () => {
  const skills = [
    { name: "REACT.JS", icon: <FaReact className="text-3xl" /> },
    { name: "NEXT.JS", icon: <SiNextdotjs className="text-3xl" /> },
    { name: "NODE.JS", icon: <FaNodeJs className="text-3xl" /> },
    { name: "MONGODB", icon: <SiMongodb className="text-3xl" /> },
    { name: "TAILWIND CSS", icon: <SiTailwindcss className="text-3xl" /> },
    { name: "DAISY UI", icon: <SiDaisyui className="text-3xl" /> },
    { name: "JAVASCRIPT", icon: <SiJavascript className="text-3xl" /> },
    { name: "HTML & CSS", icon: <FaHtml5 className="text-3xl" /> },
    { name: "EXPRESS.JS", icon: <SiExpress className="text-3xl" /> },
    { name: "WORDPRESS", icon: <FaWordpress className="text-3xl" /> },
    { name: "GIT & GITHUB", icon: <FaGitAlt className="text-3xl" /> },
  ]

  return (
    <div className="w-full py-8 bg-secondary overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover={false}>
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-8 mx-4">
            <div className="flex items-center gap-4 bg-primary/20 px-6 py-3 rounded-full">
              <span className="text-primary">{skill.icon}</span>
              <span className="text-primary font-bold text-xl whitespace-nowrap uppercase tracking-wide">
                {skill.name}
              </span>
            </div>
            <span className="text-primary text-2xl">✦</span>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default SkillsMarquee
