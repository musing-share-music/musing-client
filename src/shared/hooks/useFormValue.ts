import { useState } from 'react';

/**
 * 폼 데이터를 관리하는 커스텀 훅
 * @param defaultFormValues 초기 폼 데이터
 */
export const useFormValue = <FormValue>(defaultFormValues: FormValue) => {
  const [formData, setFormData] = useState<FormValue>(defaultFormValues);

  const updateFormData = <K extends keyof FormValue>(key: K, value: FormValue[K]) => {
    setFormData((prevData) => {
      return {
        ...prevData,
        [key]: value,
      };
    });
  };

  return { formData, updateFormData };
};
