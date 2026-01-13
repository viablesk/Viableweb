"use client";

import * as React from "react";

function Logo({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 290 290"
      {...props}
    >
      <circle
        cx={145}
        cy={145}
        r={145}
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M50 35a145 145 0 0 0 34 241l30-48c-8-64-31-128-64-193ZM10 92a145 145 0 0 0 49 170c-7-52-26-108-49-170Z"
        style={{
          fill: "url(#a)",
        }}
      />
      <path
        d="M10 92a145 145 0 0 0 49 170c-7-52-26-108-49-170Z"
        style={{
          fill: "url(#b)",
        }}
      />
      <path
        d="M281 95a145 145 0 0 1-136 195c-16 0-32-3-46-7l1-1c71-35 141-100 181-188v1Z"
        style={{
          fill: "url(#c)",
        }}
      />
      <path
        d="M281 94A391 391 0 0 1 99 283L253 48c12 14 21 29 28 46Z"
        style={{
          fill: "url(#d)",
        }}
      />
      <path
        d="M213 17c10 5 19 11 27 19l-99 148-13-26 85-141Z"
        style={{
          fill: "#1c9294",
        }}
      />
      <path
        d="M128 158 63 25a144 144 0 0 1 150-8l-85 141Z"
        style={{
          fill: "url(#e)",
        }}
      />
      <defs>
        <linearGradient
          id="a"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="matrix(67 201 -193 70 29 68)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#23274a",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#0b8d9a",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient
          id="b"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="matrix(68 -18 18 70 -36 188)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#1f7cb3",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#79aecd",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient
          id="c"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="matrix(228 -256 251 233 152 360)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#188180",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.6}
            style={{
              stopColor: "#b3d1d1",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#f2f2f2",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient
          id="d"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="matrix(170 -212 207 173 99 283)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "#277275",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#2faab5",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
        <linearGradient
          id="e"
          x1={0}
          x2={1}
          y1={0}
          y2={0}
          gradientTransform="matrix(-21 -252 247 -22 138 184)"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset={0}
            style={{
              stopColor: "white",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={0.5}
            style={{
              stopColor: "#c4dee3",
              stopOpacity: 1,
            }}
          />
          <stop
            offset={1}
            style={{
              stopColor: "#1c8094",
              stopOpacity: 1,
            }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Logo };
