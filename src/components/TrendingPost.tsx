import React from 'react';
import './trendingPost.css';
import Link from 'next/link';

const TrendingPost = ({ item, index }: { item: any, index: number }) => {
    return (
        <li>
            <Link href={`/postitems/${item._id}`}>
                <span className='number'>{index + 1}</span>
                <h3>{item.title}</h3>
                <span className="author">{item.author}</span>
            </Link>
        </li>
    );
}

export default TrendingPost;
