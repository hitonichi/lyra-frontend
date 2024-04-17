import LoginForm from '@/components/login-form';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import STRINGS from '@/lib/strings';

// TODO: may consider to make this a layout-cpn in the future
export default function LoginPage() {
  return (
    <main className="p-6 pr-12 min-w-full min-h-[100vh] h-full grid grid-cols-12 bg-[url('/gradient-bg.jpg')] bg-cover">
      <div className="col-span-4 col-start-10 min-w-[320px] flex items-center justify-center">
        <div className="w-full">
          <Card className="bg-white/40 backdrop-blur border-white/10 shadow">
            <CardHeader>
              <span className="text-xl font-bold">{STRINGS.login.form.title}</span>
            </CardHeader>
            <CardContent className="px-6">
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
