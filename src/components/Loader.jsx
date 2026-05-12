import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-4 min-w-[300px]">
        <div className="relative w-48 h-1 bg-white/10 overflow-hidden rounded-full backdrop-blur-sm">
          <div 
            className="absolute top-0 left-0 h-full bg-brand-orange transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <p className="text-white font-medium text-sm tracking-widest uppercase">
          {progress.toFixed(0)}% Loading Room
        </p>
      </div>
    </Html>
  );
};

export default Loader;
