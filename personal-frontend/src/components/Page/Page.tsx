import React, { ReactNode, useEffect, useRef, useState } from "react"
import "./Page.css"
import { debounce } from "../../util/func";

interface PageProps {
  pageNum: number;
  children: ReactNode;
}

const Page : React.FC<PageProps> = ({pageNum, children}) => {
    const [isVisible, setVisible] = useState(false);
    const hidden_style = useRef("page-canvas opacity-0");
    let startPoint = pageNum * window.innerHeight;
    let endPoint = (pageNum + 1) * window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setVisible(scrollPosition >= startPoint && scrollPosition < endPoint);
    };

    const handleResize = () => {
      startPoint = pageNum * window.innerHeight;
      endPoint = (pageNum + 1) * window.innerHeight;
    };
    const debouncedResize = debounce(handleResize, 200);

    useEffect(() => {
      hidden_style.current += " animate-fade-out";

      const scrollPosition = window.scrollY;
      setVisible(scrollPosition >= startPoint && scrollPosition < endPoint);

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', debouncedResize);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', debouncedResize);
      };
    }, []);

    return (
      <>
        <div className="page-base">
          <div className={isVisible? "page-canvas animate-fade-in opacity-1" : hidden_style.current}>
            {children}
          </div>
        </div>
      </>
    )
  }
  
  export default Page
  