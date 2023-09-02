export default function Form() {
    return (
      <div className="max-w-2xl border-2 px-10 absolute bg-blue-950 bg-blend-luminosity rounded-md">
        <form className="border-white flex flex-col text-xs">
          <div className="flex flex-row mt-5">
            <input
              type="text"
              placeholder="first name"
              className="border-b-1 border-white bg-blue-950 focus:border-none mr-10 py-3"
            />
            <input
              type="text"
              placeholder="last name"
              className="border-b-1 border-white bg-blue-950 focus:border-none py-3"
            />
          </div>
          <div className="flex flex-row mt-5">
            <input
              type="text"
              placeholder="phone number"
              className="border-b-1 border-white bg-blue-950 focus:border-none mr-10 py-3"
            />
            <input
              type="text"
              placeholder="email"
              className="border-b-1 border-white bg-blue-950 focus:border-none py-3"
            />
          </div>
          <input
            type="text"
            placeholder="group, organization, or company"
            className="border-b-1 border-white bg-blue-950 focus:border-none mt-5 py-3"
          />
          <textarea
            rows={5}
            className="border-b-1 border-white bg-blue-950 focus:border-none mt-5"
            placeholder="how can we help you?"
          ></textarea>
          <button type="Submit" className="mt-5 border-1 py-3 px-10 rounded-md max-w-md self-center bg-blue-button mb-5">Submit</button>
        </form>
      </div>
    );
  }
  