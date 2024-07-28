// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// function UseScrollToTheTop() {
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0); // Scrolls to the top when the component mounts
//     return () => {
//       window.scrollTo(0, 0);
//     };
//   }, [navigate]);
// }

// export default UseScrollToTheTop;
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const UseScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default UseScrollToTop;
