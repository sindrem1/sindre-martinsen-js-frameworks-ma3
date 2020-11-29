import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    username: yup.string().required("Please enter a username"),
    password: yup.string().required("Please enter a password").min(4, "Password needs to be atleast 4 characters"),
});

function LoginForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    return (
        <div className="form">
        <form onSubmit={handleSubmit(d => console.log(d))}>
            Username: <input name="username" ref={register} />
            {errors.username && <p>{errors.username.message}</p>}
            <br />
            Password: <input name="password" type="password" ref={register} />
            {errors.password && <p>{errors.password.message}</p>}
            <br />
            <input type="submit" />
        </form>
        </div>
    );
};

export default LoginForm;



