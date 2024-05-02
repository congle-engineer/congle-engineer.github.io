import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"> 
      <div className="p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in"> 
        <h1 className="text-2xl font-semibold mb-3"> 
            Hover 
        </h1> 
      </div> 
    </div> 
  );
}
