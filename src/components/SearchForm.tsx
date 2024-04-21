import React from 'react';
import './searchForm.css';

const SearchForm = ({ active, formOpen }: { active: boolean; formOpen: object | any; }) => {
    return (
        <div className={`search-form-wrap js-search-form-wrap ${active ? 'active' : undefined}`}>
            <form className="search-form">
                <span className='icon bi-search'></span>
                <input type="text" className='form-control' placeholder='Search' />
                <button className='btn js-search-close' onClick={formOpen}>
                    <span className='bi-x'></span>
                </button>
            </form>
        </div>
    );
}

export default SearchForm;
