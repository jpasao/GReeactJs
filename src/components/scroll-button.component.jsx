import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import Button from "./button.component";
import { BUTTON_TYPES } from "../resources/button-types";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 260);
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  window.addEventListener('scroll', toggleVisible);

  const icon = <FaArrowCircleUp onClick={scrollToTop} />

  const props = {
    type: BUTTON_TYPES.scroll,
    content: icon
  }

  const res = visible ? (<Button buttonProps={props} />) : <span />

  return res;
}

export default ScrollButton