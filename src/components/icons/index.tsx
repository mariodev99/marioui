"use client";
import { motion } from "framer-motion";

export const InspirationIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ y: [0, -5, 0] }}
    transition={{
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    <path
      d="M3 12H4M12 3V4M20 12H21M5.6 5.6L6.3 6.3M18.4 5.6L17.7 6.3M9.7 17H14.3M9 16C8.16047 15.3704 7.54033 14.4925 7.22743 13.4908C6.91453 12.4892 6.92473 11.4144 7.25658 10.4189C7.58844 9.4233 8.22512 8.55739 9.07645 7.94379C9.92778 7.33019 10.9506 7 12 7C13.0494 7 14.0722 7.33019 14.9236 7.94379C15.7749 8.55739 16.4116 9.4233 16.7434 10.4189C17.0753 11.4144 17.0855 12.4892 16.7726 13.4908C16.4597 14.4925 15.8395 15.3704 15 16C14.6096 16.3865 14.3156 16.8594 14.1419 17.3806C13.9681 17.9018 13.9195 18.4566 14 19C14 19.5304 13.7893 20.0391 13.4142 20.4142C13.0391 20.7893 12.5304 21 12 21C11.4696 21 10.9609 20.7893 10.5858 20.4142C10.2107 20.0391 10 19.5304 10 19C10.0805 18.4566 10.0319 17.9018 9.85813 17.3806C9.6844 16.8594 9.39043 16.3865 9 16Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const ComponentsIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: [0, 360] }}
    transition={{
      duration: 4,
      type: "spring",
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    <motion.path
      d="M4 4H10V12H4V4Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
    <motion.path
      d="M4 16H10V20H4V16Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 4,
      }}
    />
    <motion.path
      d="M14 12H20V20H14V12Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      }}
    />
    <motion.path
      d="M14 4H20V8H14V4Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 4,
      }}
    />
  </motion.svg>
);

export const ToolsIcon = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    animate={{ rotate: [0, 45, -45, 0] }}
    transition={{
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 3,
    }}
  >
    <motion.path
      d="M14.5 5.5L18.5 9.5M12 8L7 3L3 7L8 12M7 8L5.5 9.5M16 12L21 17L17 21L12 16M16 17L14.5 18.5M3 21.0001H7L20 8.00006C20.5304 7.46963 20.8284 6.7502 20.8284 6.00006C20.8284 5.24991 20.5304 4.53049 20 4.00006C19.4696 3.46962 18.7501 3.17163 18 3.17163C17.2499 3.17163 16.5304 3.46962 16 4.00006L3 17.0001V21.0001Z"
      stroke="#828282"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export const LogoIcon = () => (
  <motion.svg
    layout
    xmlns="http://www.w3.org/2000/svg"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    className="h-full"
  >
    <rect width="64" height="64" rx="17" fill="url(#paint0_linear_15_2)" />
    <path
      d="M11.7487 27.9378L18.8664 20.5355C19.8091 19.5551 21.1104 19.001 22.4705 19.001H29.0925C30.2771 19.001 31.2971 19.8372 31.5294 20.9988L33.0224 19.9324C33.8704 19.3267 34.8865 19.001 35.9286 19.001H41.3129C44.0744 19.001 46.313 21.2396 46.313 24.001V27.1908C46.313 27.7431 46.7607 28.1908 47.313 28.1908H47.7058C50.4673 28.1908 52.7058 30.4294 52.7058 33.1908V37.1753C52.7058 39.9367 50.4673 42.1753 47.7058 42.1753H43.3339C41.2804 42.1753 39.4424 40.9015 38.7214 38.9788L37.4185 40.4678C36.4691 41.5529 35.0975 42.1753 33.6557 42.1753H29.4253C27.5315 42.1753 25.8001 41.1053 24.9532 39.4114L24.7369 38.9788L23.3875 40.497C22.4387 41.5645 21.0786 42.1753 19.6504 42.1753H15.3529C12.5915 42.1753 10.3529 39.9367 10.3529 37.1753V31.4034C10.3529 30.1112 10.8531 28.8692 11.7487 27.9378Z"
      fill="url(#paint1_radial_15_2)"
    />
    <path
      d="M13.5901 29.7169L20.7232 22.3166C21.2886 21.73 22.0684 21.3986 22.8831 21.3986H27.1206C28.7726 21.3986 30.1118 22.7378 30.1118 24.3899C30.1118 25.3375 31.3096 25.7507 31.8939 25.0046L33.8172 22.5489C34.3858 21.8228 35.2568 21.3986 36.1791 21.3986H40.9304C42.5873 21.3986 43.9304 22.7418 43.9304 24.3986V27.5884C43.9304 29.2453 45.2736 30.5884 46.9304 30.5884H47.3083C48.9651 30.5884 50.3083 31.9316 50.3083 33.5884V36.7782C50.3083 38.4351 48.9651 39.7782 47.3083 39.7782H44.0959C42.439 39.7782 41.0959 38.4351 41.0959 36.7782V35.6101C41.0959 34.7088 39.9972 34.2675 39.3738 34.9184L35.6039 38.8535C35.038 39.4442 34.2555 39.7782 33.4375 39.7782H30.134C28.4772 39.7782 27.134 38.4351 27.134 36.7782V35.6059C27.134 34.7052 26.0366 34.2636 25.4127 34.9133L21.6266 38.8561C21.0609 39.4452 20.2794 39.7782 19.4627 39.7782H15.75C14.0931 39.7782 12.75 38.4351 12.75 36.7782V31.7989C12.75 31.0223 13.0511 30.276 13.5901 29.7169Z"
      fill="white"
      stroke="#212121"
      strokeWidth="2"
    />
    <defs>
      <linearGradient
        id="paint0_linear_15_2"
        x1="37.6471"
        y1="6.22858e-08"
        x2="28.7059"
        y2="64.9412"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#232323" />
        <stop offset="1" stopColor="#020202" />
      </linearGradient>
      <radialGradient
        id="paint1_radial_15_2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(41.5183 23.3962) rotate(144.639) scale(23.8952 43.6705)"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </radialGradient>
    </defs>
  </motion.svg>
);

