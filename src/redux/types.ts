// Типы состояния
export interface CounterState {
    count: number;
  }
  
  // Типы действий
  export const INCREMENT = 'INCREMENT';
  export const DECREMENT = 'DECREMENT';
  
  interface IncrementAction {
    type: typeof INCREMENT;
  }
  
  interface DecrementAction {
    type: typeof DECREMENT;
  }
  
  export type ActionTypes = IncrementAction | DecrementAction;

  {/*CounterState: Это тип состояния, который представляет ваше состояние Redux, включая поле count типа number.

INCREMENT и DECREMENT: Это константы, которые представляют типы действий для увеличения и уменьшения счетчика.

IncrementAction и DecrementAction: Это интерфейсы, представляющие действия увеличения и уменьшения счетчика соответственно. Они содержат поле type, которое указывает на тип действия.

ActionTypes: Это объединение типов действий (IncrementAction и DecrementAction), которое представляет все возможные типы действий, доступные в вашем Redux-хранилище. */}