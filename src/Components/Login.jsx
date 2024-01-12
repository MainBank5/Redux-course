import {useDispatch} from 'react-redux'
import {login} from './Features/User'
const Login = () => {
  const dispatch = useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(login({name:"Eliud", age:27, email:"eliudkay@gmail.com"}) )}}>Login</button>
    </div>
  )
}

export default Login