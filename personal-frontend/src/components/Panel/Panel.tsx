import React, { ReactNode, useEffect, useRef, useState } from "react"
import "./Panel.css"
import { debounce } from "../../util/func";

interface PageProps {
  panelNum: number;
  id?: string;
  children: ReactNode;
}

const Panel : React.FC<PageProps> = ({panelNum: pageNum, children, id}) => {
    const [isVisible, setVisible] = useState(false);
    const hidden_style = useRef("page-canvas hidden");
    const pageBaseRef = useRef(null);
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
    const debouncedResize = debounce(handleResize, 50);

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
        <div className="page-base" id={id? id : ""} ref={pageBaseRef}>
          <div className={isVisible? "page-canvas animate-fade-in opacity-1" : hidden_style.current}>
            {children}
          </div>
        </div>
      </>
    )
  }
  
  export default Panel
  