import React from "react";

type Props = {};

export default function FailedTest({}: Props) {
   return <div>FailedTest</div>;
}

// const handleChange = (newIndex: number, handleWheel: any): void => {
//    window.removeEventListener("wheel", handleWheel);
//    const newPage = Object.getOwnPropertyNames(pages)[newIndex];
//    replace({ hash: newPage });
// };
// const handleWheel = (e: any): void => {
//    if (e.deltaY < 0) {
//       console.log("scroll up");
//       if (currentIndex > 0) {
//          const newIndex: number = currentIndex - 1;
//          handleChange(newIndex, handleWheel);
//       }
//    }
//    if (e.deltaY > 0) {
//       console.log("scroll down");
//       if (currentIndex < 3) {
//          const newIndex: number = currentIndex + 1;
//          handleChange(newIndex, handleWheel);
//       }
//    }
// };

// useEffect(() => {
//    setTimeout(() => {
//       window.addEventListener("wheel", handleWheel);
//    }, 1300);
//    return () => {
//       window.removeEventListener("wheel", handleWheel);
//    };
// }, [currentIndex]);

// if (e.deltaY < 0) {
//    console.log("scroll up");
//    console.log(asPath);
//    // console.log("yo estaba en " + currentIndex);
//    // if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
//    // if (currentIndex === 1) router.push("/#home");
//    // if (currentIndex === 2) router.push("/#about");
//    // if (currentIndex === 3) router.push("/#projects");
// }
// if (e.deltaY > 0) {
//    console.log("scroll down");
//    console.log(asPath);
//    // console.log("yo estaba en " + currentIndex);
//    // if (currentIndex === 0) router.push("/#about");
//    // if (currentIndex === 1) router.push("/#projects");
//    // if (currentIndex === 2) router.push("/#contact");
//    // if (currentIndex < 3) setCurrentIndex(currentIndex + 1);
// }
