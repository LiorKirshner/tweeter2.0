import { createContext, useContext, useEffect, useState } from 'react'
import { supabase, signInAnonymously } from '../lib/supabase'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // בדוק אם יש משתמש מחובר
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      
      // אם אין משתמש, התחבר אנונימית
      if (!session?.user) {
        const { data, error } = await signInAnonymously()
        if (!error && data.user) {
          setUser(data.user)
        }
      }
      setLoading(false)
    }

    getSession()

    // האזן לשינויים באימות
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}