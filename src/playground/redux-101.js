import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
   type: 'INCREMENT', 
   //incrementBy: typeof incrementBy === 'number' ? incrementBy : 1
   incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
   type: 'DECREMENT',
   decrementBy
})

const setCount = ({ count }) => ({
   type: 'SET',
   count
})

const resetCount = () => ({
   type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
   console.log('running'); 

   switch (action.type) {
      case 'INCREMENT':
         //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
         return {
            //count: state.count + incrementBy
            count: state.count + action.incrementBy
         };
      case 'DECREMENT':
         //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
         return {
            count: state.count - action.decrementBy
         };
      case 'SET':
         return {
            count: action.count
         };
      case 'RESET':
         return {
            count: 0
         }
      default:
         return state;
      }
   };

const store = createStore(countReducer);

//const store = createStore((state = { count: 0 }, action) => {
  /* console.log('running'); 

   switch (action.type) {
      case 'INCREMENT':
         //const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
         return {
            //count: state.count + incrementBy
            count: state.count + action.incrementBy
         };
      case 'DECREMENT':
         //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
         return {
            count: state.count - action.decrementBy
         };
      case 'SET':
         return {
            count: action.count
         };
      case 'RESET':
         return {
            count: 0
         }
      default:
         return state;
      }
   });*/

   const unsubscribe = store.subscribe(() => {
      console.log(store.getState());
   });

   /*if (action.type === 'INCREMENT') {
      return {
      count: state.count + 1
   };
   } else {
   return state;
 }
});*/

//store.dispatch({
  // type: 'INCREMENT',
   //incrementBy: 5 
//});
store.dispatch(incrementCount({ incrementBy: 5}));
//unsubscribe();

//store.dispatch({
  // type: 'INCREMENT'
//});
store.dispatch(incrementCount());


//store.dispatch({
  // type: 'RESET'
//})
store.dispatch(resetCount())

//store.dispatch({
  // type: 'DECREMENT'
//});
store.dispatch(decrementCount());

//store.dispatch({
  // type: 'DECREMENT',
   //decrementBy: 10
//});
store.dispatch(decrementCount({ decrementBy: 10 }));

//store.dispatch({
  // type: 'SET',
   //count: 101
//});
store.dispatch(setCount({ count: 213 }));


console.log(store.getState());
