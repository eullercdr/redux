## Documentação Redux

### Como funciona o redux?

No momento que o conectamos com o redux ao componente ele tem acesso a uma propriedade **(this.props)** que chama dispatch, o dispatch serve para disparar as actions do redux, adicionar algum item, remover, modificar, etc.

```javascript
handleAddProduct = product => {
    const { dispatch } = this.props;
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };
```
Como visto no exmplo acima, passamo um type e um action, type será o tipo do evento a ser escutado pelo reducer e o product é um objeto, neste exemplo, o objeto referente ao produto que será adicionado.

#Funcionamento dentro do Reducer
Dentro do reducer, todos os reducers ouvem todas as actions.

Fazemos os cases dentro do reducer para ouvir apenas a action que queremos.

Exemplo:

```javascript
export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.product];
    default:
      return state;
  }
}
```

O reducer cart ouve apenas o evento que lhe é devido, no caso o **ADD_TO_CART** no momento que é disparado o evento, ele intercepta, realiza as operações necessárias e redispara o evento para todos os componentes que estão conectados ao redux.


