import ReactGA from 'react-ga';

export const GAinit = () => {
  ReactGA.initialize("G-98HW834Y93");
}

export const GAlogPageView = (pageName: string) => {
  ReactGA.set({ page: pageName });
  ReactGA.pageview(pageName);
};