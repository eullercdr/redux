## Documentação Redux

Como funciona o redux?

No momento que o conectamos com o redux ao componente ele tem acesso a uma propriedade this.props que chama dispatch, o dispatch serve para disparar as actions do redux, adicionar algum item, remover, modificar, etc.

Geralmente passamos um type para a action e a propriedade que queremos adicionar remover, etc.

Dentro do reducer, todos os reducers ouvem todas as actions.

Fazemos os cases para o reducer ouvir apenas a action que queremos.

No momento que a alteração é feita, todos os componentes com connect são avisados e renderizam a informação corretamente.


