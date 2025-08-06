export default function Skills() {
  return (
    <>
      {/* Skills Section 1 */}
      <section
        className="h-[336px] w-full relative"
        style={{
          backgroundImage: "url(/assets/img/skills1.gif)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Skills Content 1 */}
        <div className="relative z-10 h-[336px] flex items-center justify-center">
          <div className="text-center text-white mx-auto">
            <div className="flex flex-col ">
              <h3 className="text-h1  mb-t-2">Rail Solution</h3>
              <p className="">Signal Control Software</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[193px] w-full" />

      {/* Skills Section 2 */}
      <section
        className="h-[336px] w-full relative"
        style={{
          backgroundImage: "url(/assets/img/skills2.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Skills Content 2 */}
        <div className="relative z-10 h-[336px] flex items-center justify-center">
          <div className="text-center text-white mx-auto">
            <div className="flex flex-col ">
              <h3 className="text-h1  mb-t-2">Data Analysis</h3>
              <p className="">For BI / BA</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-[332px]">
        <div className="flex justify-center items-center h-full">
          <button
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=B6NQIGZckkk",
                "_blank"
              );
            }}
            className="p-btn-lg font-strong bg-btn-primary hover:bg-btn-hover text-a duration-300 text-white"
          >
            DATA ANALYSIS
          </button>
        </div>
      </div>

      {/* Skills Section 3 */}
      <section
        className="h-[336px] w-full relative"
        style={{
          backgroundImage: "url(/assets/img/skills3.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Skills Content 3 */}
        <div className="relative z-10 h-[336px] flex items-center justify-center">
          <div className="text-center text-white mx-auto">
            <div className="flex flex-col ">
              <h3 className="text-h1  mb-t-2">AI Utilization</h3>
              <p className="">Convergence System</p>
            </div>
          </div>
        </div>
      </section>
      <div className="h-[332px]">
        <div className="flex justify-center items-center h-full">
          <button
            onClick={() => {
              window.open(
                "https://m.youtube.com/watch?v=T5Tekl2O6xA",
                "_blank"
              );
            }}
            className="p-btn-lg font-strong bg-btn-primary hover:bg-btn-hover text-a duration-300 text-white"
          >
            AI UTILIZATION
          </button>
        </div>
      </div>
    </>
  );
}
