type Task = {
    id: number;
    title: string;
    state: string;
}

interface TaskProps {
    task: Task;
    onArchiveTask: (task: Task) => void;
    onPinnedTask: (task: Task) => void;
}

export default function Task({ task, onArchiveTask, onPinnedTask }: TaskProps) {

    return <div className="list-item">
        <label htmlFor="title" aria-label={task.title}>
            <input type="text" value={task.title} readOnly={true} name="title" />
        </label>
    </div>
}