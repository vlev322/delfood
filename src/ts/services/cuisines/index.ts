import axios from "axios";

import { ICuisineProps } from '../../view/components/main-cuisine-wrapper/cuisines/cuisine-item'
interface ICuisineService {
  getCuisinesAsync(): Promise<ICuisineProps[]>
}

export class CuisineService implements ICuisineService {
  async getCuisinesAsync() {
    const cuisines: ICuisineProps[] = (await axios.get('http://localhost:3000/cuisines')).data;

    return cuisines
  }
}