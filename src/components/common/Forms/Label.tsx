import clsx from "clsx";

interface Iprops {
  children: React.ReactNode;
  className?: string;
}

export function Label({ children, className }: Iprops) {
  return (
    <label
      className={clsx(
        className,
        "mb-3 inline-block text-base sm:text-xl font-normal capitalize"
      )}
    >
      {children}
    </label>
  );
}
