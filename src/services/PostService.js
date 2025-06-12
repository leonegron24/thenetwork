import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { Pop } from "@/utils/Pop.js"

class PostService{

async addPost(postData) {
    const response = await api.post('api/posts', postData)
    console.log('new Post: ',response.data)
    AppState.posts.unshift(new Post(response.data))
    Pop.success('Post Added!')
}

async getUserPostsById(creatorId) {
 const response = await api.get(`api/profiles/${creatorId}/posts`)
 console.log('userPosts: ', response.data)
 AppState.userPosts = response.data.posts.map(post => new Post(post))
} 

async getAllPosts() {
    const response = await api.get('api/posts')
    console.log('🏣', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
}


}
export const postService = new PostService()