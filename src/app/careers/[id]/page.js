'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin, Clock, Briefcase, ArrowLeft, X, Upload,
  DollarSign, Plane, GraduationCap, UserCheck, Award, Star, Layers,
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import axios from 'axios';
import LoadingIndicator from '../../components/loader';
import { jobOpenings, deptColors } from '../jobData';


function ApplicationForm({ jobTitle, onClose, formData, setFormData, resumeFileName, setResumeFileName, resumeInput, isLoading, error, handleSubmit }) {
  function handleInput(e, field) {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  }

  function handleFileUpload(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setResumeFileName(file.name);
    if (
      file.type === 'application/pdf' ||
      file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64Data = reader.result.split(',')[1];
        setFormData((prev) => ({
          ...prev,
          resume: base64Data,
          resumeFileName: file.name,
          resumeMimeType: file.type,
        }));
      };
      reader.onerror = (err) => console.error('File read error:', err);
      reader.readAsDataURL(file);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 16 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-semibold text-white">
              Apply for this Role
            </h2>
            <p className="text-[#DEFF00] text-sm mt-1">{jobTitle}</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-zinc-800 mt-0.5"
            aria-label="Close form"
          >
            <X size={18} />
          </button>
        </div>

        {error && (
          <div className="bg-red-900/40 border border-red-700/60 text-red-300 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Mike Yee"
                onChange={(e) => handleInput(e, 'Name')}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#DEFF00]/60 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                placeholder="mike.yee@manaopili.com"
                onChange={(e) => handleInput(e, 'Email')}
                className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#DEFF00]/60 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Resume / CV *
            </label>
            <div
              onClick={() => resumeInput.current?.click()}
              className="group border border-dashed border-zinc-700 hover:border-[#DEFF00]/50 rounded-xl p-8 text-center cursor-pointer transition-colors duration-200"
            >
              <Upload
                size={22}
                className="text-zinc-500 group-hover:text-[#DEFF00] mx-auto mb-3 transition-colors duration-200"
              />
              <p className="text-sm text-zinc-400">
                {resumeFileName ? (
                  <span className="text-[#DEFF00]">{resumeFileName}</span>
                ) : (
                  <>
                    <span className="text-white font-medium">Click to upload</span>{' '}
                    or drag and drop
                  </>
                )}
              </p>
              <p className="text-xs text-zinc-600 mt-1">PDF or DOCX</p>
              <input
                type="file"
                ref={resumeInput}
                className="hidden"
                accept=".pdf,.docx"
                required
                onChange={handleFileUpload}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
              Cover Note{' '}
              <span className="text-zinc-600 normal-case">(optional)</span>
            </label>
            <textarea
              placeholder="Tell us a bit about yourself and why you're excited about this role…"
              onChange={(e) => handleInput(e, 'message')}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-lg py-3 px-4 text-sm text-white placeholder-zinc-500 min-h-[120px] focus:outline-none focus:border-[#DEFF00]/60 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#DEFF00] text-black py-3.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting…' : 'Submit Application'}
          </button>
        </form>
      </div>
    </motion.div>
  );
}


function SuccessState() {
  return (
    <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-zinc-900 p-10 max-w-md w-full rounded-2xl text-center border border-zinc-800"
      >
        <div className="h-20 w-20 rounded-full bg-[#DEFF00] flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="font-heading text-3xl font-bold mb-3">Application Submitted!</h1>
        <p className="text-gray-300 mb-2 leading-relaxed">
          Thank you for your interest in joining our team. We&apos;ve received your application and will review it shortly.
        </p>
        <p className="text-gray-500 text-sm mb-8">
          If your qualifications match our needs, we&apos;ll be in touch soon.
        </p>
        <Link
          href="/careers"
          className="inline-block bg-white text-black py-3 px-8 rounded-lg font-medium hover:bg-[#DEFF00] transition-colors duration-200"
        >
          Back to Careers
        </Link>
      </motion.div>
    </div>
  );
}


function BulletSection({ title, items }) {
  if (!items?.length) return null;
  return (
    <div>
      <h2 className="font-heading text-2xl font-semibold text-white mb-5">{title}</h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#DEFF00] flex-shrink-0" />
            <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MetaRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[#DEFF00] flex-shrink-0 mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="text-sm text-white leading-snug">{value}</p>
      </div>
    </div>
  );
}


export default function JobDetail() {
  const { id } = useParams();
  const job = jobOpenings.find((j) => j.id === Number(id));

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({});
  const [resumeFileName, setResumeFileName] = useState('');
  const resumeInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef(null);

  function handleApplyClick() {
    if (!showForm) {
      setShowForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    } else {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}job-application`,
        { ...formData, position: job.title },
      );
      if (response.status === 200) {
        setSubmitSuccess(true);
      } else {
        setError('Failed to submit application. Please try again later.');
      }
    } catch (err) {
      console.error('Error submitting application:', err);
      setError('An error occurred while submitting your application. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  if (submitSuccess) return <SuccessState />;

  if (!job) {
    return (
      <div className="min-h-screen bg-[#141414] text-white flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 mb-4">This position could not be found.</p>
          <Link href="/careers" className="text-[#DEFF00] text-sm font-medium hover:underline">
            ← Back to Careers
          </Link>
        </div>
      </div>
    );
  }

  const formProps = {
    jobTitle: job.title,
    onClose: () => setShowForm(false),
    formData, setFormData,
    resumeFileName, setResumeFileName,
    resumeInput,
    isLoading, error,
    handleSubmit,
  };

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-10">
      {isLoading && <LoadingIndicator size="large" color="lime" />}

      <div className="bg-gradient-to-b from-zinc-900/80 to-[#141414] border-b border-zinc-800/50">
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-14">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm mb-6 text-gray-500 hover:text-gray-300 transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            Back to careers 
          </Link>

          {/* 
          <div className="mb-4">
            <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${deptColors[job.dept] ?? 'bg-zinc-800 text-zinc-300 border border-zinc-700'}`}>
              {job.dept}
            </span>
          </div> */}

          <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] text-white leading-tight mb-6 max-w-3xl">
            {job.title}
          </h1>

          <div className="flex flex-wrap items-center gap-5 mb-8">
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <MapPin size={14} className="text-[#DEFF00]" />
              {job.location}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Clock size={14} className="text-[#DEFF00]" />
              {job.type}
            </span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span className="flex items-center gap-1.5 text-sm text-gray-400">
              <Briefcase size={14} className="text-[#DEFF00]" />
              {job.dept}
            </span>
            {job.compensation && (
              <>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span className="flex items-center gap-1.5 text-sm text-[#DEFF00] font-medium">
                  <DollarSign size={14} />
                  {job.compensation}
                </span>
              </>
            )}
          </div>

          <button
            onClick={handleApplyClick}
            className="bg-[#DEFF00] text-black px-8 py-3.5 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200"
          >
            Apply for this Role
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-10 lg:px-20 py-14">
        <div className="grid lg:grid-cols-3 gap-12 xl:gap-16">

          <div className="lg:col-span-2 space-y-12">

            <div>
              <h2 className="font-heading text-2xl font-semibold text-white mb-4">About the Role</h2>
              <p className="text-gray-300 text-sm leading-relaxed">{job.about}</p>
            </div>

            <div className="h-px bg-zinc-800" />
            <BulletSection title="What You'll Do" items={job.responsibilities} />

            <div className="h-px bg-zinc-800" />
            <BulletSection title="What We're Looking For" items={job.requirements} />

            {job.preferred?.length > 0 && (
              <>
                <div className="h-px bg-zinc-800" />
                <BulletSection title="Nice to Have" items={job.preferred} />
              </>
            )}

            {job.certifications?.length > 0 && (
              <>
                <div className="h-px bg-zinc-800" />
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-5">
                    Certifications
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {job.certifications.map((cert, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-zinc-800 text-gray-300 border border-zinc-700"
                      >
                        <Award size={11} className="text-[#DEFF00]" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            )}

            {(job.whyJoin?.length > 0 || job.perks?.length > 0 || job.growth) && (
              <>
                <div className="h-px bg-zinc-800" />
                <div>
                  <h2 className="font-heading text-2xl font-semibold text-white mb-5">Why Join Us</h2>
                  {job.whyJoin?.length > 0 && (
                    <ul className="space-y-3 mb-5">
                      {job.whyJoin.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Star size={13} className="text-[#DEFF00] flex-shrink-0 mt-[3px]" />
                          <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {job.growth && (
                    <p className="text-sm text-gray-400 italic border-l-2 border-[#DEFF00]/40 pl-4">
                      {job.growth}
                    </p>
                  )}
                  {job.perks?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-5">
                      {job.perks.map((perk, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#DEFF00]/10 text-[#DEFF00] border border-[#DEFF00]/20"
                        >
                          {perk}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-5">

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                  Interested?
                </p>
                <h3 className="font-heading text-lg font-semibold text-white mb-2">
                  Ready to apply?
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  Send us your application and let&apos;s start a conversation.
                </p>
                <button
                  onClick={handleApplyClick}
                  className="w-full bg-[#DEFF00] text-black py-3 rounded-lg font-semibold text-sm hover:bg-white transition-colors duration-200"
                >
                  Apply for this Role
                </button>
              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-4">
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Job Details</p>
                <div className="space-y-3">
                  <MetaRow icon={<MapPin size={14} />} label="Location" value={job.location} />
                  <MetaRow icon={<Clock size={14} />} label="Employment" value={job.type} />
                  <MetaRow icon={<Briefcase size={14} />} label="Department" value={job.dept} />
                  {job.compensation && (
                    <MetaRow icon={<DollarSign size={14} />} label="Compensation" value={job.compensation} />
                  )}
                  {job.travel && (
                    <MetaRow icon={<Plane size={14} />} label="Travel" value={job.travel} />
                  )}
                  {job.education && (
                    <MetaRow icon={<GraduationCap size={14} />} label="Education" value={job.education} />
                  )}
                  {job.eligibility && (
                    <MetaRow icon={<UserCheck size={14} />} label="Eligibility" value={job.eligibility} />
                  )}
                </div>
              </div>

              {job.experienceLevel?.length > 0 && (
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Layers size={13} className="text-[#DEFF00]" />
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience Levels
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    {job.experienceLevel.map((level, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1.5 rounded-full bg-zinc-800 text-gray-300 border border-zinc-700 text-center"
                      >
                        {level}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        <div ref={formRef} className="mt-20 scroll-mt-10">
          <AnimatePresence>
            {showForm && <ApplicationForm {...formProps} />}
          </AnimatePresence>
        </div>

        <div className="mt-16 pt-10 border-t border-zinc-800">
          <Link
            href="/careers"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#DEFF00] transition-colors duration-200"
          >
            <ArrowLeft size={14} />
            View all open positions
          </Link>
        </div>
      </div>
    </div>
  );
}
