import React,{useState} from "react";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoggingIn, setIsLoggingIn] =useState(true);

    function submitHandler(){
        if( !email || !password){
            setError('Please enter email and password!');
            return
        }
    }
    return <div className='text-xs sm:text-sm flex-1 flex flex-col justify-center items-center gap-2 sm:gap-4'>
        <h1 className='font-extrabold text-2xl sm:text-4xl select-none uppercase'>{isLoggingIn ? 'Login' : 'Register'}</h1>
        {error && <div className="border border-solid border-rose-400 text-rose-400 w-full max-w-[40ch] text-center py-2">{error}</div>}
        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email Address" className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 hover:border-cyan-300'></input>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)}placeholder="Password" className='outline-none text-slate-900 p-2 w-full max-w-[40ch] duration-300 border-b-2 hover:border-cyan-300'></input>
        <button onClick={submitHandler} className="w-full max-w-[40ch] border border-white border-solid uppercase py-2 duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:w-full
         after:h-full overflow-hidden hover:after:translate-x-full after:duration-300 hover:text-slate-900"><h2 className="relative z-20">
                {isLoggingIn? 'Login':'Register'}</h2></button>
                <h2 className='duration-300 hover:scale-110 cursor-pointer' onClick={()=>setIsLoggingIn(!isLoggingIn)}>
                    {!isLoggingIn ? 'Login' : 'Register'}
                </h2>
    </div>;
}