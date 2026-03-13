'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '../components/hero-section';
import { jobOpenings, deptColors } from './jobData';


const heroData = {
  title: 'Careers',
  description: (
    <>
      At <span className="text-[#DEFF00]">Mana&apos;o Pili</span>, we believe in finding the{' '}
      <span className="text-[#DEFF00]">right talent</span> and empowering{' '}
      <span className="text-[#DEFF00]">curious minds</span> and{' '}
      <span className="text-[#DEFF00]">strong builders</span> to thrive. If that sounds like you,{' '}
      <span className="text-[#DEFF00]">explore our open roles</span>.
    </>
  ),
};


function JobCard({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group bg-gradient-to-br from-zinc-900 to-[#141414] border border-zinc-800 hover:border-[#DEFF00]/40 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(222,255,0,0.07)]"
    >
      <div className="flex items-center justify-start gap-3 mb-5">
        <span className="text-xs text-zinc-400 bg-zinc-800/70 px-3 py-1 rounded-full border border-zinc-700/50 whitespace-nowrap">
          {job.type}
        </span>
      </div>

      <h3 className="text-white font-heading text-xl font-semibold mb-3 group-hover:text-[#DEFF00] transition-colors duration-200 leading-snug">
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
              className="text-[11px] text-zinc-400 bg-zinc-800/60 border border-zinc-700/40 px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto pt-5 border-t border-zinc-800/80">
        <Link
          href={`/careers/${job.id}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#DEFF00] hover:gap-3 transition-all duration-200"
        >
          View Details
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </motion.div>
  );
}


const Careers = () => {
  return (
    <div className="min-h-screen bg-[#141414] text-white">
      <HeroSection data={heroData} bgColor="from-[#455CFF] to-[#141414]" />

      <section className="container mx-auto px-4 md:px-10 lg:px-20 py-16">
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-10">
          Open Positions
        </h2>

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
