import { useEffect } from "react";
import DesignProvider from "./DesignProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // 우클릭 금지
    const preventContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 개발자 도구 차단
    const preventDevTools = (e: KeyboardEvent) => {
      // F12 키 차단
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+I (개발자 도구)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+J (콘솔)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }

      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }

      // Ctrl+Shift+C (요소 검사)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }
    };

    // 선택적 클릭 차단 (스크롤 관련 요소는 허용)
    const preventSelectiveClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // 스크롤 관련 요소들은 허용
      if (
        target.closest("button") ||
        target.closest("a") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.closest('[role="button"]') ||
        target.closest("[tabindex]") ||
        target.closest('[data-clickable="true"]') ||
        target.closest("[data-scroll]")
      ) {
        return true; // 허용
      }

      // 이미지나 로고 클릭은 허용 (네비게이션용)
      if (target.tagName === "IMG" || target.closest("img")) {
        return true; // 허용
      }

      // 스크롤 컨테이너 내부는 허용
      if (
        target.closest(".scroll-container") ||
        target.closest("[data-scroll]") ||
        window.getComputedStyle(target).overflow !== "visible"
      ) {
        return true; // 허용
      }

      // 스크롤 이벤트는 허용
      if (e.type === "scroll" || e.type === "wheel") {
        return true; // 허용
      }

      // 그 외 클릭은 차단
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // 이벤트 리스너 등록
    // document.addEventListener("contextmenu", preventContextMenu, true);
    // document.addEventListener("keydown", preventDevTools, true);
    // document.addEventListener("click", preventSelectiveClick, true);

    // 개발자 도구 감지 및 차단
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        document.body.innerHTML = "개발자 도구 사용이 금지되었습니다.";
      }
    };

    // 주기적으로 개발자 도구 감지
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // 클린업 함수
    return () => {
      document.removeEventListener("contextmenu", preventContextMenu, true);
      document.removeEventListener("keydown", preventDevTools, true);
      document.removeEventListener("click", preventSelectiveClick, true);
      clearInterval(devToolsInterval);
    };
  }, []);

  return (
    <DesignProvider>
      <>{children}</>
    </DesignProvider>
  );
}
