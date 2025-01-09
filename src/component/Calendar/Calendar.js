
import './Calendar.css';

function Calendar() {
  return (
    <div className="calendar card">
      <h3>Calendar</h3>
      <table>
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {/* Add appropriate calendar data */}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
