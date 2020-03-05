/*
Dentro do reducer, todos os reducers ouve todas as actions.

Fazemos os cases para o reducer ouvir apenas a action que queremos.

No momento que a alteração é feita, todos os componentes com connect são
avisadas
*/

export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
