export interface TextInputRootProps {
  children: React.ReactNode;
}

export function TextInputRoot(props: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800  w-full transition-colors focus:ring-2 ring-cyan-300 ">
      {props.children}
    </div>
  );
}
