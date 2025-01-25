import './map.css';

function Locate(){
    return(

        <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238133.57587898753!2d88.19815430875944!3d22.675751819462794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bff28521df%3A0xe4554d9c2d8b0a07!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1612345678901!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>

    )
};

export default Locate;