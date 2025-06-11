import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"

class PostService{ 

async getAllPosts() {
    const response = await api.get('api/posts')
    console.log('🏣', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
}


}
export const postService = new PostService()