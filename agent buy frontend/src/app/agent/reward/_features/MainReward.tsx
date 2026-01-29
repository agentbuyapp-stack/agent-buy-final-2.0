import { RewardCard } from "../_component/RewardCard";

export const MainReward = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-6 dark:bg-gray-900">
      <p className="text-2xl font-bold tracking-tight min-[375px]:pl-3">
        Захиалгын урамшуулал
      </p>
      <div className="grid gap-2 grid-cols-1 min-[375px]:grid-cols-1 min-[375px]:overflow-y-auto min-[640px]:grid-cols-2 min-[640px]:overflow-y-auto min-[768px]:grid-cols-1 min-[768px]:overflow-y-auto min-[1024px]:grid-cols-2 min-[1024px]:overflow-y-auto min-[1280px]:grid-cols-3 min-[1280px]:overflow-y-auto min-[1536px]:grid-cols-4 min-[1536px]:overflow-y-auto justify-items-center">
        <RewardCard />
        <RewardCard />
        <RewardCard />
        <RewardCard />
        <RewardCard />
        <RewardCard />
        <RewardCard />
      </div>
    </div>
  );
};
