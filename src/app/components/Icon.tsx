import React from 'react';

import {
  Icon as ChakraIcon,
  IconProps as ChakraIconProps,
} from '@chakra-ui/react';

const ICONS = {
  google: (
    <ChakraIcon viewBox="0 0 20 20" fill="none">
      <g id="Group">
        <path
          id="Shape"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.6 10.2273C19.6 9.51825 19.5364 8.83643 19.4182 8.18188H10V12.0501H15.3818C15.15 13.3001 14.4455 14.3592 13.3864 15.0682V17.5773H16.6182C18.5091 15.8364 19.6 13.2728 19.6 10.2273Z"
          fill="#4285F4"
        />
        <path
          id="Shape_2"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 19.9999C12.7 19.9999 14.9636 19.1044 16.6182 17.5772L13.3864 15.0681C12.4909 15.6681 11.3455 16.0226 10 16.0226C7.39545 16.0226 5.19091 14.2635 4.40455 11.8999H1.06364V14.4908C2.70909 17.759 6.09091 19.9999 10 19.9999Z"
          fill="#34A853"
        />
        <path
          id="Shape_3"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.40455 11.8999C4.20455 11.2999 4.09091 10.659 4.09091 9.99994C4.09091 9.34085 4.20455 8.69994 4.40455 8.09994V5.50903H1.06364C0.386364 6.85903 0 8.38631 0 9.99994C0 11.6136 0.386364 13.1409 1.06364 14.4909L4.40455 11.8999Z"
          fill="#FBBC05"
        />
        <path
          id="Shape_4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 3.97727C11.4682 3.97727 12.7864 4.48182 13.8227 5.47273L16.6909 2.60455C14.9591 0.990909 12.6955 0 10 0C6.09091 0 2.70909 2.24091 1.06364 5.50909L4.40455 8.1C5.19091 5.73636 7.39545 3.97727 10 3.97727Z"
          fill="#EA4335"
        />
      </g>
    </ChakraIcon>
  ),
  'chevron-up': (
    <ChakraIcon viewBox="0 0 15 15" fill="none">
      <g id="Chevron up">
        <path
          id="Icon"
          d="M3.125 9.375L7.5 5L11.875 9.375"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </ChakraIcon>
  ),
  'arrows-clockwise': (
    <ChakraIcon viewBox="0 0 17 17" fill="none">
      <path
        d="M11.7008 6.62071H14.8883V3.43321"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.36953 4.36952C4.91167 3.82659 5.55553 3.39587 6.26427 3.102C6.97302 2.80812 7.73275 2.65686 8.5 2.65686C9.26726 2.65686 10.027 2.80812 10.7357 3.102C11.4445 3.39587 12.0883 3.82659 12.6305 4.36952L14.8883 6.62069"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29922 10.3793H2.11172V13.5668"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6305 12.6305C12.0883 13.1734 11.4445 13.6041 10.7357 13.898C10.027 14.1919 9.26726 14.3431 8.5 14.3431C7.73275 14.3431 6.97302 14.1919 6.26427 13.898C5.55553 13.6041 4.91167 13.1734 4.36953 12.6305L2.11172 10.3793"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </ChakraIcon>
  ),
} as const;

export type IconName = keyof typeof ICONS;

interface IconProps extends ChakraIconProps {
  name: keyof typeof ICONS;
}

export const Icon: React.FC<IconProps> = ({ name, boxSize = 5, ...props }) => {
  return React.cloneElement(ICONS[name], { boxSize, ...props });
};
