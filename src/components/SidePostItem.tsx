"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SidePostItem = ({ item }: any) => {

    return (
        <div className='post-entry-1 border-bottom'>
            <div className="post-meta">
                <span className='date'>{item.category}</span>
                <span className="mx-1">
                    <i className='bi bi-dot'></i>
                </span>
                <span>{new Date(item.date).toLocaleDateString('en-US')}</span>
            </div>

            <h2 className='mb-2'>
                <Link href={`/postitems/${item._id}`}>{item.title}</Link>
            </h2>

            {item.author && <span className='author mb-3 d-block'>{item.author}</span>}
        </div>
    );
}

export default SidePostItem;
