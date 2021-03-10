import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faFutbol, faMapMarkerAlt, faMars, } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import maleImg from '../../../sports-mania/Photo/male.png';
import femaleImg from '../../../sports-mania/Photo/female.png';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Info.css';
import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Info = (props) => {
    const { strLeague, intFormedYear, strCountry, strSport, strGender } = props.detail;
    
    return (
        <div className="info1">
            <div>
                <div>
                    <h2>{strLeague}</h2>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:   {intFormedYear}</p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country:   {strCountry}</p>
                    <p> <FontAwesomeIcon icon={faFutbol} /> Sport Type:   {strSport}</p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender:   {strGender}</p>
                </div>
            </div>
            <div>
                <p id="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti fuga, optio maiores atque veritatis mollitia consequuntur necessitatibus velit quae consectetur eveniet et deserunt, modi omnis dolorum? Aliquam quasi totam fugit quisquam suscipit modi, cum blanditiis ipsam distinctio rem, accusantium quo consectetur amet sapiente minus atque doloremque voluptas reprehenderit delectus possimus dolorem eum dolore maiores? Dolorum ea incidunt temporibus eius laudantium iure tempore nobis repellendus quas blanditiis quos odio nostrum non officia sint fugiat quis ab rerum maxime, animi iste quae harum mollitia. Enim non id nesciunt nostrum. Ipsa modi numquam illo doloribus dolorum! Magni inventore architecto assumenda, quidem eos eveniet harum animi iusto numquam nemo voluptas tenetur iste? Tenetur ea, perspiciatis nihil at ut, id reprehenderit, deserunt enim fugit blanditiis voluptatum? Ratione aut explicabo minus similique iusto placeat laborum cupiditate, laboriosam aliquid enim eaque reprehenderit ducimus tenetur ullam inventore provident doloremque dolore quod earum sunt at magni hic. Dolores, minima omnis consectetur itaque distinctio temporibus maxime fuga ipsa quod corporis consequuntur ipsam fugiat, excepturi quaerat quisquam soluta nemo et. Architecto illo delectus enim ducimus repellat optio harum sint soluta iusto amet numquam at in, adipisci eligendi velit laudantium cum, minima expedita facilis ut nulla voluptate consequuntur ullam itaque. Iusto, doloremque.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
                <FontAwesomeIcon className="social fb" icon={faFacebook} /> <FontAwesomeIcon className="social tw" icon={faTwitter} />  <FontAwesomeIcon className="social yt" icon={faYoutube} />
            </div>
        </div>
    );
};

export default Info;