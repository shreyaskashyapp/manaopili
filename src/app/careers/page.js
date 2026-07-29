'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '../components/hero-section';
import Reveal from '../components/reveal';
import { jobOpenings, deptColors } from './jobData';


const heroData = {
  title: 'Careers',
  description: (
    <>
      At <span className="text-[#455CFF]">Mana&apos;o Pili</span>, we believe in finding the{' '}
      <span className="text-[#455CFF]">right talent</span> and empowering{' '}
      <span className="text-[#455CFF]">curious minds</span> and{' '}
      <span className="text-[#455CFF]">strong builders</span> to thrive. If that sounds like you,{' '}
      <span className="text-[#455CFF]">explore our open roles</span>.
    </>
  ),
};


function JobCard({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-[#455CFF]/40 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(69,92,255,0.12)]"
    >
      {/* Corner glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#455CFF] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20"
      />
      <div className="flex items-center justify-start gap-3 mb-5">
        <span className="text-xs text-zinc-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">
          {job.type}
        </span>
      </div>

      <h3 className="text-white font-heading text-xl font-semibold mb-3 transition-colors duration-200 leading-snug">
        {job.title}
      </h3>

      <div className="flex flex-col gap-2 mb-5">
        <div className="flex items-center gap-2 text-zinc-400 text-xs">
          <MapPin size={13} className="shrink-0 text-zinc-500" />
          <span>{job.location}</span>
        </div>
        {job.experienceLevel && (
          <div className="flex items-center gap-2 text-zinc-400 text-xs">
            <Briefcase size={13} className="shrink-0 text-zinc-500" />
            <span>{job.experienceLevel.join(' · ')}</span>
          </div>
        )}
      </div>

      {job.tags?.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-6">
          {job.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] text-zinc-400 bg-white/[0.04] border border-white/[0.08] px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-5 border-t border-white/[0.07]">
        <Link
          href={`/careers/${job.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#455CFF] hover:gap-3 transition-all duration-200"
        >
          View Details
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 group-hover:text-[#deff00] transition-all duration-200"
          />
        </Link>
      </div>
    </motion.div>
  );
}


const Careers = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <HeroSection data={heroData} bgColor="from-[#455CFF] to-[#141414]" bgImage="/digital-assets/palm-trees-long.webp" />

      <section className="container mx-auto px-4 md:px-10 lg:px-20 py-16">
        <Reveal as="h2" className="font-heading text-4xl md:text-5xl text-white mb-10">
          Open Positions
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobOpenings.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;
