import clsx from "clsx";

export interface EditorButtonProps {
  onClick: () => void;
  isActive: boolean;
  icon: React.ReactNode;
  description?: string;
}

export const EditorButton: React.FC<EditorButtonProps> = ({
  onClick,
  isActive,
  icon,
  description,
}) => (
  <div className="relative group">
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        isActive
          ? "bg-light-secondary dark:bg-dark-secondary"
          : "bg-light-primary dark:bg-dark-primary",
        "text-sm font-medium leading-6 rounded-md px-2 py-1 relative",
        "focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-offset-slate-700",
        "hover:bg-light-secondary dark:hover:bg-dark-secondary"
      )}
    >
      {icon}
    </button>
    <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block text-xs rounded py-1 px-2 dark-primary dark:light-primary">
      {description}
    </span>
  </div>
);
