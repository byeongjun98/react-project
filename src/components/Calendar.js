// src/components/Calendar.js
import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // 기본 스타일
import '../css/Calendar.css'; // 사용자 정의 스타일 (나중에 추가)

const CustomCalendar = () => {
    const handleDateChange = (date) => {
        console.log(date); // 선택된 날짜를 콘솔에 표시 (나중에 기능 추가 가능)
    };

    return (
        <div>
            <h2>경기 일정</h2>
            <Calendar
                onChange={handleDateChange}
                tileContent={({ date, view }) => {
                    // 날짜에 따라 내용을 표시할 수 있습니다. 예시로 빈 내용 설정.
                    if (date.getDate() === 6) {
                        return <p>FC안양<br />17:30 용인미르</p>;
                    }
                    if (date.getDate() === 19) {
                        return <p>부천FC1995<br />14:00 부천종합</p>;
                    }
                    if (date.getDate() === 27) {
                        return <p>김포FC<br />14:00 서터</p>;
                    }
                    if (date.getDate() === 30) {
                        return <p>충남아산FC<br />19:30 용인미르</p>;
                    }
                    return null; // 기본적으로는 아무 내용도 표시하지 않음
                }}
            />
        </div>
    );
};

export default CustomCalendar;
