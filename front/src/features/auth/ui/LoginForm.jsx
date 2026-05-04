import React from 'react'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router'
import Api from '../../../shared/lib/api'
import authStorage from '../models/auth-storage'

const schema = yup.object({
    email: yup.string().email().required("Поле обязательно"),
    password: yup.string().min(1, "min1").required("Поле обязательно")
})
    .required()

function LoginForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const log2 = async(data) => {
        const res = await Api.login(data)
        if (res) {
            authStorage.setAccess(res.accessToken);
            authStorage.setRefresh(res.refreshToken);
            authStorage.setUser(res.user)
        }
        navigate('/')
    }

    return (
        <div className='auth'>
            <form className='auth-form' onSubmit={handleSubmit(log2)}>
                <label>
                    email
                    {errors.email && <span className='error-message'>{errors.email?.message}</span>}
                    <input className={errors.email ? 'error-input' : ''} type="email" {...register('email')}/>
                </label>
                <label>
                    password
                    {errors.password && <span className='error-message'>{errors.password?.message}</span>}
                    <input className={errors.email ? 'error-input' : ''} type="password" {...register('password')}/>
                </label>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm