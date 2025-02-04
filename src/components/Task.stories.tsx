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

const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet, ante vel varius placerat, enim turpis lobortis ex, sed sollicitudin felis urna porttitor odio. Maecenas bibendum vehicula ex. Mauris laoreet purus in iaculis iaculis. Maecenas maximus sagittis nunc quis porta. Cras tempus rhoncus neque, eget vestibulum ligula vulputate vitae. Sed pellentesque scelerisque urna. Ut eu pellentesque quam. In egestas diam eget vulputate sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."

export const LongTitle = {
    args: {
        task: {
            ...Default.args.task,
            title: loremIpsum
        }
    }
}