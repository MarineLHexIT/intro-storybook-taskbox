import { configureStore, createSlice } from '@reduxjs/toolkit';
import { TaskState } from '../components/Task';

const defaultTasks = [
    {
        id: 1,
        title: 'Feed the cats',
        state: TaskState.TASK_INBOX
    },
    {
        id: 2,
        title: 'Do the dishes',
        state: TaskState.TASK_INBOX,
    },
    {
        id: 3,
        title: 'Run some errands',
        state: TaskState.TASK_INBOX,
    },
    {
        id: 4,
        title: 'Draw the next linocut',
        state: TaskState.TASK_PINNED,
    }
];

const TaskBoxData = {
    tasks: defaultTasks,
    status: 'idle',
    error: null
};

const TasksSlice = createSlice({
    name: 'taskbox',
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (state, action) => {
            const { id, newTaskState } = action.payload;
            const foundTaskId = state.tasks.findIndex((task) => task.id === id);
            if ( foundTaskId >= 0 ) {
                state.tasks[foundTaskId].state = newTaskState;
            }
        }
    }
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    }
});

export default store;
