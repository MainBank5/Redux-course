import {useSelector} from 'react-redux'

const Profile = () => {
    const user = useSelector((state) => state.user.value)
  return (
    <div>
        <h1>Profile Page</h1>
        <p>Name: </p>
        <p>Age: </p>
        <p>Email: </p>
    </div>
  )
}

export default Profile