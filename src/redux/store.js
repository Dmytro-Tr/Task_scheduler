import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import tasksReducer from "./tasksSlice";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// import { configureStore } from "@reduxjs/toolkit";

// // 1. Оголошуєм початкове значення стану Redux
// const initialState = {
//   tasks: {
//     items: [
//       { id: 0, text: "Learn HTML and CSS", completed: true },
//       { id: 1, text: "Get good at JavaScript", completed: true },
//       { id: 2, text: "Master React", completed: false },
//       { id: 3, text: "Discover Redux", completed: false },
//       { id: 4, text: "Build amazing apps", completed: false },
//     ],
//   },
//   filters: {
//     status: "all",
//   },
// };

// // Використовуємо initialState як значення стану за умовчанням
// // Відповідає лише за оновлення властивості tasks
// // Значенням параметра state буде об'єкт завдань
// const taskReducer = (state = initialState.tasks, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case "tasks/addTask": {
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     }

//     case "tasks/deleteTask":
//       return {
//         ...state,
//         items: state.items.filter((task) => task.id !== action.payload),
//       };

//     case "tasks/toggleCompleted":
//       return {
//         ...state,
//         items: state.items.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return {
//             ...task,
//             completed: !task.completed,
//           };
//         }),
//       };
//     // Кожен редюсер отримує всі екшени, відправлені в стор.
//     // Якщо редюсер не повинен обробляти якийсь тип екшену,
//     // необхідно повернути наявний стан без змін.
//     default:
//       return state;
//   }
// };

// const filtersReducer = (state = initialState.filters, action) => {
//   switch (action.type) {
//     case "filters/setStatusFilter":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const store = configureStore({
//   reducer: {
//     tasks: taskReducer,
//     filters: filtersReducer,
//   },
// });

// case "filters/setStatusFilter":
//   return {
//     ...state,
//     filters: {
//       status: action.payload,
//     },
//   };
