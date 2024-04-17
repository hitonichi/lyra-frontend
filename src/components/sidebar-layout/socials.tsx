import twitterX from '../../../public/twitterx.svg';
import facebook from '../../../public/fb.svg';
import linkedIn from '../../../public/linkedin.svg';
import Image from 'next/image';

const Socials = () => {
  return (
    <div className="flex gap-4 mt-6">
      <Image width={32} height={32} className="opacity-30" src={twitterX} alt="Twitter (X)" />
      <Image width={32} height={32} className="opacity-30" src={facebook} alt="Facebook" />
      <Image width={32} height={32} className="opacity-30" src={linkedIn} alt="LinkedIn" />
    </div>
  );
};

export { Socials };
