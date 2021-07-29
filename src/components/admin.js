import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../actions/actions'

     /*const dispatch = useDispatch()
     const users = useSelector(state=>state)


     useEffect(() => {
        dispatch(getUser());
      },[]);
      console.log(users, "did we ?"); */
      const Admin = () => {
        const user = useSelector(state => state.userStore)
        const dispatch = useDispatch()
        useEffect(() => {
        dispatch(getUser());
           }, []);
        console.log("userrr",user)

    return (
    
      <div className="App">
      {user.map(el =>(

        <div>
            <h1>Liste des fabrique</h1>


        
          <h2>{el.nom}</h2>
          <p>{el.prenom}</p>
          

          </div>
        ))}

        </div>
    );
}
export default Admin;
