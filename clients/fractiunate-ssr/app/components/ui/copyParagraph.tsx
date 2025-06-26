import { Copy } from "lucide-react";
import { toast } from "sonner";

export default ({
  children,
  label = "",
}: {
  children: React.ReactNode;
  label: string;
}) => {
  const handleCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children as string);
      toast(`Copied ${label}`, {});
    }
  };

  return (
    <span className="flex items-center w-full gap-1">
      <p>{children}</p>
      <Copy
        className="ml-2 cursor-pointer text-white/40 hover:text-purple-600 active:text-purple-800"
        size={14}
        onClick={handleCopy}
      />
    </span>
  );
};