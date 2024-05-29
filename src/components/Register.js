import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from './api/axios';
import { Link } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setValidName(USER_REGEX.test(user));
    }, [user]);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, matchPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);
            setUser('');
            setPwd('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section className="flex flex-col justify-center items-center min-h-screen">
                    <h1 className="text-3xl font-bold mb-4">Success!</h1>
                    <p>
                        <Link to="/login" className="text-blue-500">Sign in</Link>
                    </p>
                </section>
            ) : (
                <section className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
                    <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                        <p ref={errRef} className={errMsg ? "bg-red-200 text-red-800 font-bold p-2 mb-4 rounded" : "hidden"} aria-live="assertive">{errMsg}</p>
                        <h1 className="text-3xl font-bold mb-4">Register</h1>
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
                                    aria-invalid={validName ? "false" : "true"}
                                    aria-describedby="uidnote"
                                    onFocus={() => setUserFocus(true)}
                                    onBlur={() => setUserFocus(false)}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label htmlFor="username" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Username
                                </label>
                                <FontAwesomeIcon icon={faCheck} className={`absolute top-5 right-3 ${validName ? "text-green-500" : "hidden"}`} />
                                <FontAwesomeIcon icon={faTimes} className={`absolute top-5 right-3 ${validName || !user ? "hidden" : "text-red-500"}`} />
                            </div>
                            <p id="uidnote" className={userFocus && user && !validName ? "text-sm text-yellow-500 mb-4" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>

                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    id="password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                    aria-invalid={validPwd ? "false" : "true"}
                                    aria-describedby="pwdnote"
                                    onFocus={() => setPwdFocus(true)}
                                    onBlur={() => setPwdFocus(false)}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label htmlFor="password" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Password
                                </label>
                                <FontAwesomeIcon icon={faCheck} className={`absolute top-5 right-3 ${validPwd ? "text-green-500" : "hidden"}`} />
                                <FontAwesomeIcon icon={faTimes} className={`absolute top-5 right-3 ${validPwd || !pwd ? "hidden" : "text-red-500"}`} />
                            </div>
                            <p id="pwdnote" className={pwdFocus && !validPwd ? "text-sm text-yellow-500 mb-4" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                8 to 24 characters.<br />
                                Must include uppercase and lowercase letters, a number and a special character.<br />
                                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                            </p>

                            <div className="relative z-0 w-full mb-6 group">
                                <input
                                    type="password"
                                    id="confirm_pwd"
                                    onChange={(e) => setMatchPwd(e.target.value)}
                                    value={matchPwd}
                                    required
                                    aria-invalid={validMatch ? "false" : "true"}
                                    aria-describedby="confirmnote"
                                    onFocus={() => setMatchFocus(true)}
                                    onBlur={() => setMatchFocus(false)}
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    placeholder=" "
                                />
                                <label htmlFor="confirm_pwd" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                    Confirm Password
                                </label>
                                <FontAwesomeIcon icon={faCheck} className={`absolute top-5 right-3 ${validMatch && matchPwd ? "text-green-500" : "hidden"}`} />
                                <FontAwesomeIcon icon={faTimes} className={`absolute top-5 right-3 ${validMatch || !matchPwd ? "hidden" : "text-red-500"}`} />
                            </div>
                            <p id="confirmnote" className={matchFocus && !validMatch ? "text-sm text-yellow-500 mb-4" : "hidden"}>
                                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                                Must match the first password input field.
                            </p>

                            <button disabled={!validName || !validPwd || !validMatch} className="w-full py-2 text-lg bg-blue-600 rounded text-white mt-4 disabled:bg-gray-500">
                                Sign Up
                            </button>
                        </form>
                        <p className="mt-4">
                            Already registered?<br />
                            <span className="text-blue-500">
                                <Link to="/Login">Sign in</Link>
                            </span>
                        </p>
                    </div>
                </section>
            )}
        </>
    )
}

export default Register;
