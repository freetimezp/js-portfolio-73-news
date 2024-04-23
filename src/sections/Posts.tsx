"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './posts.css';

import PostItemOne from '@/components/PostItemOne';
import TrendingPost from '@/components/TrendingPost';
import Preloader from '@/components/Preloader';

const Posts = () => {
    const router = useRouter();

    const [items, setItems] = useState<[] | any>([]);
    const [item, setItem] = useState<{} | any>({});

    const getItemsData = () => {
        fetch(`/api/postitems`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.log(err.message));
    };

    const getSinglePostData = (id: string) => {
        fetch(`/api/postitems/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        try {
            getItemsData();
            getSinglePostData('6626a1e6692bb549ae4751cd');
        } catch (err: any) {
            console.log(err.message);
        }
    }, []);

    return (
        <section id='posts' className='posts'>
            <div className="container" data-aos="fade-up">
                <div className="row g-5">
                    <div className="col-lg-4">
                        <PostItemOne large={true} item={item} />
                    </div>
                    <div className="col-lg-8">
                        <div className="row g-5">
                            <div className="col-lg-4 border-start custom-border">
                                {items && items.length > 0
                                    ? items
                                        .filter((item: { trending: boolean; top: boolean; }) => !item.trending && !item.top)
                                        .slice(0, 3)
                                        .map((item: any, index: number) => (
                                            <PostItemOne key={index} large={false} item={item} />
                                        ))
                                    : <Preloader />}
                            </div>
                            <div className="col-lg-4 border-start custom-border">
                                {items && items.length > 0
                                    ? items
                                        .filter((item: { trending: boolean; top: boolean; }) => !item.trending && !item.top)
                                        .slice(3, 6)
                                        .map((item: any, index: number) => (
                                            <PostItemOne key={index} large={false} item={item} />
                                        ))
                                    : <Preloader />}
                            </div>
                            <div className="col-lg-4">
                                <div className="trending">
                                    <h3>Trending</h3>
                                    <ul className="trending-post">
                                        {items && items.length > 0
                                            ? items
                                                .filter((item: { trending: boolean; }) => item.trending)
                                                .map((item: any, index: number) => (
                                                    <TrendingPost key={index} item={item} index={index} />
                                                ))
                                            : <Preloader />}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Posts;
