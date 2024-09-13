const { redirect } = require("react-router-dom");
const { useAuth } = require("../../contexts/auth.context");

/* eslint-disable no-unused-vars */
export default function useMyPageloader() {
    const {currentUser} = useAuth();
    if (!currentUser) return redirect("/")

    return null;
    
}