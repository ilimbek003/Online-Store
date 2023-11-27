import React, {useEffect, useState} from 'react'
import "./Storis.css"
import StorisContent from './StorisContent'
import axios from 'axios'
import {url} from "../Api";
import {useDispatch, useSelector} from "react-redux";
import {StorisRedux} from "../Redux/reduser/StorisRedux";

const Storis = ({token}) => {
    const [stories, setStories] = useState([])
    const dispatch = useDispatch();
    const {stosis} = useSelector((state) => state.stosis);
    useEffect(() => {
        dispatch(StorisRedux());
    }, [dispatch]);

    return (
        <>
            {
                token ?
                    <div className='storis'>
                        <p className="text mb-2">Что нового?</p>
                        <div className="storis_block">
                            {stosis && stosis.map((el, id) =>
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