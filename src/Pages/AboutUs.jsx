import React from 'react';
import { motion } from 'framer-motion';
// Using Lucide icons for high-quality, lightweight SVG icons
import { Rocket, Zap, Users, BrainCircuit } from 'lucide-react'; 

// --- Component Definitions ---

// Helper component for styled section headers
const SectionHeader = ({ icon: Icon, title, subtitle }) => (
    <div className="text-center mb-12">
        <Icon className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
        <h2 className="text-4xl font-extrabold text-white uppercase tracking-widest relative inline-block">
            {title}
            <span className="block h-1 w-1/3 bg-red-500 mx-auto mt-2 rounded-full"></span>
        </h2>
        <p className="text-lg text-gray-400 mt-2">{subtitle}</p>
    </div>
);

// Helper component for values/team cards
const ValueCard = ({ icon: Icon, title, description, color }) => (
    <motion.div 
        className={`p-6 rounded-xl border-2 border-${color}-500/30 bg-black/70 shadow-2xl shadow-${color}-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-${color}-500/40`}
        whileHover={{ translateY: -5 }}
    >
        <Icon className={`w-10 h-10 text-${color}-400 mb-4`} />
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </motion.div>
);


// Main About Us Component
const AboutUs = () => {
    // Animation variants for staggered appearance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const companyValues = [
        { 
            icon: Zap, 
            title: "Innovation Fuel", 
            description: "We are obsessed with pushing the boundaries of interactive entertainment, utilizing cutting-edge technology to craft unforgettable virtual worlds.", 
            color: 'fuchsia' 
        },
        { 
            icon: Users, 
            title: "Player First", 
            description: "Every decision starts and ends with the player experience. We build communities, listen actively, and prioritize transparent communication.", 
            color: 'cyan' 
        },
        { 
            icon: BrainCircuit, 
            title: "Creative Mastery", 
            description: "Our diverse team of artists, engineers, and storytellers collaborate to achieve creative excellence in every pixel, line of code, and narrative.", 
            color: 'red' 
        },
    ];

    return (
        <div className="min-h-screen bg-black/60 backdrop-blur-md  font-sans text-white p-4 sm:p-8">
            
            {/* Background Style - Matches Game List aesthetic (dark, space/nebula) */}
          

            <motion.div 
                className="about-bg max-w-6xl mx-auto p-6 md:p-12 rounded-2xl shadow-neon-lg shadow-black/80"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* --- HEADER / MISSION STATEMENT --- */}
                <motion.header 
                    className="text-center mb-16 pt-8 pb-4"
                    variants={itemVariants}
                >
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-cyan-400 mb-4 drop-shadow-lg shadow-cyan-500/30">
                        The Core of <span className="text-red-400">GAMEVERSE</span> BD
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        We are the architects of the immersive digital frontier, dedicated to forging games that challenge limits, build communities, and redefine reality.
                    </p>
                </motion.header>

                {/* --- SECTION: OUR MISSION --- */}
                <motion.section className="mb-20" variants={itemVariants}>
                    <SectionHeader 
                        icon={Rocket} 
                        title="Our Mission" 
                        subtitle="To engineer and deliver the future of interactive entertainment today."
                    />
                    
                    <motion.div 
                        className="bg-black/50 p-8 rounded-xl border border-cyan-500/20"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg leading-relaxed text-gray-200">
                            Founded in the crucible of innovation, our studio exists to transcend the traditional boundaries of gaming. We specialize in crafting deeply engaging, high-fidelity experiences across multiple genres—from fast-paced, competitive FPS to expansive, narrative-driven RPGs. Our core belief is simple: a game should not just be played; it should be an experience lived. We focus on technological mastery, compelling world-building, and continuous community integration to ensure every title is a landmark event in the gaming calendar.
                        </p>
                    </motion.div>
                </motion.section>


                {/* --- SECTION: CORE VALUES --- */}
                <motion.section className="mb-20" variants={itemVariants}>
                    <SectionHeader 
                        icon={BrainCircuit} 
                        title="Core Values" 
                        subtitle="The principles that guide every development cycle and community interaction."
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {companyValues.map((value, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <ValueCard {...value} />
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* --- SECTION: THE DIGITAL FRONTIER (Vision) --- */}
                <motion.section className="mb-10" variants={itemVariants}>
                    <SectionHeader 
                        icon={Zap} 
                        title="The Digital Frontier" 
                        subtitle="Where we are going next."
                    />
                    
                    <motion.div 
                        className="bg-black/50 p-8 rounded-xl border border-fuchsia-500/20 text-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-lg leading-relaxed text-gray-200 mb-4">
                            Our future is focused on true cross-platform integration and the seamless merging of digital worlds. We are currently developing technologies to expand our game universes into persistent, evolving realities, ensuring that every update and every new title connects to a larger, shared narrative. Join us as we build the metaverse, one masterpiece at a time.
                        </p>
                        <motion.a
                            href="#" // Replace with a link to your career page or contact form
                            className="inline-block px-8 py-3 mt-4 text-white font-bold rounded-full bg-red-600 hover:bg-red-700 transition duration-300 shadow-lg shadow-red-500/50 uppercase tracking-wider"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Explore Our Universe
                        </motion.a>
                    </motion.div>
                </motion.section>

            </motion.div>
        </div>
    );
};

export default AboutUs;