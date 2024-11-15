import Image from 'next/image';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'pt' },
  ];
}

export default function Icon() {
  return (
    <Image
      src="/icons/github-icon.png" // Ensure this path is correct
      alt="GitHub Icon"
      width={100} // Define explicit width
      height={100} // Define explicit height
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
}
