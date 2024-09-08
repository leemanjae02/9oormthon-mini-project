import React from "react";
import styles from "../styles/SignUpComponent.module.less";

interface SchoolData {
  setStudentNumber: (studentNumber: string) => void;
  onChangeUniversityName: (
    universityName: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const SignUpComponent: React.FC<SchoolData> = ({
  setStudentNumber,
  onChangeUniversityName,
}) => {
  const handleStudentNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setStudentNumber(e.target.value);
  };
  const optionObj = [
    { year: "", value: "연도 선택 (학번)" },
    { year: 2024, value: "2024학번" },
    { year: 2023, value: "2023학번" },
    { year: 2022, value: "2022학번" },
    { year: 2021, value: "2021학번" },
    { year: 2020, value: "2020학번" },
    { year: 2019, value: "2019학번" },
    { year: 2018, value: "2018학번" },
    { year: 2017, value: "2017학번" },
    { year: 2016, value: "2016학번" },
    { year: 2015, value: "2015학번" },
    { year: 2014, value: "2014학번" },
    { year: 2013, value: "2013학번" },
    { year: 2012, value: "2012학번" },
    { year: 2011, value: "2011학번" },
    { year: 2010, value: "2010학번" },
  ];
  return (
    <div>
      <h2 className={styles.h2text}>학교 선택</h2>
      <div className={styles.inputbox}>
        <div className={styles.label}>
          <label>입학연도</label>
        </div>
        <select name="enterYear" onChange={handleStudentNumber}>
          {optionObj.map((option) => (
            <option key={option.year} value={option.year}>
              {option.value}
            </option>
          ))}
        </select>

        <div className={styles.inputbox}>
          <div className={styles.label}>
            <label>학교</label>
          </div>
          <div className={styles.inputtext}>
            <input
              type="text"
              placeholder="학교 이름을 입력하세요."
              onChange={onChangeUniversityName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpComponent;
