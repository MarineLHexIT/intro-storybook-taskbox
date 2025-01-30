enum TaskState {
    TASK_INBOX = 'TASK_INBOX',
    TASK_PINNED = 'TASK_PINNED',
    TASK_ARCHIVED = 'TASK_ARCHIVED',
}

type Task = {
    id: number;
    title: string;
    state: TaskState;
}

interface TaskProps {
    task: Task;
    onArchiveTask: (task: Task) => void;
    onPinnedTask: (task: Task) => void;
}

export default function Task({ task, onArchiveTask, onPinnedTask }: TaskProps) {

    const onPinTask = (id: number) => {
    };

    return <div className={ `list-item ${ task.state }` }>
        <label htmlFor="checked"
               aria-label={ `archiveTask-${ task.id }` }
               className={ `checkbox` }>
            <input type="checkbox"
                   disabled={ true }
                   name="checked"
                   id={ `archiveTask-${ task.id }` }
                   checked={ task.state === TaskState.TASK_ARCHIVED }/>
        </label>
        <label htmlFor="title" aria-label={task.title}>
            <input type="text" value={task.title} readOnly={true} name="title" />
        </label>
        {
            task.state !== TaskState.TASK_ARCHIVED && (
                <button className="pin-button"
                        onClick={ () => onPinTask(task.id) }
                        id={ `pinTask-${ task.id }` }
                        aria-label={ `pinTask-${ task.id }` }
                        key={ `pinTask-${ task.id }` }
                >
                    <span className={ `icon-star` }></span>
                </button>
            )
        }
    </div>
}

export { Task, TaskState };