import Task, { TaskState, TaskType } from './Task';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, updateTaskState } from '../lib/store';

export default function TaskList() {

    const tasks = useSelector((state: RootState) => {
            const tasksInOrder = [
                ...state.taskbox.tasks.filter((t) => t.state === TaskState.TASK_PINNED),
                ...state.taskbox.tasks.filter((t) => t.state !== TaskState.TASK_PINNED),
            ];
            const filteredTasks = tasksInOrder.filter(
                (task) => task.state !== TaskState.TASK_ARCHIVED
            );

            return filteredTasks;
        }
    );

    const dispatch: AppDispatch = useDispatch();

    const pinTask = (taskId: TaskType['id']) => {
        dispatch(updateTaskState({ id: taskId, newTaskState: TaskState.TASK_PINNED }));
    };

    const archiveTask = (taskId: TaskType['id']) => {
        dispatch(updateTaskState({ id: taskId, newTaskState: TaskState.TASK_ARCHIVED }));
    };

    const { status } = useSelector((state: RootState) => state.taskbox);


    // const events = {
    //     onPinTask,
    //     onArchiveTask,
    // };

    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox"></span>
            <span className="glow-text">
                <span>Loading…</span>
                <span>cool</span>
                <span>state</span>
            </span>
        </div>
    );


    if ( status === 'loading' ) {
        return (
            <div className="list-item" key={ `loading` } data-test-id="loading">
                { LoadingRow }
                { LoadingRow }
                { LoadingRow }
                { LoadingRow }
                { LoadingRow }
            </div>
        );
    }

    if ( tasks.length === 0 ) {
        return (
            <div className="list-items" key={ 'empty' } data-testid="empty">
                <div className="wrapper-message">
                    <span className="icon-check"/>
                    <p className="title-message">
                        You have no task
                    </p>
                    <p className="subtitle-message">
                        Sit back and relax
                    </p>
                </div>
            </div>
        );
    }

    return <div className="list-items">
        { tasks
            .map((task: TaskType) => (
                <Task
                    key={ task.id }
                    task={ task }
                    onPinTask={ (task) => pinTask(task.id) }
                    onArchiveTask={ (task) => archiveTask(task.id) }
                />
            ))
        }
    </div>;
}