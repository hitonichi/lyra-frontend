import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <main className="min-w-full min-h-[100vh] flex items-center justify-center">
      <div className="min-w-[160px] min-h-[160px] flex flex-col items-center justify-center bg-primary rounded-md gap-4">
        <Image src={'/loader.gif'} width={48} height={48} alt="spinner" />
        <p className="text-white">Loading...</p>
      </div>
    </main>
  );
}
