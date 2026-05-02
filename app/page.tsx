import { ChartExample } from "./_components/chart";
import { WeeklyChart } from "./_components/weekly_chart";
import { AddDeliveryDialog } from "./_components/add-delivery-dialog";

export default function Home() {
  return (
    <div className="flex flex-1 w-full flex-col items-center gap-6 py-6 px-16 sm:items-start">
      <div className="flex w-full justify-between gap-4 h-60">
        <WeeklyChart />
        <div className="bg-neutral-900 rounded-xl w-full border border-neutral-800"></div>
        <div className="flex items-center justify-center bg-neutral-900 rounded-xl w-full border border-neutral-800">
          <AddDeliveryDialog />
        </div>
        <ChartExample />
      </div>
      <div className="bg-neutral-900 rounded-xl h-80 w-full"></div>
    </div>
  );
}
