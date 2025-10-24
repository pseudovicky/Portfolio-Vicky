import { motion } from 'framer-motion'
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaInstagram, 
  FaYoutube,
  FaDiscord,
  FaTelegram,
  FaDribbble,
  FaMedium,
  FaSkype,
  FaReddit,
  FaPinterest
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const socialLinks = {
  inner: [
    { 
      icon: FaLinkedin, 
      url: "https://www.linkedin.com/in/pseudovicky/", 
      color: "#0077B5",
      name: "LinkedIn"
    },
    { 
      icon: FaGithub, 
      url: "https://github.com/pseudovicky", 
      color: "#000000",
      name: "GitHub"
    },
    { 
      icon: FaTwitter, 
      url: "https://twitter.com/gitviki", 
      color: "#1DA1F2",
      name: "Twitter"
    },
    { 
      icon: FaInstagram, 
      url: "https://www.instagram.com/viking08_/", 
      color: "#E4405F",
      name: "Instagram"
    },
    { 
      icon: SiGmail, 
      url: "mailto:sudovicky@gmail.com", 
      color: "#EA4335",
      name: "Gmail"
    },
    { 
      icon: FaYoutube, 
      url: "https://youtube.com", 
      color: "#FF0000",
      name: "YouTube"
    },
  ],
  outer: [
    { 
      icon: FaDiscord, 
      url: "#", 
      color: "#5865F2",
      name: "Discord"
    },
    { 
      icon: FaTelegram, 
      url: "#", 
      color: "#0088cc",
      name: "Telegram"
    },
    { 
      icon: FaDribbble, 
      url: "#", 
      color: "#EA4C89",
      name: "Dribbble"
    },
    { 
      icon: FaMedium, 
      url: "#", 
      color: "#000000",
      name: "Medium"
    },
    { 
      icon: FaSkype, 
      url: "#", 
      color: "#00AFF0",
      name: "Skype"
    },
    { 
      icon: FaReddit, 
      url: "https://www.reddit.com/user/git-viki/", 
      color: "#FF4500",
      name: "Reddit"
    },
    { 
      icon: FaPinterest, 
      url: "#", 
      color: "#E60023",
      name: "Pinterest"
    },
  ]
};

export default function Connect() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
        
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
            Let's Connect
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects and discuss new opportunities. 
            <br className="hidden md:block" />
            Reach out through any of these platforms!
          </p>
        </motion.div>

        {/* Orbital Animation Container */}
        <motion.div 
          className="relative w-full max-w-5xl h-[600px] md:h-[700px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Center Circle - "Connect Me" */}
          <motion.div
            className="absolute z-30 w-48 h-48 md:w-56 md:h-56 rounded-full bg-black border-4 border-white shadow-2xl flex items-center justify-center overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
              alt="Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-bold text-xl md:text-2xl">Connect</p>
                <p className="text-white font-bold text-xl md:text-2xl">Me On</p>
              </div>
            </div>
          </motion.div>

          {/* Inner Orbit Circle - Moving Right (Clockwise) */}
          <motion.div 
            className="absolute w-[400px] h-[400px] md:w-[480px] md:h-[480px] rounded-full border-2 border-gray-300"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {socialLinks.inner.map((social, index) => {
              const angle = (index * 360) / socialLinks.inner.length;
              const Icon = social.icon;
              const radius = 200; // Half of orbit width
              const radiusMd = 240; // Half of orbit width for md screens
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border-4 border-white flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all relative group"
                    whileHover={{ 
                      scale: 1.3,
                      backgroundColor: social.color,
                      borderColor: social.color,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-7 h-7 md:w-9 md:h-9 text-white transition-colors" />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
                    >
                      {social.name}
                    </motion.div>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Outer Orbit Circle - Moving Left (Counter-Clockwise) */}
          <motion.div 
            className="absolute w-[550px] h-[550px] md:w-[650px] md:h-[650px] rounded-full border-2 border-gray-400"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {socialLinks.outer.map((social, index) => {
              const angle = (index * 360) / socialLinks.outer.length;
              const Icon = social.icon;
              const radius = 275; // Half of orbit width
              const radiusMd = 325; // Half of orbit width for md screens
              
              return (
                <motion.div
                  key={index}
                  className="absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg) translate(-50%, -50%)`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-16 h-16 md:w-20 md:h-20 rounded-full bg-black border-4 border-white flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all relative group"
                    whileHover={{ 
                      scale: 1.3,
                      backgroundColor: social.color,
                      borderColor: social.color,
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-7 h-7 md:w-9 md:h-9 text-white transition-colors" />
                    
                    {/* Tooltip */}
                    <motion.div
                      className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
                    >
                      {social.name}
                    </motion.div>
                  </motion.a>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Center Glow Effect */}
          <div className="absolute w-48 h-48 md:w-56 md:h-56 rounded-full bg-black/10 blur-3xl animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
