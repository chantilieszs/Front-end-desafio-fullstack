import { iContactResponse } from "../../interfaces"
import { StyledCardContact } from "./style"

interface iContact {
    contact: iContactResponse;
}
export const CardContact = ({contact}: iContact) => {
    console.log(contact);
    return (
        <StyledCardContact>
            <h2>{contact.name}</h2>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
        </StyledCardContact>
    )
}