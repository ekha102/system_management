import { Spinner } from "@radix-ui/themes";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-64">
      <Spinner size="3" />
    </div>
  );
}
