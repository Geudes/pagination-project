import React from 'react'
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import Api from '../../../shared/lib/api'
import { useNavigate } from 'react-router'
import authStorage from '../models/auth-storage'

const schema = yup.object({
    email: yup.string().email().required("Поле обязательно"),
    name: yup.string().required("Поле обязательно"),
    password: yup.string().min(1, "min1").required("Поле обязательно")
})
    .required()

function RegisterForm() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const reg2 = async(data) => {
        const res = await Api.register(data)
        if (res) {
            authStorage.setAccess(res.accessToken);
            authStorage.setRefresh(res.refreshToken);
            authStorage.setUser(res.user)
        }
        navigate('/login')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(reg2)}>
                <label>
                    name
                    {errors.name && <span>{errors.name?.message}</span>}
                    <input type="text" {...register('name')}/>
                </label>
                <label>
                    email
                    {errors.email && <span>{errors.email?.message}</span>}
                    <input type="email" {...register('email')}/>
                </label>
                <label>
                    password
                    {errors.password && <span>{errors.password?.message}</span>}
                    <input type="password" {...register('password')}/>
                </label>
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm