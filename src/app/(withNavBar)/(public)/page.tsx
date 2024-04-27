import AppFeature from '@/components/appFeature';
import NewArrival from '@/components/newArrival';

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-0 justify-center items-center">
        <NewArrival />
        <AppFeature />
      </div>
    </>
  );
}
