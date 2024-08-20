export function NotFound() {
  return (
    <div className="flex !min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Not Found"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            404 Page Not Found
          </h2>
          <p className="mt-4 text-center text-gray-500">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
