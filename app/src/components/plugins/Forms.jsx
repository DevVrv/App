import React from 'react'
import { Field, Checkbox } from './FormControl'

// get form data
function getFormData(form) {
    const object = {}
    const formData = new FormData(form)
    formData.forEach(function(value, key){
        object[key] = value
    })
    const json = JSON.stringify(object)
    return json
}

// default sign in form
function FormSignIn({id=0, url='/', handler=null}) {
    return (
        <form className="form w-100" id={`form-signin-${id}`} onSubmit={e => { 
                e.preventDefault()
                const formData = getFormData(e.target)
                console.log(formData)
            }}>
            <Field type='text' placeholder='Enter Username' name='username' desc='Username'/>
            <Field type='password' placeholder='Enter Password' name="password" desc='Password'/>
            <Checkbox id='remember' name={`remember-${id}`} desc="Remember me"/>
            <div className="d-flex justify-content-end mt-3">
                <button type="button" className='btn link ms-3'>forget password</button>
                <button type="button" className='btn link ms-3'>SignUp </button>
                <button type="submit" className='btn btn-primary px-5 ms-3'>Login</button>
            </div>
        </form>         
    )
}

// default sign up form
function FormSignUp({id=0, url='/', handler=null}) {
    return (
        <form className="form w-100" id={`form-signin-${id}`} onSubmit={e => { 
                e.preventDefault()
                const formData = getFormData(e.target)
                console.log(formData)
            }}>
            <Field type='text' placeholder='Enter Username' name='username' desc='Username'/>
            <Field type='password' placeholder='Enter Password' name="password" desc='Password'/>
            <div className="d-flex justify-content-end mt-3">
                <button type="button" className='btn link ms-3'>forget password</button>
                <button type="button" className='btn link ms-3'>SignIn </button>
                <button type="submit" className='btn btn-primary px-5 ms-3'>SignUp</button>
            </div>
        </form>         
    )
}

export {FormSignIn, FormSignUp}