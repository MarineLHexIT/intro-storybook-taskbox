import TaskList from './TaskList';
import * as TaskStories from './Task.stories';
import { TaskState, TaskType } from './Task';


import { Provider } from 'react-redux';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export const MockedState = {
    tasks: [
        { ...TaskStories.Default.args.task, id: 1, title: 'Task 1' },
        { ...TaskStories.Default.args.task, id: 2, title: 'Task 2' },
        { ...TaskStories.Default.args.task, id: 3, title: 'Task 3' },
        { ...TaskStories.Default.args.task, id: 4, title: 'Task 4' },
        { ...TaskStories.Default.args.task, id: 5, title: 'Task 5' },
        { ...TaskStories.Default.args.task, id: 6, title: 'Task 6' },
    ],
    status: 'idle',
    error: null
};

// A super-simple mock of a redux store
const MockStore = ({ taskboxState, children }) => (
    <Provider
        store={ configureStore({
            reducer: {
                taskbox: createSlice({
                    name: 'taskbox',
                    initialState: taskboxState,
                    reducers: {
                        updateTaskState: (
                            state,
                            action: PayloadAction<Pick<TaskType, 'id'> & { newTaskState: TaskState }>
                        ) => {

                            const { id, newTaskState } = action.payload;
                            const foundTaskId = state.tasks.findIndex((task) => task.id === id);
                            if ( foundTaskId >= 0 ) {
                                state.tasks[foundTaskId].state = newTaskState;
                            }
                        }
                    },
                }).reducer,
            },
        }) }
    >
        { children }
    </Provider>
);

export default {
    component: TaskList,
    title: 'TaskList',
    tags: ['autodocs'],
    decorators: [
        (story) => <div style={ { padding: '3rem}' } }>{ story() }</div>
    ],
    excludeStories: /.*MockedState$/
};

export const Default = {
    decorators: [
        (story) => <MockStore taskboxState={ MockedState }>{ story() }</MockStore>
    ]
};

export const WithPinnedTasks = {
    decorators: [
        (story) => {

            const pinnedTasks = [
                ...MockedState.tasks.slice(0, 5),
                {
                    id: 6, title: 'Task 6 - Pinned Tasks', state: TaskState.TASK_PINNED
                }
            ];

            return <MockStore taskboxState={ {
                ...MockedState,
                tasks: pinnedTasks,
            }} >
                { story() }
            </MockStore>;
        }
    ]
};

export const Loading = {
    decorators: [
        (story) => {
            return <MockStore taskboxState={{...MockedState, status: 'loading', tasks: []}}>{ story() } </MockStore>
        }
    ]
}

export const Empty = {
    decorators: [
        (story) => {
            return <MockStore taskboxState={{...MockedState, status: 'idle', tasks: []}}>{ story() } </MockStore>
        }
    ]
};