import React, { useState } from 'react';
import { Container, Portal } from './styles';
import { Logo } from '../../assets/images';
export const Login: React.FC = () => {

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string | number>('');

    const teste = (a: string, b: string, c: string) => {
        if (a === "" && b === "b" && c === "d" && a === "" && b === "b" && c === "d")
    }
    return (
        <Container>
            <Portal>
                <img src={Logo} />
                <input className='inputLogar' type='text' value={login} onChange={(e: any) => setLogin(e?.target?.value)} />
                <input className='inputPassword' type='password' value={password} onChange={(e: any) => setPassword(e?.target?.value)} />
                <button className='btnLogar' onClick={() => alert("Logar")}>Logar</button>
                <nav>
                    <ul>
                        <li><a href='#'>Cadastrar-se?</a></li>
                        <li><a href='#'>Esqueci minha senha</a></li>
                    </ul>
                </nav>
            </Portal>
        </Container>
    );
}
