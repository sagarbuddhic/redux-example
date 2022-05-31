/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counterSlice";
// import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          css={css`
            padding: 25px;
            background-color: grey;
            font-size: 25px;
            border-radius: 2px;
          `}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span
          css={css`
            padding: 20px;
            background-color: orange;
            font-size: 20px;
            border-radius: 2px;
          `}
        >
          {count}
        </span>
        <button
          css={css`
            padding: 25px;
            background-color: grey;
            font-size: 25px;
            border-radius: 2px;
          `}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
