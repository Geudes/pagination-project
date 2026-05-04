
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import Api from '../../../shared/lib/api'
import { useNavigate } from 'react-router'
import authStorage from '../models/auth-storage'
import './auth.css'
const schema = yup.object({
    email: yup.string().email().required("Поле обязательно"),
    name: yup.string().required("Поле обязательно"),
    password: yup.string().min(1, "min1").required("Поле обязательно")
})

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
        <div className='auth'>
            <form className='auth-form' onSubmit={handleSubmit(reg2)}>
                <label>
                    name
                    {errors.name && <span className='error-message'>{errors.name?.message}</span>}
                    <input className={errors.email ? 'error-input' : ''} type="text" {...register('name')}/>
                </label>
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
                <button>Register</button>
            </form>
        </div>
    )
}

export default RegisterForm