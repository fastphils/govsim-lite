import { Slider } from '@/components/ui/slider';

export const VotingBar = ({ title, icon: Icon, percentage, onChange, onSelect }) => {
  const yesHeight = `${percentage}%`;
  const noHeight = `${100 - percentage}%`;
  return (
    <div className="flex flex-col items-center mx-4 cursor-pointer" onClick={onSelect}>
      <Icon className="w-6 h-6 mb-2" />
      <div className="text-sm font-medium mb-2">{title}</div>
      <div className="relative w-16 h-64 border rounded-lg overflow-hidden">
        {/* YES Bar */}
        <div 
          className="absolute bottom-0 w-full bg-slate-500 transition-all duration-300"
          style={{ height: yesHeight }}
        >
          <div className="text-white text-xs text-center mt-1">YES</div>
        </div>
        {/* NO Bar */}
        <div 
          className="absolute top-0 w-full bg-slate-100 transition-all duration-300"
          style={{ height: noHeight }}
        >
          <div className="text-slate-500 text-xs text-center mt-1">NO</div>
        </div>
        {/* Slider */}
        <Slider
          value={[percentage]}
          onValueChange={(value) => onChange(value[0])}
          orientation="vertical"
          min={0}
          max={100}
          step={1}
          className="absolute inset-0 w-full h-full"
        />
      </div>
      <div className="mt-2 text-sm font-bold">{percentage}%</div>
    </div>
  );
};

