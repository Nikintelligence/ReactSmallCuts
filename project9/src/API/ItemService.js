import axios from 'axios';

export default class ItemService {
    static async getAll(limit = 10, page = 1){
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _limit: limit,
                    _page: page
                }
            })
            return response;
    }
    static async getById(itemId){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + itemId)
        return response;
    }
    static async getCommentsByItemId(itemId){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${itemId}/comments`)
        return response;
    }
}