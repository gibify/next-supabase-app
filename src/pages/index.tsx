import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { supabase } from '../services/supabase'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { user } = useContext(AuthContext)

  async function login() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'github'
    })

    if(error) { 
      console.log(error)
      return;
    }
    
    console.log(user, session)
  }

  function logout() {
    supabase.auth.signOut()
  }

  return (
    <div className={styles.container}>
      <header>
      <button onClick={login} className={styles.login}>Login</button>
      <button onClick={logout} className={styles.logout}>Logout</button>
      </header>

      <section>
        <h1>Name: </h1>
        <p>Description: </p>
      </section>
    </div>
  )
}
