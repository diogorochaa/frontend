import { Slot } from "@radix-ui/react-slot";

export interface TextInputIconProps {
  children?: React.ReactNode;
}

export function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}
