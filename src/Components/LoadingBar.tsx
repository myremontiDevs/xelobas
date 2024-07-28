import styles from "./Styles/LoadingBar.module.scss";
function LoadingBar(){
    return(
<div className={styles.container}>
    <div className={styles.circle}></div>
</div>
    )
}

export default LoadingBar;

// import styles from "./Styles/CraftsmanRegistration.module.scss";
// import { useForm, SubmitHandler } from "react-hook-form";
// import { useEffect, useState, useRef } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEye,
//   faEyeSlash,
//   faQuestion,
//   faCircleXmark,
// } from "@fortawesome/free-solid-svg-icons";

// type Inputs = {
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
//   profilePicture: FileList;
// };

// const emailValidationRegex =
//   /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


//   function useCsrfToken() {
//     const [csrfToken, setCsrfToken] = useState<string>("");
  
//     useEffect(() => {
//       fetch("http://127.0.0.1:5500/token.json")
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error("Failed to fetch CSRF token");
//           }
//           return response.json();
//         })
//         .then((data) => {
//           console.log("Fetched CSRF Token:", data.token.csrf_token);
//           setCsrfToken(data.token.csrf_token);
//         })
//         .catch((error) => {
//           console.error("Error fetching CSRF token:", error);
//         });
//     }, []);
  
//     return csrfToken;
//   }





// function CraftsmanRegistration() {
//   const csrfToken = useCsrfToken();
//   const [seePassword, setSeePassword] = useState<boolean>(false);
//   const [additionalInformation, setAdditionalInfromation] =
//     useState<string>("");
//     const formRef = useRef<HTMLFormElement>(null);

//   const {
//     register,
//     handleSubmit,
//     setValue,
//     formState: { errors },
//   } = useForm<Inputs>();

  

//   const generateUserId = () => {
//     return `user_${Math.floor(Math.random() * 100000000)}`;
//   };

//   const handleSeePassword = () => setSeePassword(!seePassword);

