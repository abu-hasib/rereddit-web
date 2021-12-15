import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { Box } from '@chakra-ui/layout';
import { Form, Formik } from 'formik';
import React from 'react';
import { useMutation } from 'urql';
import { InputField } from '../components/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { Wrapper } from './Wrapper';

interface registerProps {}

const REG_MUT = `
mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field,
      message
    }
    user {
      id,
      username
    }
  }
}`;

const Register: React.FC<registerProps> = ({}) => {
	const [, register] = useRegisterMutation();
	return (
		<Wrapper variant='small'>
			<Formik
				initialValues={{ username: '', password: '' }}
				onSubmit={async (values) => {
					console.log('$$: ', values);
					const res = await register(values);
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
