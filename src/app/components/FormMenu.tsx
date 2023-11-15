import React from 'react';

import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from '@chakra-ui/react';

import { Controller, useFormContext } from 'react-hook-form';

import { Icon, type IconName } from './Icon';

interface FormMenuProps {
  name: string;
  label?: string;
  icon?: IconName;
  options: Record<string, string | number>;
  defaultValue?: string;
  isDisabled?: boolean;
}

export const FormMenu: React.FC<FormMenuProps> = ({
  name,
  label,
  icon,
  options,
  defaultValue = Object.values(options)[0],
  isDisabled = false,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <FormControl
      as={VStack}
      w="100%"
      align="start"
      spacing={0}
      isInvalid={false}
      isDisabled={isDisabled}
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          ml={1}
          color="white"
          fontSize="10px"
          fontWeight="700"
          textTransform="uppercase"
        >
          {label}
        </FormLabel>
      )}

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <Menu>
              <MenuButton
                as={Button}
                h={10}
                w={56}
                pl={5}
                pr={3}
                color="white"
                fontSize="xs"
                fontWeight="500"
                textAlign="left"
                rounded="3xl"
                bgColor="purple.200"
                rightIcon={
                  icon && <Icon name={icon} transform="rotate(180deg)" />
                }
                isDisabled={isDisabled}
              >
                {Object.keys(options).find(
                  (key) => options[key] === field.value
                ) || defaultValue}
              </MenuButton>
              <MenuList
                bgColor="purple.200"
                border="none"
                backdropFilter="blur(4px)"
              >
                {Object.entries(options)
                  .filter(([key, value]) => value !== field.value)
                  .map(([key, value]) => (
                    <MenuItem
                      as={Button}
                      key={value}
                      color="white"
                      fontSize="xs"
                      fontWeight="500"
                      bgColor="transparent"
                      onClick={() => field.onChange(value)}
                    >
                      {key}
                    </MenuItem>
                  ))}
              </MenuList>
            </Menu>
          );
        }}
      />

      {error && (
        <FormErrorMessage color="red" fontWeight="500" fontSize="xs">
          {error?.message?.toString()}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