//   const formatDate = () => {
//     const date = new Date();
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}.${month}.${year}`;
//   };

//   useEffect(() => {
//     setValue("userId", generateUserId());
//     setValue("registrationDate", formatDate());
//     setValue("verificationStatus", "false");
//   }, [setValue]);

//   const validateImage = (files: FileList) => {
//     if (files.length === 0) return "აუცილებელია სურათის ატვირთვა";
//     const file = files[0];
//     const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
//     if (!allowedExtensions.includes(file.type)) {
//       return "დასაშვებია მხოლოდ JPEG და PNG ფორმატები";
//     }
//     if (file.size > 5 * 1024 * 1024) {
//       // 5MB size limit
//       return "სურათი არ უნდა აღემატებოდეს 5MB-ს";
//     }
//     return true;
//   };

//   /////
//   const onSubmit: SubmitHandler<Inputs> = async (data) => {
//     console.log("data", data);
//     formRef.current?.submit();
//   };
//   //////

//   const handleAdditionalInformation = (info: string) => {
//     setAdditionalInfromation(info);
//   };

//   // Function to handle click outside of additional information
//   const handleClickOutsideNavigation = (event: MouseEvent) => {
//     const showCallFeeInfo = document.querySelector(
//       `.${styles.showCallFeeInfo}`
//     );
//     const showMoreInfo = document.querySelector(`.${styles.showMoreInfo}`);

//     if (
//       (showCallFeeInfo && !showCallFeeInfo.contains(event.target as Node)) ||
//       (showMoreInfo && !showMoreInfo.contains(event.target as Node))
//     ) {
//       setAdditionalInfromation("");
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutsideNavigation);

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutsideNavigation);
//     };
//   }, []);

//   return (
//     <div className={styles.parentContainer}>
//       <div className={styles.formContainer}>
//         <form 
//         onSubmit={handleSubmit(onSubmit)}  
//         ref={formRef}
//           method="post"
//           action="/reg">
//             <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
            
//           <input type="hidden" {...register("userId")} />

//           <input type="hidden" {...register("registrationDate")} />

//           <input type="hidden" {...register("verificationStatus")} />

//           <div className={styles.registrationForm}>
//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="firstName">სახელი</label>
//               </div>
//               <input
//                 type="text"
//                 id="firstName"
//                 className={`${styles.inputCard__input} ${
//                   errors.firstName ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("firstName", {
//                   required: "აუცილებელი ველი",
//                   minLength: { value: 2, message: "მინიმუმ 2 ასო" },
//                   pattern: {
//                     value: /^[a-zA-Zა-ჰ]+$/,
//                     message: "დასაშვებია მხოლოდ ასოები",
//                   },
//                 })}
//               />
//               {errors.firstName && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="lastName">გვარი</label>
//               </div>
//               <input
//                 type="text"
//                 id="lastName"
//                 className={`${styles.inputCard__input} ${
//                   errors.lastName ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("lastName", {
//                   required: "აუცილებელი ველი",
//                   minLength: { value: 5, message: "მინიმუმ 5 ასო" },
//                   pattern: {
//                     value: /^[a-zA-Zა-ჰ]+$/,
//                     message: "დასაშვებია მხოლოდ ასოები",
//                   },
//                 })}
//               />
//               {errors.lastName && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="personalId">პირადი ნომერი</label>
//               </div>
//               <input
//                 type="number"
//                 id="personalId"
//                 className={`${styles.inputCard__input} ${
//                   errors.personalIdNumber ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("personalIdNumber", {
//                   required: "აუცილებელი ველი",
//                   minLength: { value: 11, message: "ფორმატი არავალიდურია" },
//                   maxLength: { value: 11, message: "ფორმატი არავალიდურია" },
//                 })}
//                 onKeyDown={(e) => {
//                   if (
//                     e.key === "-" ||
//                     e.key === "E" ||
//                     e.key === "e" ||
//                     e.key === "."
//                   ) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//               {errors.personalIdNumber && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.personalIdNumber.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="phoneNumber">ტელეფონის ნომერი</label>
//               </div>
//               <input
//                 type="number"
//                 id="phoneNumber"
//                 className={`${styles.inputCard__input} ${
//                   errors.phoneNumber ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("phoneNumber", {
//                   required: "აუცილებელი ველი",
//                   minLength: { value: 9, message: "ფორმატი არავალიდურია" },
//                   maxLength: { value: 9, message: "ფორმატი არავალიდურია" },
//                 })}
//                 onKeyDown={(e) => {
//                   if (
//                     e.key === "-" ||
//                     e.key === "E" ||
//                     e.key === "e" ||
//                     e.key === "."
//                   ) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//               {errors.phoneNumber && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.phoneNumber.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="email">იმეილი</label>
//               </div>
//               <input
//                 type="text"
//                 id="email"
//                 className={`${styles.inputCard__input} ${
//                   errors.email ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("email", {
//                   required: "აუცილებელი ველი",
//                   pattern: {
//                     value: emailValidationRegex,
//                     message: "ფორმატი არავალიდურია",
//                   },
//                 })}
//               />
//               {errors.email && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="password">პაროლი</label>
//               </div>
//               <div className={styles.inputCard__relative}>
//                 <input
//                   type={seePassword ? "text" : "password"}
//                   id="password"
//                   className={`${styles.inputCard__input} ${
//                     errors.password ? styles.inputCard__inputError : ""
//                   }`}
//                   {...register("password", {
//                     required: "აუცილებელი ველი",
//                     minLength: { value: 8, message: "მინიმუმ 8 სიმბოლო" },
//                     pattern: {
//                       value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
//                       message: "ლათინური ასოები და მინიმუმ ერთი რიცხვი",
//                     },
//                   })}
//                 />

//                 <div
//                   className={styles.inputCard__eyeIconContainer}
//                   onClick={handleSeePassword}
//                 >
//                   <FontAwesomeIcon
//                     icon={seePassword ? faEye : faEyeSlash}
//                     className={styles.faEye}
//                   />
//                 </div>
//               </div>
//               {errors.password && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="city">ქალაქი</label>
//               </div>
//               <select
//                 id="city"
//                 className={`${styles.inputCard__input} ${
//                   errors.city ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("city", {
//                   required: "აუცილებელი ველი",
//                 })}
//               >
//                 <option value="თბილისი">თბილისი</option>
//               </select>
//               {errors.city && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.city.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="district">უბანი</label>
//               </div>
//               <select
//                 id="district"
//                 className={`${styles.inputCard__input} ${
//                   errors.district ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("district", {
//                   required: "აუცილებელი ველი",
//                 })}
//               >
//                 <option value="">რაიონი</option>
//                 <option value="საბურთალო">საბურთალო</option>
//                 <option value="ვაკე">ვაკე</option>
//                 <option value="მთაწმინდა">მთაწმინდა</option>
//                 <option value="ორთაჭალა">ორთაჭალა</option>
//                 <option value="კრწანისი">კრწანისი</option>
//                 <option value="ისანი">ისანი</option>
//                 <option value="ვარკეთილი">ვარკეთილი</option>
//                 <option value="ავლაბარი">ავლაბარი</option>
//                 <option value="სამგორი">სამგორი</option>
//                 <option value="ნაძალადევი">ნაძალადევი</option>
//                 <option value="გლდანი">გლდანი</option>
//                 <option value="ზღვისუბანი">ზღვისუბანი</option>
//                 <option value="სანზონა">სანზონა</option>
//                 <option value="დიდუბე-ჩუღურეთი">დიდუბე-ჩუღურეთი</option>
//                 <option value="ავჭალა">ავჭალა</option>
//                 <option value="ვაზისუბანი">ვაზისუბანი</option>
//                 <option value="ლილოს დასახლება">ლილოს დასახლება</option>
//                 <option value="ფონიჭალა">ფონიჭალა</option>
//               </select>
//               {errors.district && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.district.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="profession">აირჩიე პროფესია</label>
//               </div>
//               <select
//                 id="profession"
//                 className={`${styles.inputCard__input} ${
//                   errors.profession ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("profession", {
//                   required: "აუცილებელი ველი",
//                 })}
//               >
//                 <option value="">პროფესია</option>
//                 <option value="მალიარი">მალიარი</option>
//                 <option value="კაფელ-მეტლახის ხელოსანი">
//                   კაფელ-მეტლახის ხელოსანი
//                 </option>
//                 <option value="ელექტრიკოსი">ელექტრიკოსი</option>
//                 <option value="სანტექნიკი">სანტექნიკი</option>
//                 <option value="თაბაშირ-მუყაოს ხელოსანი">
//                   თაბაშირ-მუყაოს ხელოსანი
//                 </option>
//                 <option value="გათბობა-გაგრილების სისტემის ხელოსანი">
//                   გათბობა-გაგრილების სისტემა
//                 </option>
//                 <option value="მეტალო პლასტმასის კარ-ფანჯარა">
//                   მეტალო პლასტმასის კარ-ფანჯარა
//                 </option>
//                 <option value="სახლის დალაგება">სახლის დალაგება</option>
//                 <option value="იატაკის სამუშაოები">იატაკის სამუშაოები</option>
//                 <option value="სახურავის სპეციალისტი">
//                   სახურავის სპეციალისტი
//                 </option>
//                 <option value="დამხმარე(მუშა)">დამხმარე(მუშა)</option>
//                 <option value="უნივერსალური ხელოსანი">
//                   უნივერსალური ხელოსანი
//                 </option>
//                 <option value="მშენებელი">მშენებელი</option>
//                 <option value="ავეჯის ხელოსანი">ავეჯის ხელოსანი</option>
//                 <option value="სამშენებლო სპეც-ტექნიკა">
//                   სამშენებლო სპეც-ტექნიკა
//                 </option>
//                 <option value="ელ-შემდუღებელი">ელ-შემდუღებელი</option>
//                 <option value="არქიტექტორი">არქიტექტორი</option>
//                 <option value="ხის კარის ხელოსანი">ხის კარის ხელოსანი</option>
//               </select>
//               {errors.profession && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.profession.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="experience">გამოცდილება</label>
//               </div>
//               <input
//                 type="number"
//                 id="experience"
//                 className={`${styles.inputCard__input} ${
//                   errors.experience ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("experience", {
//                   required: "აუცილებელი ველი",
//                   min: {
//                     value: 1,
//                     message: "მინიმუმ 1 წელი",
//                   },
//                   max: {
//                     value: 50,
//                     message: "მაქსიმუმ 50 წელი",
//                   },
//                   pattern: {
//                     value: /^[1-9]\d*$/,
//                     message: "ფორმატი არავალიდურია",
//                   },
//                 })}
//                 onKeyDown={(e) => {
//                   if (
//                     e.key === "-" ||
//                     e.key === "E" ||
//                     e.key === "e" ||
//                     e.key === "."
//                   ) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//               {errors.experience && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.experience.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="price">1 წერტილის - კვ.მ ღირებულება</label>
//               </div>
//               <input
//                 type="number"
//                 id="price"
//                 className={`${styles.inputCard__input} ${
//                   errors.price ? styles.inputCard__inputError : ""
//                 }`}
//                 {...register("price", {
//                   required: "აუცილებელი ველი",
//                   pattern: {
//                     value: /^[1-9]\d*$/,
//                     message: "ფორმატი არავალიდურია",
//                   },
//                 })}
//                 onKeyDown={(e) => {
//                   if (
//                     e.key === "-" ||
//                     e.key === "E" ||
//                     e.key === "e" ||
//                     e.key === "."
//                   ) {
//                     e.preventDefault();
//                   }
//                 }}
//               />
//               {errors.price && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.price.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div
//                 className={
//                   additionalInformation === "callFee"
//                     ? styles.showCallFeeInfo
//                     : styles.hideAdditionalInfo
//                 }
//               >
//                 <div
//                   className={styles.xmarkContainer}
//                   onClick={() => {
//                     handleAdditionalInformation("");
//                   }}
//                 >
//                   <FontAwesomeIcon
//                     icon={faCircleXmark}
//                     className={styles.faCircleXmark}
//                   />
//                 </div>

//                 <p>
//                   დააწესე შენი მინიმალური გამოძახების საფასური. თუ მოცემულ
//                   სიტუაციაში მომხმარებელი გიძახებს მაგალითად: ერთი წერტილის,
//                   ერთი კვადრატის ან სხვა მცირე საქმისთვის, რომლის ანაზღაურების
//                   გამოც არ გიღირს გამოძახებაზე წასვლა.
//                 </p>
//               </div>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="callFee">მინიმალური გამოძახების საფასური</label>
//               </div>
//               <div className={styles.inputCard__relative}>
//                 <input
//                   type="number"
//                   id="callFee"
//                   className={`${styles.inputCard__input} ${
//                     errors.minCallFee ? styles.inputCard__inputError : ""
//                   }`}
//                   {...register("minCallFee", {
//                     required: "აუცილებელი ველი",
//                     pattern: {
//                       value: /^[1-9]\d*$/,
//                       message: "ფორმატი არავალიდურია",
//                     },
//                   })}
//                   onKeyDown={(e) => {
//                     if (
//                       e.key === "-" ||
//                       e.key === "E" ||
//                       e.key === "e" ||
//                       e.key === "."
//                     ) {
//                       e.preventDefault();
//                     }
//                   }}
//                 />
//                 {additionalInformation === "callFee" ? (
//                   <div>
//                     <FontAwesomeIcon
//                       icon={faQuestion}
//                       className={styles.faQuestion}
//                       onClick={() => {
//                         handleAdditionalInformation("");
//                       }}
//                     />
//                   </div>
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faQuestion}
//                     className={styles.faQuestion}
//                     onClick={() => {
//                       handleAdditionalInformation("callFee");
//                     }}
//                   />
//                 )}
//               </div>
//               {errors.minCallFee && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.minCallFee.message}
//                 </p>
//               )}
//             </div>

