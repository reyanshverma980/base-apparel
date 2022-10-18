import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Base Apparel</title>
        <meta name="description" content="Challenge by Front End Mentor" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="flex lg:flex-row flex-col-reverse lg:h-screen hero">
        <div className="lg:w-1/3 w-full mx-auto hero-text font-body">
          <img
            src="/images/logo.svg"
            className=" mt-16 mx-8 lg:mx-0"
            alt="base apparel"
          />
          <img
            src="/images/hero-mobile.jpg"
            alt="Female Model"
            className="lg:hidden w-full my-12"
          />
          <div className=" lg:w-full md:w-3/5 lg:text-left w-10/12 text-center mx-auto my-28">
            <h1 className=" uppercase text-6xl font-medium text-dark-grayish-red">
              <span className="font-light text-desaturated-red">
                We&apos;re
              </span>
              <br /> coming <br /> Soon
            </h1>
            <p className=" font-medium text-base mt-5 text-desaturated-red">
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>
            <form className=" mt-10 relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-10/12 px-7 peer invalid:border-soft-red invalid:border-2 py-3 font-normal outline-none rounded-full bg-transparent border border-desaturated-red placeholder:text-desaturated-red"
              />
              <p className="absolute peer-invalid:block hidden text-soft-red font-normal text-sm left-6 mt-2 ">
                Please provide a valid email
              </p>
              <img
                src="/images/icon-error.svg"
                alt=""
                className="absolute right-1/4 translate-x-3 lg:-translate-x-6 md:translate-x-4 sm:translate-x-7 hidden peer-invalid:block top-1/2 -translate-y-1/2"
              />
              <button>
                <img
                  src="/images/icon-arrow.svg"
                  className="absolute hover:shadow-2xl sm:px-10 px-7 py-4 form-btn top-1/2 -translate-y-1/2 rounded-full -translate-x-1/2"
                />{" "}
              </button>
            </form>
          </div>
        </div>
        <img
          src="/images/hero-desktop.jpg"
          alt="Female Model"
          className="lg:block hidden"
        />
      </main>
    </div>
  );
}
