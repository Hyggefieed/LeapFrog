import React, { useState, useEffect } from 'react';
import { Check, Zap, Shield, Clock, Brain, Target, Eye, Activity, GitBranch, ArrowRight, Terminal, Code2, Cpu, Network } from 'lucide-react';

export default function LeapFrogLanding() {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [codeLines, setCodeLines] = useState([]);
  const [deploymentStatus, setDeploymentStatus] = useState('analyzing');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const lines = [
      { text: '$ leapfrog deploy --branch main', delay: 0, color: 'text-green-400' },
      { text: '> Analyzing code changes...', delay: 800, color: 'text-blue-400' },
      { text: '✓ Risk assessment complete', delay: 1600, color: 'text-green-400' },
      { text: '> Selecting deployment strategy: Canary', delay: 2400, color: 'text-purple-400' },
      { text: '> Traffic window identified: 2:34 AM UTC', delay: 3200, color: 'text-yellow-400' },
      { text: '✓ Deployment successful (0 errors)', delay: 4000, color: 'text-green-400' }
    ];

    lines.forEach((line, i) => {
      setTimeout(() => {
        setCodeLines((prev) => [...prev, line]);
      }, line.delay);
    });

    const statusInterval = setInterval(() => {
      setDeploymentStatus((prev) => {
        if (prev === 'analyzing') return 'deploying';
        if (prev === 'deploying') return 'success';
        return 'analyzing';
      });
    }, 4000);

    return () => clearInterval(statusInterval);
  }, []);

  const logos = [
    { name: 'AWS', width: 'w-6' },
    { name: 'Cloud', width: 'w-16' },
    { name: 'Kubernetes', width: 'w-16' },
    { name: 'GitHub', width: 'w-16' },
    { name: 'Docker', width: 'w-16' },
    { name: 'Prometheus', width: 'w-20' },
    { name: 'Slack', width: 'w-16' },
    { name: 'Terraform', width: 'w-18' }
  ];

  const steps = [
    {
      number: '01',
      title: 'Connect Your Pipeline',
      body: 'Link your repository in one click. LeapFrog sits silently on top of your existing CI/CD, watching every Pull Request without changing your current workflow.',
      icon: GitBranch
    },
    {
      number: '02',
      title: 'Agents Analyze & Plan',
      body: 'Our agents scan code for logic flaws and check your live server health. They suggest the perfect "Canary" strategy based on real-time traffic patterns.',
      icon: Cpu
    },
    {
      number: '03',
      title: 'Autonomous Launch',
      body: 'Sit back. LeapFrog executes the rollout. If errors spike, the "Kill Switch" triggers an instant rollback before a single customer notices.',
      icon: Zap
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: '99.99% Guaranteed Deployment Safety',
      description: 'Never break production again. Our Observability-Guard acts faster than any human engineer could, killing bad deploys in milliseconds.',
      stat: '< 1ms',
      statLabel: 'Rollback Time'
    },
    {
      icon: Zap,
      title: 'Accelerated Developer Velocity',
      description: 'Remove the "Manual Gate" bottleneck. Let AI handle the risk assessment so your team can focus on building, not babysitting pipelines.',
      stat: '10x',
      statLabel: 'Faster Deploys'
    },
    {
      icon: Clock,
      title: 'AI-Driven "Perfect Window" Timing',
      description: 'Don\'t deploy during peak traffic. Our Traffic-Warden identifies the lowest-risk moments to push updates, ensuring minimal user impact.',
      stat: '99.9%',
      statLabel: 'Uptime SLA'
    }
  ];

  const agents = [
    {
      icon: Brain,
      name: 'The Detective',
      role: 'Code-Risk Agent',
      subtitle: 'Semantic PR Analysis',
      description: 'It doesn\'t just check for syntax; it understands the intent of your code and flags fragile logic before it leaves the dev environment.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      name: 'The Pilot',
      role: 'Strategy-Planner Agent',
      subtitle: 'Orchestration & Rollout',
      description: 'Automatically chooses between Canary, Blue-Green, or Rolling updates based on the risk score and infrastructure state.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Activity,
      name: 'The Controller',
      role: 'Traffic-Warden Agent',
      subtitle: 'Environmental Awareness',
      description: 'Constantly monitors global traffic, server latency, and business KPIs to find the safest window for deployment.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Eye,
      name: 'The Sentinel',
      role: 'Observability-Guard Agent',
      subtitle: 'Real-time Self-Healing',
      description: 'The 24/7 guardian. It watches the live launch and executes 1-second rollbacks the moment an anomaly is detected.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Cursor Glow */}
      <div 
        className="fixed w-96 h-96 pointer-events-none z-50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(74, 222, 128, 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(74, 222, 128, 0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74, 222, 128, 0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 `w-200` `h-200` pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.12) 0%, transparent 70%)',
            filter: 'blur(100px)'
          }}
        />
        
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <div className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 border border-green-400/30 rounded-full bg-green-400/5 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Deployment Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1]">
            Ship with{' '}
            <span className="text-green-400 inline-block hover:scale-105 transition-transform">
              Certainty
            </span>
            <br />
            Deploy with{' '}
            <span className="bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform">
              Agents
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto">
            Stop "pushing and praying." LeapFrog uses a multi-agent AI mesh to predict deployment risks, 
            optimize launch timing, and protect your uptime with autonomous rollbacks.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group px-10 py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/20 flex items-center justify-center gap-2">
              Get Started for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-4 border border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center gap-2">
              <Terminal className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
          
          <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mb-20">
            <Check className="w-4 h-4 text-green-400" />
            No credit card required • Works with GitHub, GitLab, and Bitbucket
          </p>

          {/* Code Terminal Animation */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-green-400/20 via-transparent to-blue-400/20 rounded-2xl blur-3xl" />
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 ml-4 font-mono">terminal</span>
                <div className="ml-auto flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${
                    deploymentStatus === 'analyzing' ? 'bg-blue-400' :
                    deploymentStatus === 'deploying' ? 'bg-yellow-400' :
                    'bg-green-400'
                  } animate-pulse`} />
                  <span className="text-xs text-gray-400 font-mono capitalize">{deploymentStatus}</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm space-y-2 min-h-75">
                {codeLines.map((line, i) => (
                  <div key={i} className={`${line.color} flex items-center gap-2 animate-fade-in`}>
                    {line.text.includes('✓') && <Check className="w-4 h-4" />}
                    {line.text}
                  </div>
                ))}
                <div className="flex items-center gap-2 text-green-400 animate-pulse">
                  <span>▊</span>
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-gray-900/90 backdrop-blur-xl border border-green-400/30 rounded-xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-bold text-green-400">99.99%</div>
              <div className="text-xs text-gray-400 font-mono">Success Rate</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-gray-900/90 backdrop-blur-xl border border-blue-400/30 rounded-xl px-6 py-4 shadow-lg">
              <div className="text-3xl font-bold text-blue-400">&lt; 1ms</div>
              <div className="text-xs text-gray-400 font-mono">Rollback Time</div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">99.99%</div>
              <div className="text-sm text-gray-500">Success Rate</div>
            </div>
            <div className="text-center border-x border-gray-800">
              <div className="text-4xl font-bold text-blue-400 mb-2">&lt; 1ms</div>
              <div className="text-sm text-gray-500">Rollback Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">10x</div>
              <div className="text-sm text-gray-500">Faster Deploys</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="relative py-24 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center text-gray-500 text-sm font-mono uppercase tracking-wider mb-16 flex items-center justify-center gap-2">
            <Network className="w-4 h-4" />
            Seamlessly integrates with the tools you already trust
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-16">
            {logos.map((logo, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredLogo(i)}
                onMouseLeave={() => setHoveredLogo(null)}
                className={`${logo.width} h-14 flex items-center justify-center transition-all duration-300 cursor-pointer group`}
              >
                <div 
                  className={`text-2xl font-bold transition-all duration-300 relative ${
                    hoveredLogo === i ? 'text-green-400 scale-110' : 'text-gray-600'
                  }`}
                >
                  {logo.name}
                  {hoveredLogo === i && (
                    <div className="absolute inset-0 bg-green-400/20 blur-xl rounded-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 rounded-full bg-green-400/5 backdrop-blur-sm mb-6">
              <Code2 className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-mono">Simple Integration</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How It <span className="text-green-400">Works</span>
            </h2>
            <p className="text-xl text-gray-400">The 3-Step Loop to Fearless Deployment</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-green-400/50 to-transparent" />
            
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative p-8 rounded-2xl border transition-all duration-500 backdrop-blur-sm ${
                  activeStep === i 
                    ? 'border-green-400 bg-linear-to-br from-green-400/10 to-transparent shadow-lg shadow-green-400/20' 
                    : 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="text-6xl font-bold text-green-400/20">{step.number}</div>
                  <div className={`p-3 rounded-xl transition-all duration-300 ${
                    activeStep === i ? 'bg-green-400/20' : 'bg-gray-800/50'
                  }`}>
                    <step.icon className={`w-6 h-6 transition-colors duration-300 ${
                      activeStep === i ? 'text-green-400' : 'text-gray-600'
                    }`} />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.body}</p>
                
                {activeStep === i && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                    <div className="w-14 h-1 bg-green-400 rounded-full animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="relative py-32 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 rounded-full bg-green-400/5 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-mono">Enterprise Grade</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Why <span className="text-green-400">LeapFrog</span>?
            </h2>
            <p className="text-xl text-gray-400">Built for teams who can't afford downtime</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-green-400 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-linear-to-br from-green-400/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <benefit.icon className="w-12 h-12 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                    <div className="text-right">
                      <div className="text-3xl font-bold text-green-400">{benefit.stat}</div>
                      <div className="text-xs text-gray-500 font-mono">{benefit.statLabel}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Spotlight */}
      <section className="relative py-32 px-6 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-400/30 rounded-full bg-green-400/5 backdrop-blur-sm mb-6">
              <Cpu className="w-4 h-4 text-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-mono">Multi-Agent System</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Meet the <span className="text-green-400">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-400">Four AI agents working in perfect harmony</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {agents.map((agent, i) => (
              <div
                key={i}
                className="group relative p-8 rounded-2xl border border-gray-800 bg-gray-900/30 hover:border-green-400 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${agent.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`p-4 rounded-xl bg-linear-to-br ${agent.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}>
                      <agent.icon className="w-8 h-8 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1 group-hover:text-green-400 transition-colors duration-300">
                        {agent.name}
                      </h3>
                      <p className="text-green-400 font-mono text-sm">{agent.role}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-gray-500 text-sm font-mono uppercase tracking-wider">
                      {agent.subtitle}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">{agent.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Example Section */}
      <section className="relative py-32 px-6 border-t border-gray-800/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Integration in <span className="text-green-400">30 Seconds</span>
            </h2>
            <p className="text-xl text-gray-400">One command to rule them all</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-green-400/10 via-transparent to-blue-400/10 rounded-2xl blur-3xl" />
            <div className="relative bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-6 py-4 bg-gray-800/50 border-b border-gray-700">
                <Terminal className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-400 font-mono">Quick Start</span>
              </div>
              <div className="p-8 font-mono text-sm space-y-4">
                <div className="text-gray-500"># Install LeapFrog CLI</div>
                <div className="text-green-400">$ npm install -g @leapfrog/cli</div>
                
                <div className="text-gray-500 mt-6"># Connect your repository</div>
                <div className="text-blue-400">$ leapfrog init</div>
                
                <div className="text-gray-500 mt-6"># Deploy with confidence</div>
                <div className="text-purple-400">$ leapfrog deploy --auto</div>
                
                <div className="mt-8 p-4 bg-green-400/10 border border-green-400/30 rounded-lg">
                  <div className="text-green-400 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>✨ That's it! Your AI agents are now watching.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 px-6 border-t border-gray-800/50">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-green-400/5 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Ready to Deploy with <span className="text-green-400">Confidence</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Join the teams who never worry about Friday deployments
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group px-10 py-5 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-400/30 flex items-center gap-3">
              Get Started for Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 border border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
}