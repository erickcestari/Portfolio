import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <div>
        <h1 className="text-4xl font-bold mb-2">404 - Not Found | ∅</h1>
        <p className="text-lg">
          Oops! The page you are looking for might be in another dimension.
        </p>
      </div>
      <p className="text-lg">
        Let's get you back{' '}
        <Link href="/" className="text-blue-500 underline">
          home
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
