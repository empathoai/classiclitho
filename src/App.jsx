import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionLabel = ({ number, label }) => (
  <motion.span
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.2 }}
    className="text-accent text-[12px] md:text-[13px] uppercase tracking-label font-bold mb-10 block"
  >
    {number && <span className="mr-2 opacity-50">{number}.</span>}
    {label}
  </motion.span>
);

const FadeInSection = ({ children, delay = 0, direction = "up" }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
    none: {}
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

const StaggerContainer = ({ children, delay = 0 }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.15,
          delayChildren: delay,
        }
      }
    }}
  >
    {children}
  </motion.div>
);

const StaggerItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 15 },
      show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } }
    }}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <motion.div
    initial={{ scaleX: 0, opacity: 0 }}
    whileInView={{ scaleX: 1, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    className="h-[1px] bg-divider w-full my-16 md:my-24"
  />
);

export default function App() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-surface text-primary font-sans">
      {/* 1 & 2. HERO / INSIGHT WITH BACKGROUND */}
      <section className="relative overflow-hidden">
        {/* Background Image Integration - Subtle Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <img
            src="/hero-bg.png"
            alt=""
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-[#0B0B0C]/40" />
        </motion.div>

        <div className="max-w-[1200px] mx-auto px-6 pt-16 sm:px-12 sm:pt-24 md:px-24 md:pt-32 relative z-10">
          {/* 1. HEADER / BRAND - Strict Branding Compliance */}
          <header className="mb-32 md:mb-48 flex justify-between items-start">
            <FadeInSection direction="none">
              <div className="flex flex-col items-start w-fit">
                <img
                  src="/empathoai-logo.svg"
                  alt="EmpathoAI Growth Architecture"
                  className="h-16 md:h-24 w-auto object-contain"
                />
              </div>
            </FadeInSection>

            <FadeInSection direction="none" delay={0.2}>
              <div className="flex flex-col items-end text-right">
                <img
                  src="https://classiclitho.com/wp-content/uploads/2018/10/Classic-Logo-Web-White-2018.png"
                  alt="Classic Litho"
                  className="h-20 md:h-32 w-auto object-contain opacity-90"
                />
              </div>
            </FadeInSection>
          </header>

          {/* 2. HERO / INSIGHT */}
          <div className="mb-12">
            <FadeInSection delay={0.4}>
              <SectionLabel number="01" label="INSIGHT" />
              <h1 className="text-[42px] sm:text-[54px] md:text-[68px] font-bold leading-[0.95] text-primary mb-10 max-w-[900px] tracking-tighter">
                Strong production doesn’t always get paid what it’s worth.
              </h1>
              <p className="text-[14px] md:text-[16px] text-accent tracking-meta font-bold uppercase">
                Strategic Growth Diagnosis: Classic Litho.
              </p>
            </FadeInSection>
          </div>
        </div>
      </section>

    <main className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-24">
      {/* 02. CONTEXT */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="02" label="CONTEXT" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>In companies with advanced production, growth often depends on individual relationships instead of <span className="text-accent font-medium">repeatable ways to win new work</span></span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>When this happens, value is explained late in the sales process instead of being <span className="text-accent font-medium">clear from the start</span></span>
          </p>
        </div>
      </section>

      {/* 03. VALIDATION */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="03" label="VALIDATION" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Working with brands like <span className="text-accent font-medium">Coca-Cola, Toyota, and AT&T</span></span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Operating high-end industrial print infrastructure (G7, Heidelberg XL series)</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Delivering consistent results at national scale across multiple logistics nodes</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Certifications: <span className="text-accent font-medium">G7 Master, FSC, WBENC</span></span>
          </p>
        </div>
      </section>

      {/* 04. WHY THIS MATTERS */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="04" label="WHY THIS MATTERS" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Companies rarely lose business for lack of production quality</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>They lose leverage when the market doesn’t understand the <span className="text-accent font-medium">technical risk</span> of choosing someone else</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>This creates room for <span className="text-accent font-medium">price comparison</span> instead of value selection</span>
          </p>
        </div>
      </section>

      {/* 05. DIAGNOSIS */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="05" label="DIAGNOSIS" />
        <div className="space-y-12">
          <div>
            <h3 className="text-accent tracking-meta text-[14px] mb-4 font-bold">A.</h3>
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
              <span className="text-white font-bold">Revenue Gap:</span> Production capability appears stronger than current commercial presentation. This gap reduces <span className="text-accent font-medium">captured value</span>.
            </p>
          </div>
          <div>
            <h3 className="text-accent tracking-meta text-[14px] mb-4 font-bold">B.</h3>
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
              <span className="text-white font-bold">Value Visibility:</span> Technical differentiation is not clear early. Buyers compare prices before <span className="text-accent font-medium">understanding risk</span>.
            </p>
          </div>
          <div>
            <h3 className="text-accent tracking-meta text-[14px] mb-4 font-bold">C.</h3>
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
              <span className="text-white font-bold">Price Pressure:</span> If value must be explained inside the sales conversation, price becomes <span className="text-accent font-medium">difficult to defend</span>.
            </p>
          </div>
        </div>
      </section>

      {/* 06. ANALYSIS */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="06" label="ANALYSIS" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Production capability is <span className="text-accent font-medium">not fully reflected</span> in how work is won</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Value is communicated <span className="text-accent font-medium">later than it should be</span></span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>There is <span className="text-accent font-medium">no clear method</span> to consistently win the ideal type of client</span>
          </p>
        </div>
      </section>

      {/* 07. CONSEQUENCE */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="07" label="CONSEQUENCE" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
            This is where strong work is <span className="text-accent font-medium">undervalued</span>.
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
            This is where deals <span className="text-accent font-medium">take longer</span> than they should.
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body">
            This is where <span className="text-accent font-medium">price</span> becomes the deciding factor.
          </p>
        </div>
      </section>

      {/* 08. ELIMINATION */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="08" label="ELIMINATION" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>This is not a marketing problem</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>It is not a sales problem</span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>It is <span className="text-accent font-medium">how buyers understand your value</span> before deciding</span>
          </p>
        </div>
      </section>

      {/* 09. OPPORTUNITY */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="09" label="OPPORTUNITY" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Value is <span className="text-accent font-medium">clear before the first interaction</span></span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>The right clients <span className="text-accent font-medium">move faster</span></span>
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
            <span className="text-accent mr-4 opacity-40">—</span>
            <span>Decisions happen <span className="text-accent font-medium">without price pressure</span></span>
          </p>
        </div>
      </section>

      {/* 10. CLOSING */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="10" label="CLOSING" />
        <div className="max-w-2xl space-y-8">
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body/80">
            In most cases, this doesn’t show up as a clear problem.
          </p>
          <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body/80">
            It shows up as <span className="text-accent font-medium">revenue that never gets captured</span>.
          </p>
        </div>
      </section>

      {/* 11. WHAT WE WOULD MAP */}
      <section className="mb-24 md:mb-32">
        <SectionLabel number="11" label="WHAT WE WOULD MAP" />
        <div className="space-y-8">
          <p className="text-[18px] md:text-[24px] font-bold leading-relaxed text-white">
            Identify:
          </p>
          <div className="space-y-8">
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
              <span className="text-accent mr-4 opacity-40">—</span>
              <span>Where <span className="text-accent font-medium">price pressure</span> is created</span>
            </p>
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
              <span className="text-accent mr-4 opacity-40">—</span>
              <span>Where <span className="text-accent font-medium">opportunities slow down</span></span>
            </p>
            <p className="text-[18px] md:text-[24px] font-normal leading-relaxed text-body flex items-start">
              <span className="text-accent mr-4 opacity-40">—</span>
              <span>Where <span className="text-accent font-medium">full value</span> is not captured</span>
            </p>
          </div>
        </div>
      </section>

      {/* 12. DECISION */}
      <section className="pb-32">
        <SectionLabel number="12" label="DECISION" />
        <div className="max-w-2xl">
          <motion.a 
            href="https://empathoai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
            whileHover={{ x: 10 }}
          >
            <h2 className="text-[28px] md:text-[42px] font-normal leading-tight text-accent transition-colors duration-300">
              See Where Revenue Is Being Left on the Table.
            </h2>
            <div className="mt-4 h-[1px] w-full bg-accent/20 group-hover:bg-accent transition-colors duration-300" />
          </motion.a>
        </div>
      </section>
    </main>

    <footer className="max-w-[1200px] mx-auto px-6 sm:px-12 md:px-24 pb-16">
      <div className="flex flex-col items-start space-y-4 text-secondary/60 text-[12px] md:text-[13px] uppercase tracking-meta font-normal">
        <div className="flex items-center space-x-4">
          <span className="w-8 h-[1px] bg-accent"></span>
          <span>Prepared by EmpathoAI</span>
        </div>
        <div className="opacity-40 pl-12 font-light">Strategic Audit // April 2026</div>
      </div>
    </footer>
    </div>
  );
}
