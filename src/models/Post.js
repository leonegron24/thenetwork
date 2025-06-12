export class Post{
    constructor(data){
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creatorId = data.creatorId
        this.likeIds = data.likeIds
        this.id = data.id
        this.creator = data.creator
        this.likes = data.likes
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = data.updatedAt
    }

  get createdAtFormatted() {
    return this.createdAt.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
  }
}