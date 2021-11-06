import { signIn } from "next-auth/react"

function BtnLogin({ bgColor , textColor  }) {
    return (
        <div>
            <button className="btn w-100 my-2 py-3" style={{background:`${bgColor}`, color:`${textColor}`}} 
            onClick={() =>signIn()}>
                Click Here to Sign In
            </button>
        </div>
    )
}

export default BtnLogin
