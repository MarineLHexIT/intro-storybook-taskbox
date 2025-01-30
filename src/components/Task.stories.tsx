import Task, { TaskState } from './Task';

export default {
    component: Task,
    title: 'Task',
    tags: ['autodocs']
};

export const Default = {
    args: {
        task: {
            id: 1,
            title: 'Test task',
            state: TaskState.TASK_INBOX
        },
    },
};

export const Pinned = {
    args: {
        task: {
            ...Default.args.task,
            state: TaskState.TASK_PINNED,
        },
    },
};

export const Archived = {
    args: {
        task: {
            ...Default.args.task,
            state: TaskState.TASK_ARCHIVED,
        },
    },
};