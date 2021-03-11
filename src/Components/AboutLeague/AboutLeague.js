import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Image from './Image/Image';
import Info from './Info/Info';
import'./AboutLeague.css';

const AboutLeague = () => {
    const { idLeague } = useParams();
    const [detail, setDetail] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetail(data.leagues))
    }, [])
    return (
        <div>
            <div>
            {
                detail.map(detail =><div><Image detail={detail}></Image> <div><Info detail={detail}></Info></div></div>)
            }
            </div>
        </div>
    );
};

export default AboutLeague;