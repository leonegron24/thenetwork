import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Add } from "@/models/Add.js"

class AddService{

async getAdds() {
    const response = await api.get('api/ads')
    console.log('Add response.data: ', response.data )
    AppState.adds = response.data.map(add => new Add(add))
}

}
export const addService = new AddService()