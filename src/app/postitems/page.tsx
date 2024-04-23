"use client";
import React, { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import PostItemOne from '@/components/PostItemOne';
import PageTitle from '@/components/PageTitle';

const PostItems = () => {
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
        <main id='main'>
            <section id="posts" className='posts'>
                <div className="container">
                    <div className="row">
                        <PageTitle title={'Related Posts'} />

                        {items && items.length > 0
                            ? items.map((item: any, index: number) => (
                                <div key={index} className='col-lg-3 col-md-6'>
                                    <PostItemOne large={false} item={item} />
                                </div>
                            ))
                            : <Preloader />}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PostItems;
