import Task, { TaskState, TaskType } from './Task';


interface TaskListProps {
    loading: boolean;
    tasks: TaskType[];
    onPinTask: () => void;
    onArchiveTask: () => void;
}

export default function TaskList({
                                     loading = false,
                                     tasks = [],
                                     onPinTask,
                                     onArchiveTask
                                 }: TaskListProps) {

    const events = {
        onPinTask,
        onArchiveTask,
    };

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


    if ( loading ) {
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

    const tasksInOrder = [
        ...tasks.filter((t) => t.state === TaskState.TASK_PINNED),
        ...tasks.filter((t) => t.state !== TaskState.TASK_PINNED),
    ];

    return <div className="list-items">
        { tasksInOrder
            .map((task: TaskType) => (
                <Task key={ task.id } task={ task } { ...events }/>
            ))
        }
    </div>;
}