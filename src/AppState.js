import { reactive } from 'vue'
import { Post } from './models/Post.js'
import { Account } from './models/Account.js'
import { Add } from './models/Add.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /**@type {Post[]} */
    posts: [],

  /**@type {Post[]} */
    userPosts: [],
  
  /**@type {Post} */
    foundPost: null,

  /**@type {Account} */  
    profile: null,

  /**@type {Add[]} */
    adds: [],

  currentPage: 1,
  firstPage: 1,
  disableButton: false
})


