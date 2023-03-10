import { useRef, useEffect } from "react";

import "./App.css";

const App = () => {
  const boxes = useRef([]);

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        return boxTop < triggerBottom
          ? box.classList.add("show")
          : box.classList.remove("show");
      });
    };

    window.addEventListener("scroll", checkBoxes);
    checkBoxes();

    return () => window.removeEventListener("scroll", checkBoxes);
  }, []);

  return (
    <>
      <h1>Scroll to see the animation</h1>
      <div className="box" ref={(el) => (boxes.current[0] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[1] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[2] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[3] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[4] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[5] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[6] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[7] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[8] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[9] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[10] = el)}>
        <h2>Content</h2>
      </div>
      <div className="box" ref={(el) => (boxes.current[11] = el)}>
        <h2>Content</h2>
      </div>
    </>
  );
};

export default App;
