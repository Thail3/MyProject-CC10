import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  return (
    <>
      <div className="md:container md:mx-auto m-0 p-0 box-border">
        <div className="text-center p-2.5">HOMECLUB</div>

        <div className="bg-blue-600 rounded-xl">
          <div className="text-center py-4 ">
            <a className="text-white no-underline" href="/">
              Sing up
            </a>
          </div>

          <div className="bg-white px-5 pt-5 rounded-xl">
            <div>
              <p className="font-light text-xs">Sign-in with your account</p>
            </div>

            <form>
              <p className="mt-5">Username</p>
              {/* <label for="username">Username</label> */}
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Username
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>
            <form>
              <p className="mt-2">Email</p>
              {/* <label for="username">Username</label> */}
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Email
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>

            <form className="">
              <p className="mt-2">Password</p>
              {/* <label for="password">Password</label> */}
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>
            <form className="pb-3">
              <p className="mt-2">Confirm Password</p>
              {/* <label for="password">Password</label> */}
              <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">
                  Confirm Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="inputPassword2"
                  placeholder=""
                />
              </div>
            </form>

            <div className="max-w-sm m-auto p-1.5 bg-blue-600 text-center rounded-full">
              <button className="text-white">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
