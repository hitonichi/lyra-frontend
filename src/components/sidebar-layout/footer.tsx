import Logo from '../logo';
import Newsletter from '../newsletter';
import { Socials } from './socials';

const Footer = () => {
  return (
    <footer className="w-full pb-20 ">
      <Newsletter />
      <div className="max-w-[1280px] w-[90%]  p-8 mx-auto h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Logo size={64} className="mt-6" />
          <span className="mt-6">2024 Lyra. All Rights Reserved.</span>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export { Footer };
