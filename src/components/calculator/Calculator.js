import React, { useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
import "./Calculator.css";
import { btns, action_btns } from "./btnsConfig";
const Calculator = () => {
  const resultDiv = useRef(null);
  const calculator = useRef(null);
  const resultCalculate = useRef(null);
  const clickHandler = (btn) => {
    if (btn.action === action_btns.ADD) {
      const container = resultCalculate.current.hasChildNodes()
        ? resultCalculate.current
        : resultDiv.current;
      createSpan(container, btn);
    }
    if (btn.action === action_btns.THEME) {
      document.querySelector('html').classList.toggle('dark')
    }
    if (btn.action === action_btns.CLEAR) {
      const oprtDiv = resultDiv.current;
      const oprtDivSpans = oprtDiv.querySelectorAll("span");
      const oprCalculate = resultCalculate.current;
      const oprCalculateSpanc = oprCalculate.querySelectorAll("span");

      oprtDiv.classList.remove("-translate-y-16", "scale-[.5]", "opacity-50");

      Array.from(oprtDivSpans).forEach((item) => {
        removeElment(item);
      });
      Array.from(oprCalculateSpanc).forEach((item) => {
        removeElment(item);
      });
    }
    if (btn.action === action_btns.CALC) {
      if (!resultCalculate.current.hasChildNodes()) {
        const valuesSpan = [];
        let result = "";
        const spans = resultDiv.current.querySelectorAll("span");
        const ConvertToArr = Array.from(spans);
        ConvertToArr.forEach((spanItem) => {
          if (spanItem.textContent === "x") {
            valuesSpan.push("*");
          } else {
            valuesSpan.push(spanItem.textContent);
          }
        });
        result = valuesSpan.join("");
        resultDiv.current.classList.add(
          "-translate-y-16",
          "scale-[.5]",
          "opacity-50"
        );
        calculate(result);
      } else if (resultCalculate.current.hasChildNodes()) {
        const valuesSpan = [];
        let result = "";
        const actionDiv = resultDiv.current;
        const secondDiv = resultCalculate.current.querySelectorAll("span");
        actionDiv.innerHTML = "";
        actionDiv.classList.remove(
          "-translate-y-16",
          "scale-[.5]",
          "opacity-50"
        );
        Array.from(secondDiv).forEach((item) => {
          // actionDiv.appendChild(item);
          if (item.textContent === "x") {
            valuesSpan.push("*");
            actionDiv.appendChild(item);
          } else {
            valuesSpan.push(item.textContent);
            actionDiv.appendChild(item);
          }
        });
        result = valuesSpan.join("");
        calculate(result);
        actionDiv.classList.add("-translate-y-16", "scale-[.5]", "opacity-50");
      }
    }
  };
  const calculate = (data) => {
    try {
      const resultCalc = resultCalculate.current;
      const calc = Number(eval(data)).toFixed(2);
      const span = document.createElement("span");
      const spanContent = document.createTextNode(calc);
      span.classList.add("inline-block", "overflow-hidden", "transition-all");
      span.append(spanContent);

      resultCalc.appendChild(span);
      const width = span.offsetWidth + "px";

      span.style.width = "0";
      setTimeout(() => {
        span.style.width = width;
      }, 100);
    } catch (error) {
      const oprtDiv = resultDiv.current;
      const oprtDivSpans = oprtDiv.querySelectorAll("span");
      const oprCalculate = resultCalculate.current;
      const oprCalculateSpanc = oprCalculate.querySelectorAll("span");

      oprtDiv.classList.remove("-translate-y-16", "scale-[.5]", "opacity-50");

      Array.from(oprtDivSpans).forEach((item) => {
        removeElment(item);
      });
      Array.from(oprCalculateSpanc).forEach((item) => {
        removeElment(item);
      });
      alert("Syntax error");
    }
  };
  const createSpan = (elm, button) => {
    // console.log(elm);
    // console.log(button);
    if (button.action === action_btns.ADD) {
      const span = document.createElement("span");
      const spanContent = document.createTextNode(button.display);
      span.classList.add("inline-block", "overflow-hidden", "transition-all");
      span.append(spanContent);
      elm.appendChild(span);
      const width = span.offsetWidth + "px";
      span.style.width = "0px";

      setTimeout(() => {
        span.style.width = width;
      }, 50);
    }
  };
  const removeElment = (element) => {
    const el = element;
    setTimeout(() => {
      el.style.width = "0";
    }, 50);
    setTimeout(() => {
      element.remove();
    }, 220);
  };
  useEffect(() => {
    // console.log(findDOMNode(calculator.current).children);
  }, []);
  return (
    <section ref={calculator} className="sm:flex sm:justify-center sm:h-screen">
      <div className=" bg-zinc-100 sm:w-[500px] sm:h-[95%] sm:my-auto sm:shadow-xl sm:shadow-gray-300	 sm:rounded h-screen px-2 flex flex-col items-center transition-all dark:bg-slate-800 ">
        <div className="result relative flex flex-col items-end  pt-5  h-[20%] w-full   text-5xl font-light">
          <div
            ref={resultDiv}
            className="result_operation pr-3 absolute bottom-0 right-0 dark:text-zinc-50 transition-transform duration-300 origin-bottom-right	" //
          ></div>
          <div
            ref={resultCalculate}
            className="result_calc pr-3 dark:text-zinc-50 absolute bottom-0 right-0 transition-transform duration-300 origin-bottom-right"
          ></div>
        </div>
        <div className="h-[80%] w-full grid gap-2 grid-cols-4 p-2 dark:text-zinc-50 ">
          {btns.map((btn, indexBtn) => {
            return (
              <button
                key={indexBtn}
                className={`${btn.class} text-2xl font-semibold active:dark:bg-slate-700/40  dark:bg-slate-700/25`}
                onClick={() => clickHandler(btn)}
              >
                {btn.display}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
