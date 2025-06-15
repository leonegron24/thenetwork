import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Post } from "@/models/Post.js"
import { Pop } from "@/utils/Pop.js"

class PostService{

pageButtonLogic(responseData){
    let currentPage = AppState.currentPage
    if(currentPage == responseData.totalPages){
    AppState.disableButton = true
}else{
    AppState.disableButton = false
}
}

async searchPosts(query) {
    console.log('query: ', query)
    const response = await api.get(`api/posts/?query=${query}`)
    AppState.posts = response.data.posts.map(post => new Post(post))
    console.log('search: ', response.data)
    this.pageButtonLogic(response.data)
}


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
    this.pageButtonLogic(response.data)
}

async deletePost(postId) {
    const conf = await Pop.confirm('Are you sure you want to delete this post?')
    if (conf){
        await api.delete(`api/posts/${postId}`)
        const postToDelete = AppState.posts.findIndex(post => post.id == postId)
        if (postToDelete != -1)
            console.log('Deleted Post: ', AppState.posts[postToDelete])
            AppState.posts.splice(postToDelete, 1)
        Pop.success('Post Deleted')
    }
    else{
        console.log('User canceled delete request')
    }
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
    AppState.posts = []
    const response = await api.get('api/posts')
    console.log('🏣', response.data)
    AppState.posts = response.data.posts.map(post => new Post(post))
}


}
export const postService = new PostService()