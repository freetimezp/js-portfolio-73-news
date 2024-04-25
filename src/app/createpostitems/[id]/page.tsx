"use client";
import React, { useState, useEffect } from 'react';
import { initialState } from '../page';

const EditPostItem = ({ params }: { params: { id: string } }) => {
    const id = params.id;

    const [text, setText] = useState(initialState);

    const getSinglePostData = () => {
        fetch(`/api/postitems/${id}`)
            .then(res => res.json())
            .then(data => setText(data))
            .catch(err => console.log(err.message));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setText({ ...text, [name]: value, validate: '' });
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (text.title === "" || text.img === "" || text.category === "" || text.brief === "") {
            setText({ ...text, validate: 'incomplete' });
            return;
        }

        try {
            const response = await fetch(`/api/postitems/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(text),
            });

            setText({ ...text, validate: 'loading' });

            const result = response.status;
            if (result === 200) {
                setText({ ...text, validate: 'success' });
                console.log("Success", result);
            }
        } catch (error) {
            setText({ ...text, validate: 'error' });
            console.log("Error", error);
        }
    };

    useEffect(() => {
        getSinglePostData();
    }, []);

    return (
        <main id="main">
            <section className="create-post-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-10">
                            <div className="row d-flex justify-content-center mt-5">
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-12 text-center mb-5">
                                            <h1 className='page-title'>Edit Post</h1>
                                        </div>
                                    </div>
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <label>Title</label>
                                                <input
                                                    type="text"
                                                    name="title"
                                                    className='form-control'
                                                    placeholder='Enter Title'
                                                    value={text.title}
                                                    onChange={handleTextChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label>Image URL</label>
                                                <input
                                                    type="text"
                                                    name="img"
                                                    className='form-control'
                                                    placeholder='Enter Image URL'
                                                    value={text.img}
                                                    onChange={handleTextChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label>Category</label>
                                                <input
                                                    type="text"
                                                    name="category"
                                                    className='form-control'
                                                    placeholder='Enter Post Category'
                                                    value={text.category}
                                                    onChange={handleTextChange}
                                                />
                                            </div>
                                            <div className="col-lg-6 mb-3">
                                                <label>Author</label>
                                                <input
                                                    type="text"
                                                    name="author"
                                                    className='form-control'
                                                    placeholder='Enter Author'
                                                    value={text.author}
                                                    onChange={handleTextChange}
                                                />
                                            </div>
                                            <div className="col-lg-12 mb-3">
                                                <label>Brief</label>
                                                <textarea
                                                    name="brief"
                                                    cols={30}
                                                    rows={10}
                                                    className='form-control'
                                                    value={text.brief}
                                                    onChange={handleTextChange}
                                                    placeholder='Enter Post Brief'
                                                ></textarea>
                                            </div>

                                            <div className="mb-3">
                                                {text.validate === 'loading' && (
                                                    <div className='loading'>Updating Post</div>
                                                )}
                                                {text.validate === 'incomplete' && (
                                                    <div className='error-message'>
                                                        Please, fill all fields..
                                                    </div>
                                                )}
                                                {text.validate === 'success' && (
                                                    <div className='sent-message'>
                                                        Your post was updated. Success!
                                                    </div>
                                                )}
                                                {text.validate === 'error' && (
                                                    <div className='error-message'>Server error</div>
                                                )}
                                            </div>

                                            <div className="col-12 d-flex justify-content-center">
                                                <input
                                                    type="submit"
                                                    className='btn btn-primary'
                                                    value="Update Post"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default EditPostItem;
