"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './posts.css';

import PostItemOne from '@/components/PostItemOne';

const Posts = () => {
    const router = useRouter();

    const [items, setItems] = useState<[] | any>([]);

    const getItemsData = () => {
        fetch(`/api/postitems`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getItemsData();
    }, []);

    return (
        <section id='posts' className='posts'>
            <div className="container" data-aos="fade-up">
                <div className="row g-5">
                    <div className="col-lg-4">

                    </div>
                    <div className="col-lg-8">
                        <div className="row g-5">
                            <div className="col-lg-4 border-start custom-border">
                                {items && items.length > 0 && items.map((item: any, index: number) => (
                                    <PostItemOne key={index} large={false} item={item} />
                                ))}
                            </div>
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Posts;
