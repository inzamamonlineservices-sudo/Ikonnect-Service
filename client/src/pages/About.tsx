import { Users, Target, Eye, Award } from "lucide-react";

export default function About() {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in digital transformation and AI innovation.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technical expert specializing in AI, machine learning, and scalable web architectures.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c647?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Marketing",
      bio: "Growth strategist with proven track record in digital marketing and brand building.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to deliver solutions that push boundaries and create competitive advantages.",
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We measure our achievements by the measurable impact we create for your business.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Clear communication, honest reporting, and open collaboration form the foundation of our relationships.",
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-24 hero-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">About Ikonnect Service</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're a team of passionate innovators dedicated to transforming businesses through cutting-edge digital solutions. Since our founding, we've helped over 500 companies achieve remarkable growth through AI, automation, and strategic digital transformation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">
                <span className="text-gradient">Our Mission</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To empower businesses of all sizes with innovative digital solutions that drive measurable growth, enhance operational efficiency, and create lasting competitive advantages in an increasingly digital world.
              </p>
              <p className="text-lg text-gray-300">
                We believe that every business deserves access to cutting-edge technology, regardless of size or industry. Our mission is to democratize AI and automation, making these powerful tools accessible and impactful for all our clients.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To become the leading global partner for businesses seeking digital transformation, known for our innovative solutions, exceptional results, and unwavering commitment to client success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Leading AI innovation in business applications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Expanding globally while maintaining personal service</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-400 rounded-full"></div>
                  <span className="text-sm text-gray-300">Setting new standards for digital transformation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-accent-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Leadership Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionaries and experts leading Ikonnect Service into the future
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="gradient-border mb-6 inline-block">
                  <div className="gradient-border-content p-2">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover mx-auto"
                      data-testid={`img-team-${index}`}
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white" data-testid={`text-team-name-${index}`}>
                  {member.name}
                </h3>
                <p className="text-accent-400 font-medium mb-4" data-testid={`text-team-role-${index}`}>
                  {member.role}
                </p>
                <p className="text-gray-300" data-testid={`text-team-bio-${index}`}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Our Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-projects-delivered">
                500+
              </div>
              <p className="text-gray-300">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-client-satisfaction">
                98%
              </div>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-average-roi">
                300%
              </div>
              <p className="text-gray-300">Average ROI</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-4" data-testid="stat-years-experience">
                10+
              </div>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
