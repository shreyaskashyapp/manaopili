'use client';  

import React, { useRef, useState } from 'react';
import LoadingIndicator from '../components/loader';
import HeroSection from '../components/hero-section';

const fieldsWithTypes = [
  { name: "Name", type: "text", placeholder: "Enter your full name", isRequired: true },
  { name: "Email", type: "email", placeholder: "Enter your email address", isRequired: true },
];

const data = {
    title: "Careers",
    description: (
        <>
            We're always looking for <span className="text-[#deff00]">talented</span> individuals to join our team. Submit your <span className="text-[#deff00]">resume</span> for future consideration.


        </>
    )
}

const Careers = () => {
  const [formData, setFormData] = useState({});
  const [resumeFileName, setResumeFileName] = useState('');
  const resumeInput = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState(null);

  function handleInput(event, type) {
    setFormData({...formData, [type]: event?.target?.value});
  }
  
  function handleFileUpload(event) {
    const file = event.target.files?.[0];
    
    if (file) {
      setResumeFileName(file.name);
      
      if (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        const reader = new FileReader();
        
        reader.onload = () => {
          const base64String = reader.result;
          const base64Data = base64String.split(',')[1];
          
          setFormData({
            ...formData,
            resume: base64Data
          });
        };
        
        reader.onerror = (error) => {
          console.error("Error converting file to base64:", error);
        };
        
        reader.readAsDataURL(file);
      } else {
        console.error("Please upload a PDF or DOCX file");
        setError("Please upload a PDF or DOCX file");
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    
    try {
      const response = await fetch('https://manaopili-dashboard.vercel.app/api/job-application', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if(response.ok) {
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

  function handleNewSubmission() {
    setSubmitSuccess(false);
    setFormData({});
    setResumeFileName('');
    setError(null);
  }

  const SuccessPage = () => (
    <div className="bg-zinc-900 text-white p-8 max-w-3xl mx-auto rounded-lg text-center">
      <div className="mb-6 flex justify-center">
        <div className="h-24 w-24 rounded-full bg-[#DEFF00] flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4">Application Submitted!</h1>
      <p className="text-lg mb-8 text-gray-300">
        Thank you for your interest in joining our team. We've received your application and will review it shortly.
      </p>
      <p className="text-md mb-8 text-gray-400">
        If your qualifications match our needs, we'll be in touch with you soon.
      </p>
      <button
        onClick={handleNewSubmission}
        className="bg-[#DEFF00] text-black py-3 px-6 rounded-md font-medium inline-block mt-4 hover:bg-yellow-400 transition-colors"
      >
        Submit Another Application
      </button>
    </div>
  );

  return (
    <div>
      {isLoading && <LoadingIndicator size='large' color='lime'/>}
      <div className="min-h-screen bg-[#141414] text-white">
      <HeroSection data={data}/>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">  
            {submitSuccess ? (
              <SuccessPage />
            ) : (
              <div className="bg-zinc-900 text-white p-8 max-w-3xl mx-auto rounded-lg">
                <h1 className="text-3xl font-bold mb-8">Submit Your Application</h1>
                {error && (
                  <div className="bg-red-900/50 border border-red-500 text-red-100 px-4 py-3 rounded mb-6">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit}>
                  {fieldsWithTypes.map((field) => (
                    <div key={field.name} className="mb-6">
                      <label className="block mb-2">{`${field.name} ${field.isRequired ? '*' : ''}`}</label>
                      <input
                        onChange={(event) => handleInput(event, field.name)}
                        type={field.type}
                        required={field.isRequired}
                        placeholder={field.placeholder}
                        className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 mb-2 focus:outline-none focus:border-[#DEFF00] transition-colors"
                      />
                    </div>
                  ))}
                  <div className="mb-6">
                    <label className="block mb-2">Resume (PDF or DOCX) *</label>
                    <div className="border border-gray-600 border-dashed rounded-md p-6 text-center cursor-pointer hover:border-[#DEFF00] transition-colors">
                      <div className="flex flex-col items-center" onClick={() => resumeInput.current && resumeInput.current.click()}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#DEFF00] mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p>{resumeFileName || 'Click to upload or drag and drop'}</p>
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
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2">Message (Optional)</label>
                    <textarea
                      placeholder="Tell us a bit about yourself and why you're interested in joining our team"
                      className="w-full bg-transparent border border-gray-600 rounded-md py-3 px-4 min-h-32 focus:outline-none focus:border-[#DEFF00] transition-colors"
                      onChange={(event) => handleInput(event, 'message')}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#DEFF00] text-black py-4 rounded-md font-medium flex justify-center items-center mt-6 hover:bg-yellow-300 transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
     </div>
  );
};

export default Careers;