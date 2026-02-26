"use client"
import * as Switch from "@radix-ui/react-switch";

interface Props {
  checkedBin: boolean;
  setCheckedBin: boolean;
}

const SwitchBin = ({checkedBin, setCheckedBin} : Props) => {
  // const [checked, setChecked] = useState(false);

  const handleCheckedChange = (value: boolean) => {
    // console.log("Checked value:", value);   // <-- HERE YOU GET IT
    setCheckedBin(value);
  };


 
  return (
    <div>
      <div className="flex items-center gap-3">
        <Switch.Root
          checked={checkedBin}
          onCheckedChange={handleCheckedChange}
          className="w-11 h-6 bg-gray-300 rounded-full data-[state=checked]:bg-blue-600 relative outline-none"
        >
          <Switch.Thumb className="block w-4 h-4 bg-white rounded-full transition-transform translate-x-1 data-[state=checked]:translate-x-5" />
        </Switch.Root>

        <span className="text-sm">{checkedBin ? "Turn on Bin" : ""}</span>
      </div>

    </div>
  )
}

export default SwitchBin