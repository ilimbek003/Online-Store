import React, {useEffect, useState} from 'react'
import "./Storis.css"
import StorisContent from './StorisContent'
import axios from 'axios'
import {url} from "../Api";

const Storis = ({token}) => {
    const [stories, setStories] = useState([])

    useEffect(() => {
        axios.get(url + "/stories")
            .then((response) => {
                setStories(response.data);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, [])

    return (
        <>
            {
                token ?
                    <div className='storis'>
                        <p className="text mb-2">Что нового?</p>
                        <div className="storis_block">
                            {stories && stories.map((el, id) =>
                                <StorisContent key={id} data={el}/>
                            )}
                        </div>
                    </div> : (
                        ""
                    )
            }
        </>
    )
}

export default Storis