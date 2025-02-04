import { configureStore, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TaskState, TaskType } from '../components/Task';

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

export const fetchTasks = createAsyncThunk('todos/fetchTodos', async () => {

    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos?userId=1'
    );
    const data = await response.json();
    const result = data.map((task: {id: number, title: string, completed: boolean}) => ({
        id: task.id,
        title: task.title,
        state: task.completed ? TaskState.TASK_ARCHIVED : TaskState.TASK_INBOX
    }));

    return result;
})

const TasksSlice = createSlice({
    name: 'taskbox',
    initialState: TaskBoxData,
    reducers: {
        updateTaskState: (
            state,
            action: PayloadAction<Pick<TaskType, "id"> & { newTaskState: TaskState}>
        ) => {

            const { id, newTaskState } = action.payload;
            const foundTaskId = state.tasks.findIndex((task) => task.id === id);
            if ( foundTaskId >= 0 ) {
                state.tasks[foundTaskId].state = newTaskState;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.status = 'loading';
                state.error = null;
                state.tasks = []
            })
            .addCase(fetchTasks.fulfilled, (state, action: PayloadAction<TaskType[]>) => {
                state.status = 'succeeded';
                state.error = null;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.status = 'failed';
                state.error = 'Something went wrong';
                state.tasks = [];
            })
    }
});

export const { updateTaskState } = TasksSlice.actions;

const store = configureStore({
    reducer: {
        taskbox: TasksSlice.reducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
