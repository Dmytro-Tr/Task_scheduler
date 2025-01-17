import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  // Ім'я слайсу
  name: "tasks",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [
      { id: 0, text: "Learn HTML and CSS", completed: true },
      { id: 1, text: "Get good at JavaScript", completed: true },
      { id: 2, text: "Master React", completed: false },
      { id: 3, text: "Discover Redux", completed: false },
      { id: 4, text: "Build amazing apps", completed: false },
    ],
  },
  // Об'єкт case-редюсерів
  reducers: {
    addTask: (state, action) => {
      // Ось так було раніше
      // return {
      //   ...state,
      //   items: [...state.items, action.payload],
      // };
      // ✅ Immer замінить це на операцію оновлення
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      // return {
      //   ...state,
      //   items: state.items.filter((task) => task.id !== action.payload),
      // };
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      // return {
      //   ...state,
      //   items: state.items.map((task) => {
      //     if (task.id !== action.payload) {
      //       return task;
      //     }
      //     return {
      //       ...task,
      //       completed: !task.completed,
      //     };
      //   }),
      // };
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

// Експортуємо фабрики екшенів
export const { addTask, deleteTask, toggleCompleted } = slice.actions;

// Експортуємо редюсер слайсу
export default slice.reducer;

// import { createAction } from "@reduxjs/toolkit";

// // Перенесли екшени пов'язані із завданнями у файл слайса
// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// // Початковий стан слайса
// const initialState = {
//   items: [
//     { id: 0, text: "Learn HTML and CSS", completed: true },
//     { id: 1, text: "Get good at JavaScript", completed: true },
//     { id: 2, text: "Master React", completed: false },
//     { id: 3, text: "Discover Redux", completed: false },
//     { id: 4, text: "Build amazing apps", completed: false },
//   ],
// };

// // Використовуємо initialState як значення стану за умовчанням
// // Відповідає лише за оновлення властивості tasks
// // Значенням параметра state буде об'єкт завдань

// // Експортуємо редюсер слайса
// export default function tasksReducer(state = initialState, action) {
//   switch (action.type) {
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
// }
