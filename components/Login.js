import { useAuth } from "@/context/AuthContext";
import React,{useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggingIn, setIsLoggingIn] =useState(true);

    const {login, signup, currentUser, gmailSignIn} = useAuth();
    console.log(currentUser)
    

   async function submitHandler(){
        if( !email || !password){
            setError('Please enter email and password!');
            return
        }
        if(isLoggingIn){
            try {
                
            return await login(email, password)
            } catch (error) {
                setError('Please enter correct email and password!')
            }
            return
        }
        return await signup(email, password)
    }
    async function gmailLogIn(){
       return gmailSignIn()
    }
    return <div className='text-xs sm:text-sm flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold text-2xl sm:text-xl select-none uppercase'>{isLoggingIn ? 'Login' : 'Register'}</h1>
        {error && <div className="border border-solid border-rose-400 text-rose-400 w-full max-w-[40ch] text-center py-2">{error}</div>}
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 hover:border-cyan-300'></input>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}placeholder="Password" className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 hover:border-cyan-300'></input>
        <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full
         after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900">
            <h3 className="relative z-20">
                {isLoggingIn? 'Login':'Register'}</h3></button>
                <p className='duration-300 hover:scale-110 cursor-pointer' onClick={()=>setIsLoggingIn(!isLoggingIn)}>
                    {!isLoggingIn ? 'Login' : 'Register'}
                </p>
                {isLoggingIn? <p className='duration-300 hover:scale-110 cursor-pointer' onClick={gmailLogIn}>
                    sign in with gmail
                </p> :
                <div></div>
                }
    </div>;
}