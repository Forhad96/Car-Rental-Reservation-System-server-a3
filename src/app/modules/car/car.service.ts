import { TCar } from "./car.interface"
import CarModel from "./car.model"

const createCar = async(payload:TCar)=>{
    const result = await CarModel.create(payload)
    return result
}
const getAllCars = async()=>{
    const result = await CarModel.find()
    return result
}



export {
    createCar,
    getAllCars
}