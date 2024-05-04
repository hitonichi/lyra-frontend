import { Label } from '../ui/label';

export default function PageHeader({ title, description }: { title?: string; description?: string }) {
  return (
    <div className="w-full bg-gray-100 px-20 py-10 flex flex-col items-start justify-start">
      <Label className="text-2xl font-bold">{title}</Label>
      <p className="text-lg text-center">{description}</p>
    </div>
  );
}
