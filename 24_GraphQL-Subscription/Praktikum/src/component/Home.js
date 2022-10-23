import { v4 as uuidv4 } from "uuid";
import PassengerInput from './PassengerInput';
import ListPassenger from './ListPassenger';
import Header from './Header';
import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import LoadingSvg from "./LoadingSvg";

// const getPassenger = gql`
//     query MyQuery 
//         daftar_pengunjung_passenger {
//         id
//         nama
//         umur
//         jenisKelamin
//         }
//     }
// `

const initialValue =  [
    {
        id: uuidv4(),
        nama: 'Yoga',
        umur: 22,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Ria',
        umur: 19,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Fahmi',
        umur: 25,
        jenisKelamin: 'Pria'
    },
    {
        id: uuidv4(),
        nama: 'Lala',
        umur: 21,
        jenisKelamin: 'Wanita'
    },
    {
        id: uuidv4(),
        nama: 'Ivan',
        umur: 25,
        jenisKelamin: 'Pria'
    }
]

function Home() {
    // const {data, loading, error} = useQuery(getPassenger);
    const [list, setList] = useState(initialValue)

    // if(loading) {
    //     <LoadingSvg />
    // }

    // if(error) {
    //     console.log(error)
    //     return null
    // }

    const hapusPengunjung = id => {
        setList((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
    };
    
    const tambahPengunjung = newUser => {
        const newData = {
            id: uuidv4(),
            ...newUser
        }; 
        setList((oldData) => [...oldData, newData]);
    };

    return (
        <div>
            <Header/>
            <ListPassenger 
                data={list}
                hapusPengunjung={hapusPengunjung}
            />
            <PassengerInput
                tambahPengunjung={tambahPengunjung}
            />
        </div>
    )
}

export default Home;