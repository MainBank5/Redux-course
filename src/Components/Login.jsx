import {useDispatch} from 'react-redux'
import {login, logout} from './Features/User'

const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(login({name:"Eliud", age:27, email:"eliudkay@gmail.com"}) )}}>Login</button>
        <button onClick={()=>{dispatch(logout())}}>Logout</button>
    </div>
  )
}

export default Login