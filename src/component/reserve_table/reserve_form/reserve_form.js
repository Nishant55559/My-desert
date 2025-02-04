import './reserve_form.css';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function ReserveForm() {
  return (
    <div className="custom-reserve-form-container">
      <h1 className="custom-reserve-form-title">Reservation</h1>
      <p className="custom-reserve-form-description">Book Your Table at Our Restaurant Easily!</p>
      <form className="custom-reserve-form">
        <div className="custom-reserve-form-group">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="custom-reserve-form-group">
          <input type="tel" placeholder="Phone" required />
          <select required>
            <option value="">Number of Persons</option>
            <option value="1">1 person</option>
            <option value="2">2 persons</option>
            <option value="3">3 persons</option>
            <option value="4">4 persons</option>
            <option value="5">5 persons</option>
          </select>
        </div>
        <div className='dateIprow'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker defaultValue={dayjs('2022-04-17')}sx={{ width: '100%' }} />
          
          <TimePicker defaultValue={dayjs('2022-04-17T15:30')}  sx={{ width: '100%' }}/>
           </LocalizationProvider>
        </div>
        <div
        style={{height:"25px"}}
        ></div>
        <button type="submit" className="custom-reserve-form-button">Reserve Now</button>
      </form>
    </div>
  );
};

export default ReserveForm;
