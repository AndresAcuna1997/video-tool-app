interface Props {
    progress: string
}

export const ProgressBar = ({ progress }: Props) => {
    return (
        <div className="relative">
            <div
                style={{ width: `${progress}%` }}
                className={`absolute left-0 bottom-0 h-2 rounded bg-vt-blue`}></div>
            <div className="h-2 w-full rounded bg-blue-300 bg-opacity-20"></div>
        </div>
    )
}
