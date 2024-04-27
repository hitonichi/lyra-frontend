import NewArrival from '@/components/newArrival';

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col gap-0 justify-center items-center">
        <NewArrival />
        <div className="w-full">Feature section</div>
      </div>
    </>
  );
}
