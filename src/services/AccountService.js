import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'

class AccountService {

async fetchPostProfile(creatorId) {
  const response = await api.get(`/account/creatorId`)
  console.log('profile info: ', response.data)
  AppState.profile = new Account(response.data)
}
async editAccount(accountData) {
  const response = await api.put('/account', accountData)
  AppState.account = response.data
  console.log('accountData: ', accountData)
}
  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
