import { TaskType } from './Task';


interface TaskListProps {
    loading: boolean;
    tasks: Task[];
    onPinTask: () => void;
    onArchiveTask: () => void;
}

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: TaskListProps) {
    return <></>;
}