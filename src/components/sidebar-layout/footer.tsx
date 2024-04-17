import Logo from '../logo';
import { Socials } from './socials';

const Footer = () => {
  return (
    <footer className="w-full pb-20 bg-accent">
      <div className="max-w-[1280px] w-[90%] p-8 mx-auto h-full flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center">
          <Logo size={72} className="opacity-30" />
          <span className="mix-blend-color-burn opacity-30">Copyright 2024 All Rights Reserved</span>
        </div>
        <Socials />
      </div>
    </footer>
  );
};

export { Footer };
