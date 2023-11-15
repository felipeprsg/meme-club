import React from 'react';

import {
  VStack,
  FormErrorMessage,
  FormControl,
  FormLabel,
  TextareaProps,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';

import { useFormContext } from 'react-hook-form';

import { Icon, type IconName } from './Icon';

interface FormTextareaProps extends TextareaProps {
  name: string;
  label?: string;
  placeholder?: string;
  icon?: IconName;
}

export const FormTextarea: React.FC<FormTextareaProps> = ({
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

        <Textarea
          id={name}
          h={32}
          placeholder={placeholder || label}
          _placeholder={{ fontSize: 'md' }}
          color="gray.500"
          rounded="lg"
          border="solid 1px"
          borderColor="gray.300"
          errorBorderColor="failure.500"
          focusBorderColor="primary.500"
          {...register(name)}
          {...rest}
        />
      </InputGroup>

      {error && (
        <FormErrorMessage color="red.500" fontWeight="500" fontSize="xs">
          {error?.message?.toString()}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};
