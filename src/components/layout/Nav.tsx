import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [isAtTop, setIsAtTop] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsAtTop(scrollTop === 0);
    };

    window.addEventListener("scroll", handleScroll);

    // 초기 상태 설정
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogoClick = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className={`w-full h-full flex justify-center items-center h-nav fixed top-0 z-50 transition-all duration-300 ${
          isAtTop ? "bg-white" : "bg-white/50 backdrop-blur-sm"
        }`}
        data-scroll="nav"
      >
        <nav className="flex items-center justify-between h-[55px] w-full max-w-[1140px] px-4">
          {/* public 폴더의 이미지 접근 시 절대 경로 사용 */}

          <img
            onClick={handleLogoClick}
            src="/assets/img/logo.png"
            alt="logo"
            className="max-w-[110px] cursor-pointer"
            data-clickable="true"
          />
        </nav>
      </div>
    </>
  );
}
