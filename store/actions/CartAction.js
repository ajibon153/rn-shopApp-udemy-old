export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = (product) => {
  return { type: ADD_TO_CART, product };
};

export const deleteCart = (producId) => {
  return { type: REMOVE_FROM_CART, pid: producId };
};
