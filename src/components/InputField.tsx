import { Input } from '@chakra-ui/input';
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react';

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
	name: string;
	placeholder: string;
	label: string;
};

export const InputField: React.FC<InputFieldProps> = ({ size: __, ...props }) => {
	const [field, { error }] = useField(props);
	return (
		<FormControl isInvalid={!!error}>
			<FormLabel htmlFor={field.name}>{props.label}</FormLabel>
			<Input {...field} {...props} id={field.name} placeholder={props.placeholder} />
			{error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
		</FormControl>
	);
};
