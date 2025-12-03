"use client"
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { COMPONENTS } from '../components/constants';
import axios from 'axios';
import { notFound } from 'next/navigation';

export default function Canvas() {
    const params = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    const router = useRouter()

    const flattenProps = (props) => {
        const flattened = {};
        for (const key in props) {
            if (props[key] && typeof props[key] === 'object' && 'value' in props[key]) {
                flattened[key] = props[key].value;
            } else {
                flattened[key] = props[key];
            }
        }
        return flattened;
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(`${process.env.NEXT_PUBLIC_NEST_BACKEND_URL}/microsite-generator/get-page?slug=${params.microsite}`);
                if (res?.data?.success) {
                    setData(res?.data?.data?.data);
                } else {
                    router.push('/not-found')
                }
            } catch (err) {
                console.error("Error loading microsite:", err);
                router.push('/not-found')
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [params.microsite]);

    if (loading || !data?.length) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-[#141414]">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                </div>
            </div>
        );
    }

    return (
        <div>
            {
                data?.map((item, index) => (
                    <div key={index}>
                        {
                            COMPONENTS?.[item?.element]?.(
                                { ...flattenProps(item?.props) },
                                `${item?.element}-${index}`
                            )
                        }
                    </div>
                ))
            }
        </div>
    );
}