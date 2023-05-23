import { useState } from "react";
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export function TimePicker() {
  const [value, setValue] = useState(new Date())
  function handleChange(value){
    //تغییرات روی تاریخ رو اینجا اعمال کنید
    setValue(value)
  }
  return (
    <DatePicker 
    value={value}
    onChange={handleChange}
    format="YYYY/MM/DD"
    // calendar="persian"
    // locale="fa"
    calendar={persian}
    locale={persian_fa}
    />
  );
}

