import React from "react";
import styles from "../styles/SignUpComponent.module.less";

interface SchoolData {
  setYear: (year: number) => void;
  onChangeUniversityName: (
    universityName: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const SignUpComponent: React.FC<SchoolData> = ({
  setYear,
  onChangeUniversityName,
}) => {
  const handleStudentNumber = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setYear(Number(e.target.value));
  };
  const optionObj = [
    { year: "", value: "연도 선택 (학번)" },
    { year: 24, value: "2024학번" },
    { year: 23, value: "2023학번" },
    { year: 22, value: "2022학번" },
    { year: 21, value: "2021학번" },
    { year: 20, value: "2020학번" },
    { year: 19, value: "2019학번" },
    { year: 18, value: "2018학번" },
    { year: 17, value: "2017학번" },
    { year: 16, value: "2016학번" },
    { year: 15, value: "2015학번" },
    { year: 14, value: "2014학번" },
    { year: 13, value: "2013학번" },
    { year: 12, value: "2012학번" },
    { year: 11, value: "2011학번" },
    { year: 10, value: "2010학번" },
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
