import { createContext, useContext } from "react"

type UserData = {
    avatar: string
    email: string
    name: string
    // roles

}

export type UserProfile = UserData & {
  avatar: string
}

export const UserContext = createContext<UserProfile | null>(null)
export const useUser = () => useContext(UserContext)