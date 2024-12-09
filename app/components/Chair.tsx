import Image from 'next/image';
import { FC } from 'react';

interface ChairProps {
  src: string;
  alt: string;
}

const Chair: FC<ChairProps> = ({ src, alt }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Image src={src} alt={alt} className="w-full h-full object-contain" />
    </div>
  );
};

export default Chair;