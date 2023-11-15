import React from 'react';

import {
  VStack,
  Input,
  FormErrorMessage,
  FormControl,
  FormLabel,
  InputProps,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';

import { useFormContext } from 'react-hook-form';

import { Icon, type IconName } from './Icon';

interface FormInputProps extends InputProps {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: IconName;
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  placeholder,
  icon,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name];

  return (
    <FormControl
      as={VStack}
      w="100%"
      align="start"
      spacing={0}
      isInvalid={!!error}
    >
      {!!label && (
        <FormLabel
          htmlFor={name}
          color="gray.700"
          fontSize="sm"
          fontWeight="500"
        >
          {label}
        </FormLabel>
      )}

      <InputGroup>
        {!!icon && (
          <InputLeftElement>
            <Icon name={icon} color="gray.500" />
          </InputLeftElement>
        )}

        <Input
          id={name}
          h={10}
          placeholder={placeholder || label}
          _placeholder={{ color: 'white', fontSize: 'xs' }}
          color="white"
          rounded="3xl"
          bgColor="purple.200"
          border="none"
          errorBorderColor="red"
          focusBorderColor="transparent"
          _hover={{
            opacity: 0.9,
          }}
          {...register(name)}
          {...rest}
        />
      </InputGroup>

      {/* {error && (
        <FormErrorMessage color="red.500" fontWeight="500" fontSize="xs">
          {error?.message?.toString()}
        </FormErrorMessage>
      )} */}
    </FormControl>
  );
};