export const ComponentCardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M4 16L8 20L12 16L8 12L4 16Z"
      stroke="url(#paint0_linear_40_44)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 16L24 20L28 16L24 12L20 16Z"
      stroke="url(#paint1_linear_40_44)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 8L16 12L20 8L16 4L12 8Z"
      stroke="url(#paint2_linear_40_44)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 24L16 28L20 24L16 20L12 24Z"
      stroke="url(#paint3_linear_40_44)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_40_44"
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_40_44"
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_40_44"
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_40_44"
        x1="16"
        y1="4"
        x2="16"
        y2="28"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#A8FF78" />
        <stop offset="1" stopColor="#78FFD6" />
      </linearGradient>
    </defs>
  </svg>
);

export const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12H19M19 12L13 18M19 12L13 6"
      stroke="#000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MarioUiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="117"
    height="26"
    viewBox="0 0 117 26"
    fill="none"
  >
    <path
      d="M0.76 25C0.76 22.2693 0.76 19.5173 0.76 16.744C0.76 13.9493 0.76 11.1867 0.76 8.456C1.63467 8.456 2.52 8.456 3.416 8.456C4.312 8.456 5.18667 8.456 6.04 8.456C6.04 8.60533 6.04 8.744 6.04 8.872C6.04 9 6.04 9.13867 6.04 9.288C6.59467 8.88267 7.21333 8.57333 7.896 8.36C8.57867 8.12533 9.28267 8.008 10.008 8.008C10.7973 8.008 11.5227 8.14667 12.184 8.424C12.8453 8.68 13.4107 9.064 13.88 9.576C14.5627 9.08533 15.3307 8.70133 16.184 8.424C17.0587 8.14667 17.9547 8.008 18.872 8.008C20.1733 8.008 21.2933 8.27467 22.232 8.808C23.192 9.34133 23.928 10.0987 24.44 11.08C24.9733 12.0613 25.24 13.2453 25.24 14.632C25.24 16.3387 25.24 18.0667 25.24 19.816C25.24 21.5653 25.24 23.2933 25.24 25C24.3867 25 23.512 25 22.616 25C21.72 25 20.8347 25 19.96 25C19.96 23.4 19.96 21.7787 19.96 20.136C19.96 18.4933 19.96 16.872 19.96 15.272C19.96 14.5467 19.7893 13.96 19.448 13.512C19.128 13.0427 18.6053 12.808 17.88 12.808C17.176 12.808 16.6213 13.032 16.216 13.48C15.832 13.9067 15.64 14.504 15.64 15.272C15.64 16.872 15.64 18.4933 15.64 20.136C15.64 21.7787 15.64 23.4 15.64 25C14.7867 25 13.912 25 13.016 25C12.12 25 11.2347 25 10.36 25C10.36 23.4 10.36 21.7787 10.36 20.136C10.36 18.4933 10.36 16.872 10.36 15.272C10.36 14.5467 10.1893 13.96 9.848 13.512C9.528 13.0427 9.00533 12.808 8.28 12.808C7.576 12.808 7.02133 13.032 6.616 13.48C6.232 13.9067 6.04 14.504 6.04 15.272C6.04 16.872 6.04 18.4933 6.04 20.136C6.04 21.7787 6.04 23.4 6.04 25C5.18667 25 4.312 25 3.416 25C2.52 25 1.63467 25 0.76 25ZM39.55 25C39.55 24.8293 39.55 24.6693 39.55 24.52C39.55 24.3493 39.55 24.1893 39.55 24.04C39.0167 24.488 38.4087 24.8293 37.726 25.064C37.0647 25.32 36.35 25.448 35.582 25.448C34.494 25.448 33.47 25.2453 32.51 24.84C31.55 24.4133 30.6967 23.816 29.95 23.048C29.2247 22.2587 28.6487 21.3307 28.222 20.264C27.8167 19.1973 27.614 18.0133 27.614 16.712C27.614 15.3893 27.8167 14.1947 28.222 13.128C28.6487 12.0613 29.2247 11.1547 29.95 10.408C30.6967 9.64 31.55 9.05333 32.51 8.648C33.47 8.22133 34.4833 8.008 35.55 8.008C36.318 8.008 37.0433 8.136 37.726 8.392C38.4087 8.62667 39.0167 8.95733 39.55 9.384C39.55 9.21333 39.55 9.05333 39.55 8.904C39.55 8.75467 39.55 8.60533 39.55 8.456C40.4247 8.456 41.31 8.456 42.206 8.456C43.102 8.456 43.9767 8.456 44.83 8.456C44.83 11.1867 44.83 13.9493 44.83 16.744C44.83 19.5173 44.83 22.2693 44.83 25C43.9767 25 43.102 25 42.206 25C41.31 25 40.4247 25 39.55 25ZM36.286 20.776C37.31 20.776 38.1313 20.4027 38.75 19.656C39.3687 18.9093 39.678 17.928 39.678 16.712C39.678 15.496 39.3687 14.5253 38.75 13.8C38.1313 13.0533 37.31 12.68 36.286 12.68C35.2407 12.68 34.4087 13.0427 33.79 13.768C33.1927 14.4933 32.894 15.4747 32.894 16.712C32.894 17.9493 33.1927 18.9413 33.79 19.688C34.4087 20.4133 35.2407 20.776 36.286 20.776ZM48.3538 25C48.3538 22.2693 48.3538 19.5173 48.3538 16.744C48.3538 13.9493 48.3538 11.1867 48.3538 8.456C49.2284 8.456 50.1138 8.456 51.0098 8.456C51.9058 8.456 52.7804 8.456 53.6338 8.456C53.6338 8.60533 53.6338 8.75467 53.6338 8.904C53.6338 9.05333 53.6338 9.20267 53.6338 9.352C54.2951 8.88267 55.0418 8.53067 55.8738 8.296C56.7058 8.06133 57.6124 7.99733 58.5938 8.104C58.5938 8.95733 58.5938 9.82133 58.5938 10.696C58.5938 11.5707 58.5938 12.4347 58.5938 13.288C56.9084 13.0533 55.6604 13.2027 54.8498 13.736C54.0391 14.248 53.6338 15.0907 53.6338 16.264C53.6338 17.6933 53.6338 19.144 53.6338 20.616C53.6338 22.088 53.6338 23.5493 53.6338 25C52.7804 25 51.9058 25 51.0098 25C50.1138 25 49.2284 25 48.3538 25ZM63.7948 6.568C63.1761 6.568 62.6108 6.41867 62.0988 6.12C61.6081 5.82133 61.2134 5.42667 60.9148 4.936C60.6161 4.44533 60.4668 3.90133 60.4668 3.304C60.4668 2.70667 60.6161 2.17333 60.9148 1.704C61.2134 1.21333 61.6081 0.818665 62.0988 0.519999C62.6108 0.221332 63.1761 0.0719986 63.7948 0.0719986C64.3921 0.0719986 64.9361 0.221332 65.4268 0.519999C65.9388 0.818665 66.3441 1.21333 66.6428 1.704C66.9414 2.17333 67.0908 2.70667 67.0908 3.304C67.0908 3.90133 66.9414 4.44533 66.6428 4.936C66.3441 5.42667 65.9388 5.82133 65.4268 6.12C64.9361 6.41867 64.3921 6.568 63.7948 6.568ZM61.1388 25C61.1388 22.2693 61.1388 19.5173 61.1388 16.744C61.1388 13.9493 61.1388 11.1867 61.1388 8.456C62.0134 8.456 62.8988 8.456 63.7948 8.456C64.6908 8.456 65.5654 8.456 66.4188 8.456C66.4188 11.1867 66.4188 13.9493 66.4188 16.744C66.4188 19.5173 66.4188 22.2693 66.4188 25C65.5654 25 64.6908 25 63.7948 25C62.8988 25 62.0134 25 61.1388 25ZM77.9438 25.512C76.7064 25.512 75.5544 25.2987 74.4878 24.872C73.4211 24.424 72.4931 23.8053 71.7038 23.016C70.9144 22.2053 70.2958 21.2667 69.8478 20.2C69.4211 19.1333 69.2078 17.9707 69.2078 16.712C69.2078 15.4533 69.4211 14.2907 69.8478 13.224C70.2958 12.1573 70.9144 11.2293 71.7038 10.44C72.4931 9.65067 73.4211 9.04267 74.4878 8.616C75.5544 8.168 76.7064 7.944 77.9438 7.944C79.2024 7.944 80.3544 8.168 81.3998 8.616C82.4664 9.04267 83.3944 9.65067 84.1838 10.44C84.9731 11.2293 85.5811 12.1573 86.0078 13.224C86.4558 14.2907 86.6798 15.4533 86.6798 16.712C86.6798 17.9707 86.4558 19.1333 86.0078 20.2C85.5811 21.2667 84.9731 22.2053 84.1838 23.016C83.3944 23.8053 82.4664 24.424 81.3998 24.872C80.3544 25.2987 79.2024 25.512 77.9438 25.512ZM77.9438 20.744C78.9891 20.744 79.8211 20.3707 80.4398 19.624C81.0798 18.856 81.3998 17.8853 81.3998 16.712C81.3998 15.5173 81.0798 14.5573 80.4398 13.832C79.8211 13.0853 78.9891 12.712 77.9438 12.712C76.8984 12.712 76.0558 13.0853 75.4158 13.832C74.7971 14.5573 74.4878 15.5173 74.4878 16.712C74.4878 17.8853 74.7971 18.856 75.4158 19.624C76.0558 20.3707 76.8984 20.744 77.9438 20.744ZM107.307 16.744C107.307 18.088 107.073 19.304 106.603 20.392C106.155 21.4587 105.515 22.376 104.683 23.144C103.873 23.912 102.913 24.4987 101.803 24.904C100.715 25.3093 99.5313 25.512 98.2513 25.512C96.9499 25.512 95.7553 25.3093 94.6673 24.904C93.5793 24.4987 92.6299 23.9227 91.8193 23.176C91.0299 22.408 90.4113 21.4907 89.9633 20.424C89.5153 19.3573 89.2913 18.152 89.2913 16.808C89.2913 14.568 89.2913 12.3067 89.2913 10.024C89.2913 7.74133 89.2913 5.48 89.2913 3.24C90.2299 3.24 91.1686 3.24 92.1073 3.24C93.0459 3.24 93.9739 3.24 94.8913 3.24C94.8913 5.43733 94.8913 7.64533 94.8913 9.864C94.8913 12.0827 94.8913 14.2907 94.8913 16.488C94.8913 17.64 95.2113 18.568 95.8513 19.272C96.4913 19.976 97.3126 20.328 98.3153 20.328C99.3179 20.328 100.129 19.976 100.747 19.272C101.387 18.568 101.707 17.64 101.707 16.488C101.707 14.2907 101.707 12.0827 101.707 9.864C101.707 7.64533 101.707 5.43733 101.707 3.24C102.646 3.24 103.585 3.24 104.523 3.24C105.462 3.24 106.39 3.24 107.307 3.24C107.307 5.45867 107.307 7.70933 107.307 9.992C107.307 12.2747 107.307 14.5253 107.307 16.744ZM111.303 25C111.303 21.416 111.303 17.7893 111.303 14.12C111.303 10.4507 111.303 6.824 111.303 3.24C112.241 3.24 113.18 3.24 114.119 3.24C115.057 3.24 115.985 3.24 116.903 3.24C116.903 6.824 116.903 10.4507 116.903 14.12C116.903 17.7893 116.903 21.416 116.903 25C115.985 25 115.057 25 114.119 25C113.18 25 112.241 25 111.303 25Z"
      fill="url(#paint0_linear_82_221)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_82_221"
        x1="-1"
        y1="14"
        x2="120"
        y2="14"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="#B7B7B7" />
      </linearGradient>
    </defs>
  </svg>
);
