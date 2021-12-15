import { environment } from "src/environments/environment";

export const baseUrl = environment.production ? 'https://api.magazin.com' : 'http://localhost:3000'

export const cartUrl = baseUrl + '/cart-item'

export const productUrl = baseUrl + '/product'

export const wishlistUrl = baseUrl + '/wishlist'

export const prodImgUrl = baseUrl + '/prodImg'
