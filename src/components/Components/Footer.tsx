const Footer = () => {

  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
    <footer className="bg-white">
    <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            &#169; {year} | <a href="" className="hover:underline">Shanmugaraja Gajendran</a>. All Rights Reserved.
        </span>
    </div>
</footer>

</>
  )
}

export default Footer