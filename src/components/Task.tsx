enum TaskState {
    TASK_INBOX = 'TASK_INBOX',
    TASK_PINNED = 'TASK_PINNED',
    TASK_ARCHIVED = 'TASK_ARCHIVED',
}

type TaskType = {
    id: number;
    title: string;
    state: TaskState;
}

interface TaskProps {
    task: TaskType;
    onArchiveTask: (task: TaskType) => void;
    onPinTask: (task: TaskType) => void;
}

export default function Task({ task, onArchiveTask, onPinTask }: TaskProps) {

    return <div className={ `list-item ${ task.state }` }>
        <label htmlFor="checked"
               aria-label={ `archiveTask-${ task.id }` }
               className={ `checkbox` }>
            <input type="checkbox"
                   disabled={ true }
                   name="checked"
                   id={ `archiveTask-${ task.id }` }
                   checked={ task.state === TaskState.TASK_ARCHIVED }/>
            <span className="checkbox-custom"
                  onClick={ () => onArchiveTask(task) }/>
        </label>
        <label htmlFor="title" aria-label={task.title}>
            <input
                type="text"
                value={ task.title }
                readOnly={ true }
                name="title"
                title={ task.title }
                style={{ textOverflow: 'ellipsis' }}
            />
        </label>
        {
            task.state !== TaskState.TASK_ARCHIVED && (
                <button className="pin-button"
                        onClick={ () => onPinTask(task) }
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

export { TaskType, TaskState };