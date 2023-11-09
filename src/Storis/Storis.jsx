import React, { useEffect, useState } from 'react'
import "./Storis.css"
import StorisContent from './StorisContent'
import axios from 'axios'


const Storis = () => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        axios.get("https://hit-travel.org/stories")
            .then((response) => {
                setStories(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])

    return (
        <div className='storis'>
            <div className="storis_block">
                {stories && stories.map((el, id) =>
                    <StorisContent key={id} data={el} />
                )}
            </div>
        </div>
    )
}

export default Storis