import LoginForm from '@/components/login-form';
import STRINGS from '@/lib/strings';

// TODO: may consider to make this a layout-cpn in the future
export default function LoginPage() {
  return (
    <main className="min-w-full min-h-[100vh] h-full grid grid-cols-12 bg-[url('/gradient-bg.jpg')] bg-cover">
      <div className="col-span-4 col-start-9 bg-white min-w-[320px] flex flex-col items-start justify-between">
        <div className="py-6 h-full w-full space-y-6">
          <span className="px-6 text-xl font-bold">{STRINGS.login.form.title}</span>
          <div className="px-6 flex-1 overflow-y-auto">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}
