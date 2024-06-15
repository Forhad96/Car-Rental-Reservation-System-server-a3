import { TCar } from "./car.interface"
import CarModel from "./car.model"

const createCar = async(payload:TCar)=>{
    const result = await CarModel.create(payload)
    return result
}



export {
    createCar
}