import { projects } from "../../constants/about-projects";

export default function About() {
  return (
    // 96px padding-top 은 Tailwind의 pt-24 입니다.
    <section className="pt-24">
      <div className="space-y-8">
        {projects.map((project) => {
          const isEven = project.id % 2 === 0;
          // 짝수는 gray-100, 홀수는 white
          const bgClass = isEven ? "bg-bg-fourth" : "";

          return (
            <div
              key={project.id}
              className={`
                  ${bgClass}
                  w-[100vw]           /* 배경을 화면 전체에 */
                  relative            /* left-1/2, -translate-x-1/2 를 쓰기 위해 */
                  left-1/2
                  -translate-x-1/2
                `}
            >
              <div className="max-w-container mx-auto">
                <div className="flex flex-col lg:flex-row items-center h-[600px] rounded-lg">
                  {isEven ? (
                    /* 짝수: 텍스트 왼쪽, 이미지 오른쪽 */
                    <>
                      <div className="lg:flex-1 max-w-[360px] mr-[100px] tracking-normal">
                        <h3 className="text-title text-strong mb-4">
                          {project.title}
                        </h3>
                        {project.description.split("\n").map((line, idx) => (
                          <p key={idx} className="mt-t-2 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                      <div className="px-15">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-[650px] h-auto object-cover"
                        />
                      </div>
                    </>
                  ) : (
                    /* 홀수: 이미지 왼쪽, 텍스트 오른쪽 */
                    <>
                      <div className="px-15">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-[650px] h-auto object-cover"
                        />
                      </div>
                      <div className="lg:flex-1 max-w-[360px] ml-[100px] tracking-normal">
                        <h3 className="text-title text-strong mb-4">
                          {project.title}
                        </h3>
                        {project.description.split("\n").map((line, idx) => (
                          <p key={idx} className="mt-t-2 leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
