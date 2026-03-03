import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";

const teamMembers = [
  { name: "Yash Lohia", role: "President", avatar: "🎯", linkedin: "https://linkedin.com/in/yashlohia03", quote: "Dream big, build bigger." },
  { name: "Kushagra Jindal", role: "Vice President", avatar: "⚡", linkedin: "https://www.linkedin.com/in/kushagra-jindal-8a5b9b27b/", quote: "Energy is contagious — bring yours." },
  { name: "Nidhish Bansal", role: "General Secretary", avatar: "💻", linkedin: "https://www.linkedin.com/in/nidhish-bansal-906a83298/", quote: "Code is poetry in motion." },
  { name: "Taniya Pawar", role: "Joint Secretary", avatar: "✍️", linkedin: "https://www.linkedin.com/in/taniya-pawar-212a651a0/", quote: "Create what inspires you." },
  { name: "Shubham Jha", role: "Design Head", avatar: "🎨", linkedin: "https://www.linkedin.com/in/shubham-jha-a37a49263?utm_source=share_via&utm_content=profile&utm_medium=member_android", quote: "Design is thinking made visual." },
  { name: "Vansh Jain", role: "Events Head", avatar: "🎪", linkedin: "https://www.linkedin.com/in/vansh-jain-5a9962310/", quote: "Every event tells a story." },
  { name: "Ayush Pratap Singh", role: "PR Lead", avatar: "📢", linkedin: "https://www.linkedin.com/in/ayush-pratap-singh-2a302b379/", quote: "Words that move people." },
  { name: "Shourya Aggarwal", role: "Social Media", avatar: "📱", linkedin: "https://www.linkedin.com/in/shourya-agrawal-09053a291/", quote: "Connect, engage, repeat." },
];

const Team = () => {
  return (
    <Layout>
      <section className="py-24 px-6 min-h-screen">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="font-display text-4xl md:text-5xl font-black text-center glow-cyan text-primary mb-4 tracking-wider">
              OUR TEAM
            </h1>
            <p className="text-center text-muted-foreground font-body text-lg mb-16 max-w-xl mx-auto">
              The brilliant minds driving Under25 forward
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1}>
                <div className="perspective-1000 group">
                  <div className="relative preserve-3d transition-transform duration-700 group-hover:[transform:rotateY(180deg)]" style={{ minHeight: "280px" }}>
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden glass rounded-lg p-8 flex flex-col items-center justify-center glow-border-cyan">
                      <span className="text-5xl mb-4">{member.avatar}</span>
                      <h3 className="font-display text-lg font-bold text-foreground">{member.name}</h3>
                      <p className="font-body text-primary text-sm tracking-wider">{member.role}</p>
                    </div>
                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden [transform:rotateY(180deg)] glass rounded-lg p-6 flex flex-col items-center justify-center glow-border-purple">
                      <p className="font-body text-muted-foreground text-center italic text-sm mb-4">"{member.quote}"</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        in
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
