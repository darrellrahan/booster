"use client";

import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";
import { useTogglerContext } from "../context/toggler";

function Faq() {
  const questions = [
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const { showAnswer, setShowAnswer } = useTogglerContext();

  function getParams(id: number): {
    q1: boolean;
    q2: boolean;
    q3: boolean;
    q4: boolean;
    q5: boolean;
  } {
    switch (id) {
      case 1:
        return {
          q1: !showAnswer.q1,
          q2: false,
          q3: false,
          q4: false,
          q5: false,
        };
      case 2:
        return {
          q1: false,
          q2: !showAnswer.q2,
          q3: false,
          q4: false,
          q5: false,
        };
      case 3:
        return {
          q1: false,
          q2: false,
          q3: !showAnswer.q3,
          q4: false,
          q5: false,
        };
      case 4:
        return {
          q1: false,
          q2: false,
          q3: false,
          q4: !showAnswer.q4,
          q5: false,
        };
      case 5:
        return {
          q1: false,
          q2: false,
          q3: false,
          q4: false,
          q5: !showAnswer.q5,
        };
    }
    return { q1: false, q2: false, q3: false, q4: false, q5: false };
  }

  function getState(id: number) {
    switch (id) {
      case 1:
        return showAnswer.q1;
      case 2:
        return showAnswer.q2;
      case 3:
        return showAnswer.q3;
      case 4:
        return showAnswer.q4;
      case 5:
        return showAnswer.q5;
    }
  }

  return (
    <section
      id="faq"
      className="p-8 lg:p-16 lg:flex justify-between items-center"
    >
      <Image
        src="/faq.svg"
        alt="faq"
        width={500}
        height={500}
        className="lg:w-[500px] lg:h-[500px]"
      />
      <div className="mt-16 lg:mt-0 lg:w-[800px]">
        <h4 className="text-[#2281D5] font-medium mb-4">FAQ</h4>
        <h1 className="text-3xl font-medium mb-12">
          Lorem Ipsum Dorol Sit Amet.
        </h1>
        <div className="space-y-8">
          {questions.map((data, index) => (
            <div
              key={data.question}
              className="border-l-[3.5px] border-[#2281D5] p-4 shadow"
            >
              <button
                onClick={() => setShowAnswer(getParams(index + 1))}
                className="w-full block flex items-center justify-between gap-8 text-lg font-semibold text-left"
              >
                <span>{data.question}</span>
                <span>
                  {getState(index + 1) ? (
                    <ArrowUp size={24} />
                  ) : (
                    <ArrowDown size={24} />
                  )}
                </span>
              </button>
              <p
                className={`${
                  getState(index + 1)
                    ? "max-h-[8rem] lg:max-h-[5rem] pt-6"
                    : "max-h-0 pt-0"
                } transiion-all duration-300 ease-linear overflow-hidden font-light`}
              >
                {data.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
