/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useRef } from 'react';
import {
  FiLogIn, FiMail, FiUser, FiLock, FiArrowLeft,
} from 'react-icons/fi';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';

import {
  Container, Content, AnimationContainer, Background,
} from './styles';

import logo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('e-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No minimo 6 digítos'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      // eslint-disable-next-line no-unused-expressions
      formRef.current?.setErrors(errors);
    }
  }, []);
  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="GoBarber" />
          {/* initialData={{ name: 'Diego' }} */}
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" placeholder="Nome" icon={FiUser} type="text" />
            <Input name="email" placeholder="E-mail" icon={FiMail} type="text" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit"> Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
          Voltar para login
        </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default SignUp;
