"use client";
import React, { useState, useEffect } from 'react';
import './style.css';
import Image from 'next/image';

const PostItem = ({ params }: { params: { id: string } }) => {
    const id: string = params.id;

    const [item, setItem] = useState<{} | any>({});

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        getSinglePostData();
    }, []);

    return (
        <main id='main'>
            <section className="single-post-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-9 post-content">
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
                                    <Image src={`/${item.img}`} alt="" className='img-fluid' width={100} height={100} layout="responsive" />
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
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default PostItem;
