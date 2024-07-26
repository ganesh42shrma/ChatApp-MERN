import GenderCheckBox from "./GenderCheckBox";

function SignUp() {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-green-600">MERN.gle</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
              Full Name
              </span>
            </label>
            <input
              required="true"
              type="text"
              placeholder="Enter Full Name"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
              User Name
              </span>
            </label>
            <input
              required="true"
              type="text"
              placeholder="Enter User Name"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
              Password
              </span>
            </label>
            <input
              required="true"
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">
              Confirm Password
              </span>
            </label>
            <input
              required="true"
              type="password"
              placeholder="Re enter Password"
              className="w-full input input-bordered h-10"
            ></input>
          </div>
          {/* GENDER CHECKBOX GOES HERE*/}
          <GenderCheckBox/>
          <a
            href="#"
            className="text-sm hover:underline hover:text-green-600 mt-2 inline-block"
          >
            {"Have"} an account ? Sign In
          </a>
          <div>
          <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
