export default function Memories() {
  return (
    <section className="bg-bg-secondary">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-strong mb-t-2 text-title mt-s-1">Memories</h3>
        <p className="mb-s-1">Out best works from time to time</p>
      </div>
      <div className="max-w-container mx-auto w-full flex flex-col items-center justify-center mb-s-1">
        <img src="/assets/img/memories.jpg" alt="memories" />
      </div>
      <div className="flex flex-col items-center justify-center mt-t-1">
        <div className="max-w-container mx-auto w-full flex flex-col items-center justify-center">
          <img src="/assets/img/rail-img.jpg" alt="rail-img" />
        </div>
        <div className="h-[110px] mt-s-1">
          <div className="flex justify-center items-center h-full">
            <button
              onClick={() => {
                window.open("https://youtu.be/7grEl4RoUR0", "_blank");
              }}
              className="w-[200px] p-btn-lg font-strong bg-btn-primary hover:bg-btn-hover text-a duration-300 text-white"
            >
              ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
