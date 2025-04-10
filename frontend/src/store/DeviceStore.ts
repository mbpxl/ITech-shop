import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  _types: { id: string; name: string; }[];
  _brands: { id: string; name: string; }[];
  _devices: { id: string; name: string; price: string; rating: number; img: string; }[];

  constructor() {
    this._types = [
      {id: "1", name: 'Xолодильники'},
      {id: "2", name: 'Смартфоны'},
    ]
    this._brands = [
      {id: "1", name: 'Samsung'},
      {id: "2", name: 'Apple'},
    ]
    this._devices = [ //https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png
      {id: "1", name: "IPhone 12 pro", price: "25000", rating: 5, img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png"},
      {id: "2", name: "IPhone 12 pro", price: "25000", rating: 5, img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png"},
      {id: "3", name: "IPhone 12 pro", price: "25000", rating: 5, img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png"},
      {id: "4", name: "IPhone 12 pro", price: "25000", rating: 5, img: "https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png"},
    ]
    makeAutoObservable(this);
  }

  setTypes(types: never) {
    this._types = types;
  }

  setBrands(brands: never) {
    this._brands = brands;
  }

  setDevices(devices: never) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}