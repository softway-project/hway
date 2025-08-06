import { BiChevronUp } from "react-icons/bi";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setShowScrollTop(scrollTop > 300); // 300px 이상 스크롤 시 버튼 표시
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="w-full relative h-[183px] bg-[#0E1015]"
        data-scroll="footer"
      >
        <div className="max-w-container mx-auto flex items-center h-full w-full">
          <p className="text-white ">© Hway Inc.</p>
        </div>
      </div>

      {/* 스크롤 상단 버튼 */}
      {showScrollTop && (
        <div
          className="fixed bottom-12 right-12 z-50"
          data-scroll="scroll-button"
        >
          <button
            onClick={scrollToTop}
            className="w-[40px] h-[40px] bg-transparent backdrop-blur-sm flex items-center justify-center hover:bg-btn-hover duration-300 shadow-lg"
            data-clickable="true"
          >
            <BiChevronUp className="text-title text-2xl" />
          </button>
        </div>
      )}
    </>
  );
}
