export class Account {
  /**
   * @typedef AccountData
   * @property {string []} subs
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} bio
   * @property {string} coverImg
   * @property {string} github
   * @property {string} linkedin
   * @property {string} resume
   * @property {string} class
   * @property {boolean} graduated
   * @property {string} id
   * 
   * @param {AccountData} data
   */
  constructor(data) {
    this.subs = data.subs
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.bio = data.bio
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.resume = data.resume
    this.class = data.class
    this.graduated = data.graduated
    this.id = data.id

    // TODO add additional properties if needed
  }
}
