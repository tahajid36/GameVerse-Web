import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Lucide icons for support and contact features
import { Mail, Headset, Shield, ChevronDown, Wrench } from 'lucide-react'; 

// --- Helper Component Definitions ---

// Reusable Section Header component for consistent styling
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

// Collapsible FAQ Item Component
const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div 
            className="border-b border-gray-700 last:border-b-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
        >
            <button 
                className="flex justify-between items-center w-full py-4 text-left font-semibold text-lg text-white hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setIsOpen(!isOpen)}
            >
                {question}
                <ChevronDown className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-400'}`} />
            </button>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pb-4 text-gray-300 leading-relaxed pl-4 pr-10">
                    {answer}
                </p>
            </motion.div>
        </motion.div>
    );
};


// Main Support Page Component
const SupportPage = () => {
    const faqData = [
        {
            question: "How do I report a bug or glitch?",
            answer: "If you encounter a bug, please use the 'Technical Support' form below and provide as much detail as possible, including your platform, game title, and steps to reproduce the issue. This helps our team resolve issues faster."
        },
        {
            question: "What is your refund policy?",
            answer: "Refunds are handled on a case-by-case basis. Generally, games purchased through GameVerse are eligible for a refund if they have been played for less than two hours and the request is made within 14 days of purchase. Please contact us directly for specific platform policies."
        },
        {
            question: "How do I reset my password?",
            answer: "Navigate to the Login/Register section, click 'Forgot Password,' and follow the instructions. A password reset link will be sent to the email associated with your GameVerse account."
        },
        {
            question: "Can I submit feedback or feature requests?",
            answer: "Absolutely! We value community input. Please send all feedback and feature requests directly to our general support email (see contact section)."
        }
    ];

    return (
        <div className="min-h-screen bg-black/60 backdrop-blur-md font-sans text-white p-4 sm:p-8">
            
            

            <div className="support-bg max-w-5xl mx-auto p-6 md:p-12 rounded-2xl shadow-neon-lg shadow-black/80">
                
                <motion.header 
                    className="text-center mb-16 pt-4 pb-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-6xl font-black uppercase text-red-500 mb-4 drop-shadow-lg shadow-red-500/30">
                        GameVerse Support
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your portal to quick answers, technical assistance, and community connection.
                    </p>
                </motion.header>


              
                <motion.section 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <SectionHeader 
                        icon={Headset} 
                        title="Contact & Help Desk" 
                        subtitle="We are here to assist you with any questions or issues."
                    />
                    
                    <div className="bg-black/50 p-8 rounded-xl border border-fuchsia-500/20 text-center">
                        <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Email Support</h3>
                        <p className="text-lg text-gray-300 mb-4">
                            For all general inquiries, account assistance, or community feedback, please reach out to us directly:
                        </p>
                        <a 
                            href="mailto:gamverse.bd@gmail.com"
                            className="inline-block text-xl font-extrabold text-red-400 hover:text-red-500 transition-colors duration-200 uppercase tracking-wide"
                        >
                            gamverse.bd@gmail.com
                        </a>
                        <p className="text-sm text-gray-500 mt-4">
                            We aim to respond to all inquiries within 24-48 hours.
                        </p>
                    </div>
                </motion.section>

               
                <motion.section 
                    className="mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <SectionHeader 
                        icon={Wrench} 
                        title="Technical Issues" 
                        subtitle="Before contacting us, try these troubleshooting steps."
                    />
                    
                    <ul className="space-y-6 text-gray-300">
                        <li className="p-4 bg-black/50 rounded-lg border-l-4 border-cyan-400 shadow-lg shadow-black/30">
                            <p className="font-semibold text-lg text-cyan-300">1. Update Your Drivers</p>
                            <p className="text-sm mt-1">Ensure your graphics card and system drivers are the latest versions available from the manufacturer (NVIDIA, AMD, Intel).</p>
                        </li>
                        <li className="p-4 bg-black/50 rounded-lg border-l-4 border-fuchsia-400 shadow-lg shadow-black/30">
                            <p className="font-semibold text-lg text-fuchsia-300">2. Verify Game Files</p>
                            <p className="text-sm mt-1">If using a launcher, use the 'Verify Integrity of Game Files' option to fix corrupted or missing assets automatically.</p>
                        </li>
                        <li className="p-4 bg-black/50 rounded-lg border-l-4 border-red-400 shadow-lg shadow-black/30">
                            <p className="font-semibold text-lg text-red-300">3. Check System Requirements</p>
                            <p className="text-sm mt-1">Confirm that your PC or console meets the minimum (or recommended) requirements for the game you are running.</p>
                        </li>
                    </ul>
                </motion.section>


                {/* --- SECTION: FAQ --- */}
                <motion.section 
                    className="mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <SectionHeader 
                        icon={Shield} 
                        title="Frequently Asked Questions" 
                        subtitle="Quick answers to our most common user inquiries."
                    />
                    
                    <div className="bg-black/50 p-6 rounded-xl border border-cyan-500/20">
                        {faqData.map((faq, index) => (
                            <FAQItem 
                                key={index}
                                index={index}
                                question={faq.question}
                                answer={faq.answer}
                            />
                        ))}
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default SupportPage;