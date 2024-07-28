import styles from "./Styles/UserRegistration.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestion,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

type UserInputs = {
  userId: string;
  firstName: string;
  lastName: string;
  personalIdNumber: string;
  phoneNumber: string;
  email: string;
  password: string;
};

const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function UserRegistration() {
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [additionalInformation, setAdditionalInfromation] =
    useState<string>("");
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<UserInputs>();

  const generateUserId = () => {
    return `user_${Math.floor(Math.random() * 100000000)}`;
  };

  const handleSeePassword = () => setSeePassword(!seePassword);

  const handleAdditionalInformation = (info: string) => {
    setAdditionalInfromation(info);
  };

  useEffect(() => {
    setValue("userId", generateUserId());
  }, [setValue]);

  const onSubmit: SubmitHandler<UserInputs> = async (data) => {
    console.log(data);
  };

  // Function to handle click outside of additional information
  const handleClickOutsideAdditionalInfo = (event: MouseEvent) => {
    const showPasswordInfo = document.querySelector(
      `.${styles.showPasswordInfo}`
    );

    if (showPasswordInfo && !showPasswordInfo.contains(event.target as Node)) {
      setAdditionalInfromation("");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideAdditionalInfo);

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutsideAdditionalInfo
      );
    };
  }, []);

  return (
    <div className={styles.parent}>
      <div className={styles.formContainer}>
        <h2 className={styles.header}>მომხმარებლის რეგისტრაცია</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("userId")} />

          <div className={styles.registrationForm}>
            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="firstName">სახელი</label>
              </div>

              <input
                type="text"
                id="firstName"
                className={`${styles.inputCard__input} ${
                  errors.firstName ? styles.inputCard__inputError : ""
                }`}
                {...register("firstName", {
                  required: "აუცილებელი ველი",
                  minLength: { value: 2, message: "მინიმუმ 2 ასო" },
                  pattern: {
                    value: /^[a-zA-Zა-ჰ]+$/,
                    message: "დასაშვებია მხოლოდ ასოები",
                  },
                })}
              />
              {errors.firstName && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.firstName.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="lastName">გვარი</label>
              </div>

              <input
                type="text"
                id="lastName"
                className={`${styles.inputCard__input} ${
                  errors.lastName ? styles.inputCard__inputError : ""
                }`}
                {...register("lastName", {
                  required: "აუცილებელი ველი",
                  minLength: { value: 5, message: "მინიმუმ 5 ასო" },
                  pattern: {
                    value: /^[a-zA-Zა-ჰ]+$/,
                    message: "დასაშვებია მხოლოდ ასოები",
                  },
                })}
              />
              {errors.lastName && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.lastName.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="personalId">პირადი ნომერი</label>
              </div>

              <input
                type="number"
                id="personalId"
                className={`${styles.inputCard__input} ${
                  errors.personalIdNumber ? styles.inputCard__inputError : ""
                }`}
                {...register("personalIdNumber", {
                  required: "აუცილებელი ველი",
                  minLength: { value: 11, message: "ფორმატი არავალიდურია" },
                  maxLength: { value: 11, message: "ფორმატი არავალიდურია" },
                })}
                onKeyDown={(e) => {
                  if (
                    e.key === "-" ||
                    e.key === "E" ||
                    e.key === "e" ||
                    e.key === "."
                  ) {
                    e.preventDefault();
                  }
                }}
              />
              {errors.personalIdNumber && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.personalIdNumber.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="phoneNumber">ტელეფონის ნომერი</label>
              </div>

              <input
                type="number"
                id="phoneNumber"
                className={`${styles.inputCard__input} ${
                  errors.phoneNumber ? styles.inputCard__inputError : ""
                }`}
                {...register("phoneNumber", {
                  required: "აუცილებელი ველი",
                  minLength: { value: 9, message: "ფორმატი არავალიდურია" },
                  maxLength: { value: 9, message: "ფორმატი არავალიდურია" },
                })}
                onKeyDown={(e) => {
                  if (
                    e.key === "-" ||
                    e.key === "E" ||
                    e.key === "e" ||
                    e.key === "."
                  ) {
                    e.preventDefault();
                  }
                }}
              />

              {errors.phoneNumber && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="email">იმეილი</label>
              </div>
              <input
                type="text"
                id="email"
                className={`${styles.inputCard__input} ${
                  errors.email ? styles.inputCard__inputError : ""
                }`}
                {...register("email", {
                  required: "აუცილებელი ველი",
                  pattern: {
                    value: emailValidationRegex,
                    message: "ფორმატი არავალიდურია",
                  },
                })}
              />
              {errors.email && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div
                className={
                  additionalInformation === "password"
                    ? styles.showPasswordInfo
                    : styles.hideAdditionalInfo
                }
              >
                <div
                  className={styles.xmarkContainer}
                  onClick={() => {
                    handleAdditionalInformation("");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCircleXmark}
                    className={styles.faCircleXmark}
                  />
                </div>

                <p>
                  მინიმუმ 8 სიმბოლო. აუცილებელია მინიმუმ ერთი ლათინური ასო,
                  დასაშვებია როგორც ციფრები ასევე რიცხვები
                </p>
              </div>

              <div className={styles.inputCard__labelBox}>
                <label htmlFor="password">პაროლი</label>
              </div>
              <div className={styles.inputCard__relative}>
                <input
                  type={seePassword ? "text" : "password"}
                  id="password"
                  className={`${styles.inputCard__input} ${
                    errors.password ? styles.inputCard__inputError : ""
                  }`}
                  {...register("password", {
                    required: "აუცილებელი ველი",
                    minLength: { value: 8, message: "მინიმუმ 8 სიმბოლო" },
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,
                      message: "ლათინური ასოები და მინიმუმ ერთი რიცხვი",
                    },
                  })}
                />
                {additionalInformation === "password" ? (
                  <div>
                    <FontAwesomeIcon
                      icon={faQuestion}
                      className={styles.faQuestion}
                      onClick={() => {
                        handleAdditionalInformation("");
                      }}
                    />
                  </div>
                ) : (
                  <FontAwesomeIcon
                    icon={faQuestion}
                    className={styles.faQuestion}
                    onClick={() => {
                      handleAdditionalInformation("password");
                    }}
                  />
                )}

                <div
                  className={styles.inputCard__eyeIconContainer}
                  onClick={handleSeePassword}
                >
                  <FontAwesomeIcon
                    icon={seePassword ? faEye : faEyeSlash}
                    className={styles.faEye}
                  />
                </div>
              </div>
              {errors.password && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.password.message}
                </p>
              )}
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button type="submit" className={styles.submitButton}>
              რეგისტრაცია
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegistration;
