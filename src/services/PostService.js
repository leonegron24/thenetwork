import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { Pop } from "@/utils/Pop.js"

class PostService{

async likePost(postId) {
    const response = await api.post(`api/posts/${postId}/like`)
    console.log('liking posts: ', response.data.likeIds)
    return response.data.likeIds

}

async findPostById(postId){
    const response = await api.get(`api/posts/${postId}`)
    console.log('found Page: ', response.data)
}

async changePage(x) {
    let currentPage = AppState.currentPage
    currentPage += x
    AppState.currentPage = currentPage
    const response = await api.get(`api/posts?page=${currentPage}`)
    AppState.posts = response.data.posts.map(post=> new Post(post))
    console.log('page change: ', response.data)
    
if(currentPage == response.data.totalPages){
    AppState.disableButton = true
}else{
    AppState.disableButton = false
}
}

async deletePost(postId) {
    const response = await api.delete(`api/posts/${postId}`)
    console.log('post to Delete: ', response.data)
}

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