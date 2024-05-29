import { Link } from "react-router-dom";
import { useState, useRef, useEffect,useContext } from "react";
import axios from "./api/axios";
import { authcontext } from "../../utils/useContext";

const LOGIN_URL = '/auth';

const Login = () => {
    const [user, setUser] = useState('');
    const [userFocus, setUserFocus] = useState(false);
    const [pwd, setPwd] = useState('');
    const [pwdFocus, setPwdFocus] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const {SetisAuth}=useContext(authcontext)
    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, []);
    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ user, pwd }), {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
            setUser('');
            setPwd('');
            SetisAuth(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg(err.response.data.message);
            } else if (err.response?.status === 401) {
                setErrMsg('Username or Password Incorrect');
            } else if (err.response?.status === 500) {
                setErrMsg('Server Not Responding');
            } else {
                setErrMsg('Login Failed');
            }
            if(errRef!=null)
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="text-3xl font-bold mb-4">Success!</h1>
                    <p>
                        <Link to="/" className="text-blue-500">HOME</Link>
                    </p>
                </section>
            ) : (
                <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                    <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <p ref={errRef} className={errMsg ? "bg-red-200 text-red-800 font-bold p-2 mb-4 rounded" : "hidden"} aria-live="assertive">{errMsg}</p>
                        <h1 className="text-3xl font-bold mb-4">Sign In</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    required
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label htmlFor="username" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Username
                                </label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                            </div>
                            <button
                                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50 disabled:opacity-50"
                            >
                                Sign In
                            </button>
                        </form>
                        <p className="text-sm text-gray-600 mt-4">
                            Need an account? <Link to="/register" className="text-blue-500">Register</Link>
                        </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Login;
