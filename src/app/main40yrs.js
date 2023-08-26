export default function FourtyYears() {
  return (
    <div className='flex flex-grow'>
      <div className='flex-col text-white p-2 items-center flex-grow'>
        <div className='flex flex-row place-content-center'>
          <h1 className='drop-shadow-lg text-9xl tracking-wide font-yeseva_one'>
            40 years
          </h1>
          <div className='flex flex-col w-1/6 font-mulish place-content-center mx-8'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className='rounded-full mt-6 p-3 border border-white'>
              Explore
            </button>
          </div>
        </div>
        <h1 className='drop-shadow-lg text-9xl tracking-wide font-yeseva_one'>
          of org
        </h1>
        <h1 className='drop-shadow-lg float-right text-9xl tracking-wide font-yeseva_one'>
          excellence
        </h1>
      </div>
    </div>
  );
}
