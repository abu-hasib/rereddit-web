import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import React from 'react';
import { InputField } from '../components/InputField';
import { Wrapper } from './Wrapper';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
	return (
		<Wrapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={(values) => {
					console.log('$$: ', values);
				}}>
				{({ isSubmitting }) => (
					<Form>
						<InputField name='username' placeholder='username' label='Username' />
						<Box mt={5}>
							<InputField name='password' placeholder='password' label='Password' type='password' />
						</Box>
						<Button mt={5} colorScheme='teal' isLoading={isSubmitting} type='submit'>
							register
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default Register;
