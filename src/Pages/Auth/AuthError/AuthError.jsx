import React from "react";

const AuthError = ({ error }) => {
    const styleFunction = () => ({
        color: "red",
        display: "flex",
        justifyContent: "center",
        marginTop: "200px",
        fontSize: "50px"
    });

    return (
        <div>
            <p style={styleFunction()}>
                <p>Email or Password doesn't match!</p> <br />
                <p>Write right email and password</p> 
            </p>
        </div>
    );
};

export default AuthError;