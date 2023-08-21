import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "@/public/404.svg";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center bg-gray-50 dark:bg-gray-900">
      <div className="container flex flex-col items-center justify-between px-5 text-gray-700 md:flex-row">
        <div className="mx-8 w-full lg:w-1/2">
          <div className="font-dark mb-8 text-7xl font-extrabold text-green-500">
            {" "}
            404
          </div>
          <p className="mb-8 text-2xl font-light leading-normal dark:text-gray-100 md:text-3xl">
            Sorry we couldn&apos;t find the page you&apos;re looking for
          </p>
          <Link
            href="/"
            className="duration-400 inline rounded-lg border border-transparent bg-green-600 px-5 py-3 text-sm font-medium leading-5 text-white shadow-2xl transition-all hover:bg-green-700 focus:outline-none active:bg-green-600"
          >
            back to homepage
          </Link>
        </div>
        <div className="mx-5 my-12 w-full lg:flex lg:w-1/2 lg:justify-end">
          <Image src={NotFoundImage} alt="Page not found" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
