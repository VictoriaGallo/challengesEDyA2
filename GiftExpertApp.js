
import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Zodiac']);

    const onAddCategory = (category) => {
        setCategories(list => [...list, category]);
    }

    return (
        <>
            <h1>GifExpert</h1>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }
        </>
    );
}