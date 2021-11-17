import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import ItemService from '../API/ItemService';
import Loader from '../components/UI/loader/Loader';
import { useFetch } from '../hooks/useFetch';

const ItemIdPage = () => {
    const params = useParams();
    const [item, setItem] = useState( {});
    const [comments, setComment] = useState( []);
    const [fetchItemById, isLoading, error] = useFetch( async (itemId) => {
        const response = await ItemService.getById(itemId)
        setItem(response.data);
    })
    const [fetchComments, isCommLoading, commError] = useFetch( async (itemId) => {
        const response = await ItemService.getCommentsByItemId(itemId)
        setComment(response.data);
    })

    useEffect(() => {
        fetchItemById(params.itemId)
        fetchComments(params.itemId)
    }, [])

    return (
        <div>
            <h1>
                Item page ID = {params.itemId}
            </h1>
            {isLoading
                ? <Loader></Loader>
                : <div>{item.id}. {item.title}</div>
            }
            <h1>Comments: </h1>
            {isCommLoading
                ? <Loader></Loader>
                : <div>{comments.map(comm => 
                        <div style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default ItemIdPage;