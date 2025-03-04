// added the button component
// "add {button } from path"
import { DataTableDemo } from "@/components/ui/data";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Button>Create a Dico →</Button>
      <Button>Hello a Dico →</Button>
      <Button>How are you a Dico →</Button>
      <Button>Sup a Dico →</Button>
      <DataTableDemo />
    </div>
  );
}
