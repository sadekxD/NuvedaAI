export default function IconMark({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="25 205 80 90"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="icon-grad-a"
          x1="81.32"
          y1="280.74"
          x2="81.32"
          y2="212.79"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ddc5ff" />
          <stop offset=".3" stopColor="#aa80ff" />
          <stop offset=".68" stopColor="#6f2fff" />
        </linearGradient>
        <linearGradient
          id="icon-grad-b"
          x1="332.48"
          y1="700.52"
          x2="332.48"
          y2="632.57"
          gradientTransform="translate(379.97 919.78) rotate(-180)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#ddc5ff" />
          <stop offset=".3" stopColor="#aa80ff" />
          <stop offset=".68" stopColor="#6f2fff" />
        </linearGradient>
      </defs>
      <path
        fill="url(#icon-grad-a)"
        d="M65.79,212.79c10.36,7.3,20.71,14.6,31.07,21.9-.08,9.64-.16,19.28-.24,28.92l-29.66,17.14-.16-19.19,26.11-17.3-26.64-.17-.48-31.3Z"
      />
      <path
        fill="url(#icon-grad-b)"
        d="M63.02,287.21c-10.36-7.3-20.71-14.6-31.07-21.9.08-9.64.16-19.28.24-28.92l29.66-17.14.16,19.19-26.11,17.3,26.64.17.48,31.3Z"
      />
    </svg>
  );
}