//             <div className={styles.inputCard}>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="profilePicture">ატვირთე სურათი</label>
//               </div>
//               <input
//                 type="file"
//                 id="profilePicture"
//                 accept=".jpg,.jpeg,.png"
//                 className={`${styles.inputCard__input} ${
//                   styles.inputCard__imgInput
//                 } ${errors.profilePicture ? styles.inputCard__inputError : ""}`}
//                 {...register("profilePicture", {
//                   required: "აუცილებელია სურათის ატვირთვა",
//                   validate: validateImage,
//                 })}
//               />
//               {errors.profilePicture && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.profilePicture.message}
//                 </p>
//               )}
//             </div>

//             <div className={`${styles.inputCard} ${styles.cardOfTextarea}`}>
//               <div
//                 className={
//                   additionalInformation === "moreInformation"
//                     ? styles.showMoreInfo
//                     : styles.hideAdditionalInfo
//                 }
//               >
//                 <div
//                   className={styles.xmarkContainer}
//                   onClick={() => {
//                     handleAdditionalInformation("");
//                   }}
//                 >
//                   <FontAwesomeIcon
//                     icon={faCircleXmark}
//                     className={styles.faCircleXmark}
//                   />
//                 </div>

//                 <p>
//                   მოგვაწოდე დამატებითი ინფორმაცია შენი საქმნიანობისა და
//                   დამატებითი პირობების შესახებ. ეს დაეხმარება ხელოსნის მაძიებლებს
//                   სასურველი ხელოსნის შერჩევაში.
//                 </p>
//               </div>
//               <div className={styles.inputCard__labelBox}>
//                 <label htmlFor="moreInformation">მოგვიყევი შენს შესახებ</label>
//               </div>
//               <div className={styles.inputCard__relative}>
//                 <textarea
//                   id="moreInformation"
//                   className={styles.inputCard__textarea}
//                   rows={4}
//                   placeholder="შეიყვანე ტექსტი აქ..."
//                   {...register("moreInformation", {
//                     maxLength: {
//                       value: 300,
//                       message: "მაქსიმუმ 300 სიმბოლო",
//                     },
//                   })}
//                 ></textarea>
//                 {additionalInformation === "moreInformation" ? (
//                   <div>
//                     <FontAwesomeIcon
//                       icon={faQuestion}
//                       className={styles.faQuestion}
//                       onClick={() => {
//                         handleAdditionalInformation("");
//                       }}
//                     />
//                   </div>
//                 ) : (
//                   <FontAwesomeIcon
//                     icon={faQuestion}
//                     className={styles.faQuestion}
//                     onClick={() => {
//                       handleAdditionalInformation("moreInformation");
//                     }}
//                   />
//                 )}
//               </div>
//               {errors.moreInformation && (
//                 <p className={styles.inputCard__errorMessages}>
//                   {errors.moreInformation.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           <div className={styles.buttonContainer}>
//             <button type="submit" className={styles.submitButton}>
//               რეგისტრაცია
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CraftsmanRegistration;
