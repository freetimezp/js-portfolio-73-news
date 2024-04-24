"use client";
import React, { useState, useEffect } from 'react';
import './style.css';

import Preloader from '@/components/Preloader';
import { initialState } from '@/sections/Posts';
import SidePostItem from '@/components/SidePostItem';

const PostItem = ({ params }: { params: { id: string } }) => {
    const id: string = params.id;

    const [item, setItem] = useState(initialState);
    const [items, setItems] = useState<[] | any>([]);

    const tabsData = [
        { id: 1, name: 'Popular', active: true },
        { id: 2, name: 'Trending', active: false }
    ];

    const [tabs, setTabs] = useState(tabsData);

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err.message));
    };

    const getItemsData = async () => {
        await fetch(`/api/postitems`)
            .then(res => res.json())
            .then(data => setItems(data))
            .catch(err => console.log(err.message));
    };

    const handleTabActive = (id: number): void => {
        setTabs(tabsData.map(tab => {
            tab.active = false;
            if (tab.id === id) {
                tab.active = true;
            }
            return tab;
        }));
    };

    useEffect(() => {
        getSinglePostData();
        getItemsData();
    }, []);

    return (
        <main id='main'>
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 post-content">
                            {item && item.category !== '' ? (
                                <div className="single-post">
                                    <div className="post-meta mb-3">
                                        <span className="date">{item.category}</span>
                                        <span className='mx-1'><i className='bi bi-dot'></i></span>
                                        <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
                                    </div>

                                    <h1 className='mb-5'>{item.title}</h1>

                                    <p>
                                        <span className='firstcharacter'>
                                            {item.brief && item.brief.charAt(0)}
                                        </span>
                                        {item.brief && item.brief.substring(1)}
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                        delectus illum tenetur quia quaerat cupiditate accusantium
                                        perspiciatis inventore corporis quisquam quos natus amet aperiam
                                        laudantium soluta, maiores, optio nulla fugiat illo dolorum
                                        voluptatibus recusandae dicta deleniti animi? Libero ex, minus,
                                        dolores molestias et porro quibusdam, officiis fugiat id iure
                                        consectetur! Temporibus reiciendis expedita neque totam a. Architecto,
                                        suscipit? Quasi hic ipsam obcaecati voluptatem nobis consectetur
                                        quis quos libero fuga. Modi.
                                    </p>

                                    <figure className='my-4'>
                                        <img src={`/${item.img}`} alt="" className='img-fluid' />
                                        <figcaption>
                                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, sunt.
                                        </figcaption>
                                    </figure>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                        delectus illum tenetur quia quaerat cupiditate accusantium
                                        perspiciatis inventore corporis quisquam quos natus amet aperiam
                                        laudantium soluta, maiores, optio nulla fugiat illo dolorum
                                        voluptatibus recusandae dicta deleniti animi? Libero ex, minus,
                                        dolores molestias et porro quibusdam, officiis fugiat id iure
                                        consectetur! Temporibus reiciendis expedita neque totam a. Architecto,
                                        suscipit? Quasi hic ipsam obcaecati voluptatem nobis consectetur
                                        quis quos libero fuga. Modi.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                        delectus illum tenetur quia quaerat cupiditate accusantium
                                        perspiciatis inventore corporis quisquam quos natus amet aperiam
                                        laudantium soluta, maiores, optio nulla fugiat illo dolorum
                                        voluptatibus recusandae dicta deleniti animi? Libero ex, minus,
                                        dolores molestias et porro quibusdam, officiis fugiat id iure
                                        consectetur! Temporibus reiciendis expedita neque totam a. Architecto,
                                        suscipit? Quasi hic ipsam obcaecati voluptatem nobis consectetur
                                        quis quos libero fuga. Modi.
                                    </p>

                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                                        delectus illum tenetur quia quaerat cupiditate accusantium
                                        perspiciatis inventore corporis quisquam quos natus amet aperiam
                                        laudantium soluta, maiores, optio nulla fugiat illo dolorum
                                        voluptatibus recusandae dicta deleniti animi? Libero ex, minus,
                                        dolores molestias et porro quibusdam, officiis fugiat id iure
                                        consectetur! Temporibus reiciendis expedita neque totam a. Architecto,
                                        suscipit? Quasi hic ipsam obcaecati voluptatem nobis consectetur
                                        quis quos libero fuga. Modi.
                                    </p>
                                </div>
                            ) : <Preloader />}
                        </div>
                        <div className="col-md-3">
                            <div className="aside-block">
                                <ul className='nav nav-pills custom-tab-nav mb-4'>
                                    {tabs.map(tab => (
                                        <li key={tab.id} className='nav-item'>
                                            <button
                                                className={`nav-link ${tab.active ? 'active' : undefined}`}
                                                onClick={() => handleTabActive(tab.id)}
                                            >
                                                {tab.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className="tab-content">
                                    <div className={`tab-pane fade ${tabs[0].active ? 'show active' : ''}`}>
                                        {items.slice(0, 6).map((item: any) => (
                                            <SidePostItem key={item._id} item={item} />
                                        ))}
                                    </div>
                                    <div className={`tab-pane fade ${tabs[1].active ? 'show active' : ''}`}>
                                        {items.slice(6, 12).map((item: any) => (
                                            <SidePostItem key={item._id} item={item} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="aside-block">
                                <h3 className='aside-title'>Video</h3>
                                <div className="video-post">
                                    <a href="https://www.youtube.com/watch?v=gE5mE98IdQM" className='link-video'>
                                        <span className='bi-play-fill'></span>
                                        <img src="/assets/img/post-landscape-3.jpg" alt="" className='img-fluid' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PostItem;
