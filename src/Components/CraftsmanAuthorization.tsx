

// import styles from "./Styles/CraftsmanAuthorization.module.scss";
// import { useNavigate } from "react-router-dom";
// import CraftsmenData from "./Datas/craftsmenData.json";
// import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
// import { useEffect, useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";
// import { useForm, SubmitHandler } from "react-hook-form";


// type FormData = {
//   userId: string;
//   registrationDate: string;
//   verificationStatus: string;
//   firstName: string;
//   lastName: string;
//   personalIdNumber: string;
//   phoneNumber: string;
//   email: string;
//   password: string;
//   city: string;
//   district: string;
//   profession: string;
//   experience: string;
//   price: string;
//   minCallFee: string;
//   moreInformation: string;
//   profilePicture: FileList | null;
// };

// function useCsrfToken() {
//   const [csrfToken, setCsrfToken] = useState<string>("");

//   useEffect(() => {
//     fetch("http://127.0.0.1:5500/token.json")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch CSRF token");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched CSRF Token:", data.token.csrf_token);
//         setCsrfToken(data.token.csrf_token);
//       })
//       .catch((error) => {
//         console.error("Error fetching CSRF token:", error);
//       });
//   }, []);

//   return csrfToken;
// }


// function CraftsmanAuthorization() {
//   const csrfToken = useCsrfToken();
//   const navigate = useNavigate();
//   const data: CraftsmenInterface[] = CraftsmenData;
//   const [seePassword, setSeePassword] = useState<boolean>(false);
//   const [phoneNumberAuthorization, setPhoneNumberAuthorization] =
//     useState<string>("");
//   const [passwordAuthorization, setPasswordAuthorization] =
//     useState<string>("");
//   const [authorizationError, setAuthorizationError] = useState<boolean>(false);
//   const [disabledButton, setDisabledButton] = useState<boolean>(false);
//   const [otp, setOtp] = useState<number | null>(null);
//   const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
//   const [enteredOtp, setEnteredOtp] = useState<string>("");
//   const formRef = useRef<HTMLFormElement>(null);

//   const sendOtp = async (userPhoneNumber: string) => {
//     const verificationCode = Math.floor(100000 + Math.random() * 900000);
//     const apiKey = "f5e53ecd65894293934d40e5c3bcd901k";
//     const sender = "xeloba.ge";
//     const message = `ვერიფიკაციის კოდი: ${verificationCode}`;

//     const url = `http://smsoffice.ge/api/v2/send/?key=${apiKey}&destination=${userPhoneNumber}&sender=${sender}&content=${message}&urgent=true`;
//     console.log(verificationCode);
//     setOtp(verificationCode);

//     try {
//       const response = await fetch(url);
//       const data = await response.json();
//       if (data.Success) {
//         return verificationCode;
//       } else {
//         console.error("Failed to send OTP:", data.Message);
//         return null;
//       }
//     } catch (error) {
//       console.error("Error sending OTP:", error);
//       return null;
//     }
//   };

//   const {
//     register,
//     handleSubmit,
//     setValue,
//   } = useForm<FormData>();
  
//   const user = data.find(
//     (craftsman) =>
//       craftsman.phoneNumber === phoneNumberAuthorization &&
//       craftsman.password === passwordAuthorization
//   );

//   useEffect(() => {
//     if (user) {
//       // setUserData(user);

//       for (const [key, value] of Object.entries(user)) {
//         setValue(key as keyof FormData, value as any);
//       }

//     }
//   }, [user, setValue]);



 
//   const handleLogin = () => {
//     const user = data.find(
//       (craftsman) =>
//         craftsman.phoneNumber === phoneNumberAuthorization &&
//         craftsman.password === passwordAuthorization
//     );

//     if (user) {
//       setAuthorizationError(false);
//       if (user.verificationStatus === "false") {
//         sendOtp(user.phoneNumber);
//         setIsOtpSent(true);
//       } else {
//         navigate(`/personalPage/${user.userId}`);
//       }
//     } else {
//       setAuthorizationError(true);
//     }
//   };

//   const verifyOtp = () => {
//     const user = data.find(
//       (craftsman) =>
//         craftsman.phoneNumber === phoneNumberAuthorization &&
//         craftsman.password === passwordAuthorization
//     );

//     if (user && parseInt(enteredOtp) === otp) {
//       console.log("Phone number verified successfully!");
//       formRef.current?.submit();
//       navigate(`/personalPage/${user.userId}`);
//     }
//   };


// ///
// const onSubmit: SubmitHandler<FormData> = (data) => {
//   verifyOtp();
  
//  console.log('newdata',data)
// };


// //
//   useEffect(() => {
//     if (phoneNumberAuthorization === "" || passwordAuthorization === "") {
//       setDisabledButton(true);
//     } else {
//       setDisabledButton(false);
//     }
//   }, [phoneNumberAuthorization, passwordAuthorization]);

//   const handleSeePassword = () => setSeePassword(!seePassword);



//   return (
//     <div className={styles.parentContainer}>
//       {!isOtpSent 
//       ?
//       <div className={styles.mainContainer}>
//         <h2 className={styles.header}>ავტორიზაცია</h2>
//         <div className={styles.authorization}>
//           <div className={styles.authorization__labelContainer}>
//             <label
//               htmlFor="phoneNumber"
//               className={styles.authorization__label}
//             >
//               ტელეფონის ნომერი
//             </label>
//           </div>

