import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import LoadingIndicator from './loader';

const BlogsEmailCollection = ({ onGettingEmail }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        const { email, OrganizationName } = data;
        try {
            const response = await fetch('https://manaopili-dashboard.vercel.app/api/data-collection', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ data }),
            });

            if (response.ok) {
                setIsLoading(false);
                onGettingEmail(email, OrganizationName);
            } else {
                console.error('Error submitting form:', response.statusText);
                setIsLoading(false);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center mt-40 w-full">
                <div className='md:text-[50px] text-4xl leading-[55px] text-body-text font-normal pb-3'>Take a look at our articles </div>
            </div>
            {isLoading && <LoadingIndicator size='large' color='lime'/>}
            <div className='md:text-[26px] text-lg px-10 text-[#DEFF00] text-center font-tahoma leading-normal'>
                Fill out your email address to access our articles.
            </div>
            <div className='lg:flex justify-center px-6 md:pt-16 pb-36'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col'>
                        <input
                            type="email"
                            placeholder="Email Address*"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email address',
                                },
                            })}
                            className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.email ? "border-yellow-text" : ""}`}
                        />
                        {errors.email && <span className="text-yellow-text p-5 text-[16px]">{errors.email.message}</span>}
                    </div>
                    <div className='flex flex-col'>
                        <input
                            type="text"
                            placeholder="Organization Name*"
                            {...register('OrganizationName', {
                                required: 'Organization Name is required',
                            })}
                            className={`mt-6 border bg-transparent p-5 lg:w-[905px] xs:w-full h-[62px] rounded-[31px] md:text-[36px] xs:text-[22px] italic leading-[39px] font-light placeholder-body-text ${errors.OrganizationName ? "border-yellow-text" : ""}`}
                        />
                        {errors.OrganizationName && <span className="text-yellow-text p-5 text-[16px]">{errors.OrganizationName.message}</span>}
                    </div>
                    <div className="flex justify-center mt-[70px]">
                        <button
                            type="submit"
                            className=" text-black tracking-[1.5px] text-[30px] leading-9 py-[10px] px-11 bg-[#DEFF00] transition duration-300 ease-in-out sm:w-[392px] xs:w-[250px] sm:justify-start xs:justify-center h-[62px] rounded-full"
                        >
                            NEXT
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BlogsEmailCollection;