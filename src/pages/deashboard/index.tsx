import { useContext } from "react"
import { StyledHeader } from "../../components/header"
import { DeashContainer } from "./style"
import { UserContext } from "../../context/userContext"
import { CardContact } from "../../components/cardContact"

export const DeashBoard = () => {
    const { user, userContact, userLogout } = useContext(UserContext)

    return (
        <DeashContainer>
            <StyledHeader>
                <p>Olá {user?.name}, bem vindo!</p>
                <button onClick={userLogout}>Logout</button>
            </StyledHeader>
            <h1>Contatos</h1>
            <ul>
                {userContact.map((contact: any) => (
                    <CardContact key={contact.id} contact={contact} />
                ))}
            </ul>
        </DeashContainer>
    )
}