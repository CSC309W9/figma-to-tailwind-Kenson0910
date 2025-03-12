// app/page.js
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#db4439] to-[#75241e] text-[#eaecd7]">
      
      {}
      <header className="flex justify-between w-full max-w-5xl p-4">
        <div className="text-2xl font-bold">Front Page</div>
        <div className="text-2xl font-bold">About me</div>
        <div className="text-2xl font-bold">Contact info</div>
        <div className="text-2xl font-bold">Profile</div>
      </header>

      {}
      <main className="flex flex-col items-center text-center gap-8 w-full max-w-3xl">
        <h1 className="text-[50px] font-black leading-[134.20px]">
          About me
        </h1>

        <h2 className="text-[40px] font-semibold leading-[48.80px]">
         I am a utm student that want to complete this lab, I don't know what pic to put. I guess I will put my fav anime
        </h2>

        <div className="relative w-[200px] h-[280px] bg-[#d9d9d9] rounded-lg shadow-md">
          <img 
            className="w-full h-auto rounded-lg" 
            src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2024/08/spice-and-wolf-new-arc-key-visual-1-scaled.jpg?resize=696%2C984&ssl=1"
          />
        </div>

        <button className="bg-[#eaecd7] text-[#db4439] px-6 py-3 rounded-full font-black">
          Click
        </button>
      </main>

      {}
      <footer className="bg-white text-[#db4439] w-full text-center p-4 mt-8">
        <p className="text-2xl font-black">Thank you for reading all this</p>
      </footer>
    </div>
  );
}
