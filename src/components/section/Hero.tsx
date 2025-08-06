export default function Hero() {
  return (
    <section
      className="min-h-screen w-full relative"
      style={{
        backgroundImage: "url(/assets/img/hero.gif)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white mx-auto mb-t-1">
          <h1 className="text-h1 mb-[64px]">Digital Solution Provider</h1>
          {/* space가 안먹혀지는이유 */}
          <div className="flex flex-col gap-space">
            <h3 className="text-strong font-strong ">Hway Inc.</h3>
            <p className="">
              We are thinking about the way of rail signal system should take,
            </p>
            <p className="">
              efforts are made to harmonize human and technology.
            </p>
            <p className="">
              We want to create a better rail environment through new
              challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
