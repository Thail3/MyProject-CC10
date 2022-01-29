function Profile() {
  return (
    <div class="flex justify-center md:container md:mx-auto m-0 p-0 box-border">
      <div class="">
        <div>
          <img
            src="https://pbs.twimg.com/profile_banners/607109926/1622322022/1500x500"
            alt=""
          />
        </div>

        <div class="flex justify-between">
          <div class="rounded-full border-4 border-white inline-block -mt-16 w-32 ml-3">
            <img class="w-32 rounded-full" src="" alt="" />
          </div>

          <div>
            <button className="rounded-full px-3 py-2 mt-3 mr-3 transition hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              แก้ไขพื้นหลังโปรไฟล์
            </button>
            <button className="rounded-full px-3 py-2 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              <i class="bi bi-house-door-fill"></i>
            </button>
            <button className="rounded-full px-3 py-2 ml-3 hover:bg-blue-50 inline-block border-2 border-blue-400 text-blue-400 font-bold">
              <i class="bi bi-person-lines-fill"></i>
            </button>
          </div>
        </div>

        <div class="ml-4">
          <p class="font-bold text-lg">Josh W</p>
        </div>

        <div class="px-3 mt-3">
          <p>
            DHIS2. Debian. React. Vue. Gatsby. PWAs. ES6. Node. Electron.
            Tailwind. Working with a UK charity to bring EMRs to the Developing
            World.
          </p>
        </div>

        <div class="px-2 flex mt-3">
          <div class="flex items-center ">
            <i class="fas fa-calendar-alt"></i>
            <p class="ml-2">Joined June 2012</p>
          </div>
        </div>

        <div class="flex mt-3 border-b"></div>

        <div class="p-3">
          <div>
            <div class="mt-2">
              <div class="flex">
                <div>
                  <img class="w-16 rounded-full" src="" alt="" />
                </div>

                <div class="ml-4">
                  <p>
                    <span class="font-bold">Josh W</span>{" "}
                    <span class="text-gray-500"> · Jul 21</span>
                  </p>

                  <p>
                    Launched my new website a few weeks ago Rocket. Any
                    feedback? Too boring? Too basic? Not sure what else to add
                    to it!
                  </p>
                </div>
              </div>

              <div class="flex flex-1 rounded-lg border ml-14 mt-3 cursor-pointer">
                <div class="flex justify-center items-center py-8 px-12 bg-gray-100 border-r">
                  <i class="fas fa-newspaper text-3xl text-gray-500"></i>
                </div>

                <div class="flex-1 flex flex-col justify-center py-8 pr-16 pl-4">
                  <p>Joshua Welford</p>
                  <p class="text-gray-500">Joshua Welford</p>
                </div>
              </div>

              <div class="flex justify-around mt-4 pl-3">
                <div class="text-gray-500 hover:text-blue-400 transition">
                  <i class="bi bi-chat-text-fill"></i> 3
                </div>

                <div class="text-gray-500 hover:text-blue-400 transition">
                  <i class="bi bi-suit-heart-fill"></i> 1
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
