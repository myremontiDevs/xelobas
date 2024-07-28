import styles from "./Styles/CraftsmanRegistration.module.scss";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faQuestion,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

type Inputs = {
  userId: string;
  verificationStatus: string;
  firstName: string;
  lastName: string;
  personalIdNumber: string;
  phoneNumber: string;
  email: string;
  password: string;
  city: string;
  district: string;
  profession: string;
  experience: string;
  price: string;
  minCallFee: string;
  moreInformation: string;
  profilePicture: FileList;
};

const emailValidationRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function useCsrfToken() {
  const [csrfToken, setCsrfToken] = useState<string>("");

  useEffect(() => {
    fetch("ziiof5eN2uykh2cet0ExpvuMEBPEcv6OdHz4T9xFNclzkLjzfTaNVr44i7ErorC0")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch CSRF token");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched CSRF Token:", data.token.csrf_token);
        setCsrfToken(data.token.csrf_token);
      })
      .catch((error) => {
        console.error("Error fetching CSRF token:", error);
      });
  }, []);

  return csrfToken;
}

function CraftsmanRegistration() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();
  const csrfToken = useCsrfToken();
  const [seePassword, setSeePassword] = useState<boolean>(false);
  const [additionalInformation, setAdditionalInfromation] =
    useState<string>("");
  const [districtOptions, setDistrictOptions] = useState<string[]>([
    "საბურთალო",
    "ვაკე",
    "მთაწმინდა",
    "ორთაჭალა",
    "კრწანისი",
    "ისანი",
    "ვარკეთილი",
    "ავლაბარი",
    "სამგორი",
    "ნაძალადევი",
    "გლდანი",
    "ზღვისუბანი",
    "სანზონა",
    "დიღომი",
    "დიდუბე-ჩუღურეთი",
    "ავჭალა",
    "ვაზისუბანი",
    "ლილოს დასახლება",
    "ფონიჭალა",
    "მუხიანი",
  ]);

  const formRef = useRef<HTMLFormElement>(null);

  const generateUserId = () => {
    return `craftsman_${Math.floor(Math.random() * 100000000)}`;
  };

  const handleSeePassword = () => setSeePassword(!seePassword);

  useEffect(() => {
    setValue("userId", generateUserId());
    setValue("verificationStatus", "false");
  }, [setValue]);

  /////
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!data.moreInformation) {
      data.moreInformation = "false";
    }
    console.log("data", data);
    formRef.current?.submit();
  };
  //////

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;

    if (selectedCity === "თბილისი") {
      setDistrictOptions([
        "საბურთალო",
        "ვაკე",
        "მთაწმინდა",
        "ორთაჭალა",
        "კრწანისი",
        "ისანი",
        "ვარკეთილი",
        "ავლაბარი",
        "სამგორი",
        "ნაძალადევი",
        "გლდანი",
        "ზღვისუბანი",
        "სანზონა",
        "დიღომი",
        "დიდუბე-ჩუღურეთი",
        "ავჭალა",
        "ვაზისუბანი",
        "ლილოს დასახლება",
        "ფონიჭალა",
        "მუხიანი",
      ]);
    } else if (selectedCity === "ბათუმი") {
      setDistrictOptions(["ბათუმი"]);
    } else if (selectedCity === "რუსთავი") {
      setDistrictOptions(["რუსთავი"]);
    } else if (selectedCity === "გორი") {
      setDistrictOptions(["გორი"]);
    } else if (selectedCity === "ქუთაისი") {
      setDistrictOptions(["ქუთაისი"]);
    } else {
      setDistrictOptions([]);
    }
  };

  const validateImage = (files: FileList) => {
    if (files.length === 0) return "აუცილებელია სურათის ატვირთვა";
    const file = files[0];
    const allowedExtensions = ["image/jpeg", "image/png", "image/jpg"];
    if (!allowedExtensions.includes(file.type)) {
      return "დასაშვებია მხოლოდ JPEG და PNG ფორმატები";
    }
    if (file.size > 5 * 1024 * 1024) {
      // 5MB size limit
      return "სურათი არ უნდა აღემატებოდეს 5MB-ს";
    }
    return true;
  };

  const handleAdditionalInformation = (info: string) => {
    setAdditionalInfromation(info);
  };

  // Function to handle click outside of additional information
  const handleClickOutsideAdditionalInfo = (event: MouseEvent) => {
    const showPasswordInfo = document.querySelector(
      `.${styles.showPasswordInfo}`
    );
    const showExperienceInfo = document.querySelector(
      `.${styles.showExperienceInfo}`
    );
    const showPriceInfo = document.querySelector(`.${styles.showPriceInfo}`);
    const showCallFeeInfo = document.querySelector(
      `.${styles.showCallFeeInfo}`
    );
    const showMoreInfo = document.querySelector(`.${styles.showMoreInfo}`);

    if (
      (showPasswordInfo && !showPasswordInfo.contains(event.target as Node)) ||
      (showExperienceInfo &&
        !showExperienceInfo.contains(event.target as Node)) ||
      (showPriceInfo && !showPriceInfo.contains(event.target as Node)) ||
      (showCallFeeInfo && !showCallFeeInfo.contains(event.target as Node)) ||
      (showMoreInfo && !showMoreInfo.contains(event.target as Node))
    ) {
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
    <div className={styles.parentContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.header}>ხელოსნის რეგისტრაცია</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          ref={formRef}
          method="post"
          action="/reg"
        >
          <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />

          <input type="hidden" {...register("userId")} />

          <input type="hidden" {...register("verificationStatus")} />

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

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="city">აირჩიე ქალაქი</label>
              </div>
              <select
                id="city"
                className={`${styles.inputCard__input} ${
                  errors.city ? styles.inputCard__inputError : ""
                }`}
                {...register("city", {
                  required: "აუცილებელი ველი",
                })}
                onChange={handleCityChange}
              >
                <option value="თბილისი">თბილისი</option>
                <option value="ბათუმი">ბათუმი</option>
                <option value="რუსთავი">რუსთავი</option>
                <option value="გორი">გორი</option>
                <option value="ქუთაისი">ქუთაისი</option>
              </select>
              {errors.city && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.city.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="district">აირჩიე რაიონი</label>
              </div>
              <select
                id="district"
                className={`${styles.inputCard__input} ${
                  errors.district ? styles.inputCard__inputError : ""
                }`}
                {...register("district", {
                  required: "აუცილებელი ველი",
                })}
              >
                {districtOptions.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
              {errors.district && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.district.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="profession">აირჩიე პროფესია</label>
              </div>
              <select
                id="profession"
                className={`${styles.inputCard__input} ${
                  errors.profession ? styles.inputCard__inputError : ""
                }`}
                {...register("profession", {
                  required: "აუცილებელი ველი",
                })}
              >
                <option value="">პროფესია</option>
                <option value="მალიარი">მალიარი</option>
                <option value="კაფელ-მეტლახის ხელოსანი">
                  კაფელ-მეტლახის ხელოსანი
                </option>
                <option value="ელექტრიკოსი">ელექტრიკოსი</option>
                <option value="სანტექნიკი">სანტექნიკი</option>
                <option value="თაბაშირ-მუყაოს ხელოსანი">
                  თაბაშირ-მუყაოს ხელოსანი
                </option>
                <option value="გათბობა-გაგრილების სისტემის ხელოსანი">
                  გათბობა-გაგრილების სისტემა
                </option>
                <option value="მეტალო პლასტმასის კარ-ფანჯარა">
                  მეტალო პლასტმასის კარ-ფანჯარა
                </option>
                <option value="სახლის დალაგება">სახლის დალაგება</option>
                <option value="იატაკის სამუშაოები">იატაკის სამუშაოები</option>
                <option value="სახურავის სპეციალისტი">
                  სახურავის სპეციალისტი
                </option>
                <option value="დამხმარე(მუშა)">დამხმარე(მუშა)</option>
                <option value="უნივერსალური ხელოსანი">
                  უნივერსალური ხელოსანი
                </option>
                <option value="მშენებელი">მშენებელი</option>
                <option value="ავეჯის ხელოსანი">ავეჯის ხელოსანი</option>
                <option value="სამშენებლო სპეც-ტექნიკა">
                  სამშენებლო სპეც-ტექნიკა
                </option>
                <option value="ელ-შემდუღებელი">ელ-შემდუღებელი</option>
                <option value="არქიტექტორი">არქიტექტორი</option>
                <option value="ხის კარის ხელოსანი">ხის კარის ხელოსანი</option>
              </select>
              {errors.profession && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.profession.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div
                className={
                  additionalInformation === "experience"
                    ? styles.showExperienceInfo
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
                  მიუთითეთ რამდენ წლიანი გამოცდილება გაქვთ მოცემულ პროფესიაში.
                </p>
              </div>

              <div className={styles.inputCard__labelBox}>
                <label htmlFor="experience">გამოცდილება</label>
              </div>
              <div className={styles.inputCard__relative}>
                <input
                  type="number"
                  id="experience"
                  className={`${styles.inputCard__input} ${
                    errors.experience ? styles.inputCard__inputError : ""
                  }`}
                  {...register("experience", {
                    required: "აუცილებელი ველი",
                    min: {
                      value: 1,
                      message: "მინიმუმ 1 წელი",
                    },
                    max: {
                      value: 50,
                      message: "მაქსიმუმ 50 წელი",
                    },
                    pattern: {
                      value: /^[1-9]\d*$/,
                      message: "ფორმატი არავალიდურია",
                    },
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
                {additionalInformation === "experience" ? (
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
                      handleAdditionalInformation("experience");
                    }}
                  />
                )}
              </div>
              {errors.experience && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.experience.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div
                className={
                  additionalInformation === "price"
                    ? styles.showPriceInfo
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
                  იმ შემთხვევაში თუ შესრულებული სამუშაო ითვლება წერტილებით
                  მიუთითეთ ერთი წერტილის შესრულების ღირებულება, თუ შესრულებული
                  სამუშაო ითვლება კვადრატული მეტრებით მიუთითეთ ერთი კვადრატული
                  მეტრის შესრულების ღირებულება.
                </p>
              </div>

              <div className={styles.inputCard__labelBox}>
                <label htmlFor="price">(ერთი წერტილის - კვ.მ ღირებულება)</label>
              </div>

              <div className={styles.inputCard__relative}>
                <input
                  type="number"
                  id="price"
                  className={`${styles.inputCard__input} ${
                    errors.price ? styles.inputCard__inputError : ""
                  }`}
                  {...register("price", {
                    required: "აუცილებელი ველი",
                    pattern: {
                      value: /^[1-9]\d*$/,
                      message: "ფორმატი არავალიდურია",
                    },
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

                {additionalInformation === "price" ? (
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
                      handleAdditionalInformation("price");
                    }}
                  />
                )}
              </div>
              {errors.price && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.price.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div
                className={
                  additionalInformation === "callFee"
                    ? styles.showCallFeeInfo
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
                  მიუთითეთ ის მინიმალური თანხა, რასაც იღებთ ერთ ობიექტზე
                  ვიზიტისას შესრულებული სამუშაოს სანაცვლოდ
                </p>
              </div>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="callFee">მინიმალური გამოძახების საფასური</label>
              </div>
              <div className={styles.inputCard__relative}>
                <input
                  type="number"
                  id="callFee"
                  className={`${styles.inputCard__input} ${
                    errors.minCallFee ? styles.inputCard__inputError : ""
                  }`}
                  {...register("minCallFee", {
                    required: "აუცილებელი ველი",
                    pattern: {
                      value: /^[1-9]\d*$/,
                      message: "ფორმატი არავალიდურია",
                    },
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
                {additionalInformation === "callFee" ? (
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
                      handleAdditionalInformation("callFee");
                    }}
                  />
                )}
              </div>
              {errors.minCallFee && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.minCallFee.message}
                </p>
              )}
            </div>

            <div className={styles.inputCard}>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="profilePicture">ატვირთე სურათი</label>
              </div>
              <input
                type="file"
                id="profilePicture"
                accept=".jpg,.jpeg,.png"
                className={`${styles.inputCard__input} ${
                  styles.inputCard__imgInput
                } ${errors.profilePicture ? styles.inputCard__inputError : ""}`}
                {...register("profilePicture", {
                  required: "აუცილებელია სურათის ატვირთვა",
                  validate: validateImage,
                })}
              />
              {errors.profilePicture && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.profilePicture.message}
                </p>
              )}
            </div>

            <div className={`${styles.inputCard} ${styles.cardOfTextarea}`}>
              <div
                className={
                  additionalInformation === "moreInformation"
                    ? styles.showMoreInfo
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
                  მოგვაწოდე დამატებითი ინფორმაცია შენი საქმიანობის, პირობების,
                  ვადების და სერვისების შესახებ.
                </p>
              </div>
              <div className={styles.inputCard__labelBox}>
                <label htmlFor="moreInformation">დამატებითი ინფორმაცია</label>
              </div>
              <div className={styles.inputCard__relative}>
                <textarea
                  id="moreInformation"
                  className={styles.inputCard__textarea}
                  rows={4}
                  placeholder="შეიყვანე ტექსტი აქ..."
                  {...register("moreInformation", {
                    maxLength: {
                      value: 300,
                      message: "მაქსიმუმ 300 სიმბოლო",
                    },
                  })}
                ></textarea>
                {additionalInformation === "moreInformation" ? (
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
                      handleAdditionalInformation("moreInformation");
                    }}
                  />
                )}
              </div>
              {errors.moreInformation && (
                <p className={styles.inputCard__errorMessages}>
                  {errors.moreInformation.message}
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

export default CraftsmanRegistration;


