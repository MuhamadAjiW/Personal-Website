import React, { ReactNode, useEffect, useState } from "react"
import "./Panel.css"
import { debounce } from "../../util/func";
import ReactGA from "react-ga4";

interface PageProps {
  panelNum: number;
  id?: string;
  children: ReactNode;
}

const Panel : React.FC<PageProps> = ({panelNum: pageNum, children, id}) => {
    const [pageStyle, setPageStyle] = useState("page-canvas hidden");
    let shown: boolean = false;
    let startPoint: number = pageNum * window.innerHeight;
    let endPoint: number = (pageNum + 1) * window.innerHeight;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if(scrollPosition >= startPoint && scrollPosition < endPoint){
        setPageStyle("page-canvas animate-fade-in");
        shown = true;
      } else if(shown){
        setPageStyle("page-canvas animate-fade-out");
      }
    };

    const handleResize = () => {
      startPoint = pageNum * window.innerHeight;
      endPoint = (pageNum + 1) * window.innerHeight;
    };
    const debouncedResize = debounce(handleResize, 50);

    useEffect(() => {
      const scrollPosition = window.scrollY;

      if(id) ReactGA.send({ hitType: "pageview", page: `/#${id}`, title: `${id} panel` });

      if(scrollPosition >= startPoint && scrollPosition < endPoint){
        setPageStyle("page-canvas animate-fade-in");
        shown = true;
      }

      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', debouncedResize);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', debouncedResize);
      };
    }, []);

    return (
      <>
        <div className="page-base" id={id? id : ""}>
          <div className={pageStyle}>
            {children}
          </div>
        </div>
      </>
    )
  }
  
  export default Panel
  