//           <input
//             type="text"
//             name="phoneNumber"
//             id="phoneNumber"
//             className={styles.authorization__input}
//             onChange={(e) => {
//               setPhoneNumberAuthorization(e.target.value);
//             }}
//           />

//           <div className={styles.authorization__labelContainer}>
//             <label htmlFor="password" className={styles.authorization__label}>
//               პაროლი
             
//             </label>
//           </div>

// <div className={styles.authorization__relativeBox}>
  
//           <input
//             type={seePassword ? "text" : "password"}
//             name="password"
//             id="password"
//             className={styles.authorization__input}
//             onChange={(e) => {
//               setPasswordAuthorization(e.target.value);
//             }}
//           />
//            <FontAwesomeIcon
//                     icon={seePassword ? faEye : faEyeSlash}
//                     className={styles.faEye}
//                     onClick={handleSeePassword}
//                   />

//           </div>
//           {authorizationError && (
//             <p className={styles.authorization__errorMessage}>
//               მომხმარებლის ნომერი ან პაროლი არასწორია
//             </p>
//           )}

         
//           {disabledButton ? (
//             <button disabled className={styles.authorization__disabledButton}>
//               შესვლა
//             </button>
//           ) : (
//             <button
//               className={styles.authorization__button}
//               onClick={handleLogin}
//             >
//               შესვლა
//             </button>
//           )}
//         </div>
//       </div>
//       :
//     <form onSubmit={handleSubmit(onSubmit)} 
//      method="post"
//           action="/reg"
//     >
//         <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
//       <div className={styles.inputContainer}>
//       <div className={styles.labelContainer}>
//         <label htmlFor="verification">შეიყვანე ვერიფიკაციის კოდი</label>
//       </div>
//       <input
//         id="verification"
//         type="number"
//         value={enteredOtp}
//         onChange={(e) => setEnteredOtp(e.target.value)}
//         className={styles.formInput}
//         onKeyDown={(e) => {
//           if (e.key === "-" || e.key === "E" || e.key === "e") {
//             e.preventDefault();
//           }
//         }}
//       />
//     <input type="text" {...register("verificationStatus")} />
//       <button type="submit">verification</button>
//     </div>
//     </form>
//     }
//     </div>
//   );
// }

// export default CraftsmanAuthorization;





import styles from "./Styles/CraftsmanAuthorization.module.scss";
import { useNavigate } from "react-router-dom";
import CraftsmenData from "./Datas/craftsmenData.json";
import { CraftsmenInterface } from "./Interfaces/CraftsmenDataInterface";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEye,faEyeSlash} from "@fortawesome/free-solid-svg-icons";



function CraftsmanAuthorization() {
  const navigate = useNavigate();
  const data: CraftsmenInterface[] = CraftsmenData;
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [phoneNumberAuthorization, setPhoneNumberAuthorization] =
    useState<string>("");
  const [passwordAuthorization, setPasswordAuthorization] =
    useState<string>("");
  const [authorizationError, setAuthorizationError] = useState<boolean>(false);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
 

  

 
  const handleLogin = () => {
    const user = data.find(
      (craftsman) =>
        craftsman.phoneNumber === phoneNumberAuthorization &&
        craftsman.password === passwordAuthorization
    );


    if (user) {
      setAuthorizationError(false);
      navigate(`/personalPage/${user.userId}`);
    } else {
      setAuthorizationError(true);
    }
  };





  useEffect(() => {
    if (phoneNumberAuthorization === "" || passwordAuthorization === "") {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [phoneNumberAuthorization, passwordAuthorization]);

  const handleSeePassword = () => setSeePassword(!seePassword);



  return (
    <div className={styles.parentContainer}>
  
      <div className={styles.mainContainer}>
        <h2 className={styles.header}>ავტორიზაცია</h2>
        <div className={styles.authorization}>
          <div className={styles.authorization__labelContainer}>
            <label
              htmlFor="phoneNumber"
              className={styles.authorization__label}
            >
              ტელეფონის ნომერი
            </label>
          </div>

          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            className={styles.authorization__input}
            onChange={(e) => {
              setPhoneNumberAuthorization(e.target.value);
            }}
          />

          <div className={styles.authorization__labelContainer}>
            <label htmlFor="password" className={styles.authorization__label}>
              პაროლი
             
            </label>
          </div>

<div className={styles.authorization__relativeBox}>
  
          <input
            type={seePassword ? "text" : "password"}
            name="password"
            id="password"
            className={styles.authorization__input}
            onChange={(e) => {
              setPasswordAuthorization(e.target.value);
            }}
          />
           <FontAwesomeIcon
                    icon={seePassword ? faEye : faEyeSlash}
                    className={styles.faEye}
                    onClick={handleSeePassword}
                  />

          </div>
          {authorizationError && (
            <p className={styles.authorization__errorMessage}>
              მომხმარებლის ნომერი ან პაროლი არასწორია
            </p>
          )}

         
          {disabledButton ? (
            <button disabled className={styles.authorization__disabledButton}>
              შესვლა
            </button>
          ) : (
            <button
              className={styles.authorization__button}
              onClick={handleLogin}
            >
              შესვლა
            </button>
          )}
        </div>
      </div>
      :
   
    
  
    </div>
  );
}

export default CraftsmanAuthorization;



