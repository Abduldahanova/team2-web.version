import React, { useState } from "react";
import Q from "./Queue.module.css";
import Header from "../../components/header/Header";
import red from "../../images/red.png";
import green from "../../images/green.png";

import AnotherList from "./List"

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Queue = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCDW9QTjxWlY2P1Tzjtkr6bIMZGO7GZcQs",
    libraries: ["places"],
  });

  const [bankData, setBankData] = useState([
    {
        type: "Физ лица",
        branches: [
          {
            address: "ул. Манас 96А",
            build: "Центральный филиал",
            status: "Закрыто",
            distance: "32 км",
          },
          {
            address: "ул. Тоголок Молдо 11",
            build: "Головной офис",
            status: "Открыто до 16:00",
            distance: "10 км",
          },
          {
              address: "ул.Фрунзе 338 ",
              build: "Центральный филиал",
              status: "Закрыто",
              distance: "39 км",
          },
          {
              address: "ул.Киевская 11",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "10 км",
          },
          {
              address: "ул.Московская  80",
              build: " Центральный филиал",
              status: "Закрыто",
              distance: "32 км",
          },
          {
              address: "ул.Уметалиева 95",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "32 км",
          },
          {
              address: "ул. Байтик Баатыр 11",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "7 км",
          },
        ],
      },
      {
        type: "Юр лица",
        branches: [
          {
            address: "ул. Абдраимов 66",
            build: "Головной офис",
            status: "Открыто до 16:00",
            distance: "44 км",
          },        {
              address: "ул.Фрунзе 338 ",
              build: "Центральный филиал",
              status: "Закрыто",
              distance: "39 км",
          },
          {
              address: "ул.Уметалиева 95",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "32 км",
          },
          {
              address: "ул.Киевская 11",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "10 км",
          },
          {
              address: "ул.Московская  80",
              build: " Центральный филиал",
              status: "Закрыто",
              distance: "32 км",
          },
          {
              address: "ул. Байтик Баатыр 11",
              build: "Головной офис ",
              status: "Открыто до 16:00",
              distance: "7 км",
          },
          {
              address: "ул. Манас 96А",
              build: " Центральный филиал",
              status: "Закрыто",
              distance: "32 км",
          }
        ],
      },
  ]);

  const [selectedBankType, setSelectedBankType] = useState("Физ лица");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const handleBranchSelection = (branch) => {
    setSelectedBranch(branch);
  };

  if (!isLoaded) return <div>Loading...</div>;

  const getStatusImage = (status) => {
    if (status === "Закрыто") {
      return red;
    } else if (status === "Открыто до 16:00") {
      return green;
    } else {
      return null;
    }
  };

  const selectedBank = bankData.find((bank) => bank.type === selectedBankType);

  return (
    <div className={Q.main}>
      <Header />
      <div className={Q.section}>
        <div className={Q.choice}>
          <div className={Q.choice_block}>
            <h2>Пункты обслуживания</h2>
            <div className={Q.liner}>
              <h2>Карта</h2>
            </div>
            <div className={Q.block}>Бишкек</div>
            {bankData.map((bank) => (
              <h3
                key={bank.type}
                className={`${Q.type} ${
                  bank.type === selectedBankType ? Q.selected : ""
                }`}
                onClick={() => setSelectedBankType(bank.type)}
              >
                {bank.type}
              </h3>
            ))}
          </div>
          <div className={Q.show_block}>
            
            {selectedBank ? (
              selectedBank.branches.map((branch, index) => (
                <div
                  className={Q.text_content}
                  key={index}
                  onClick={() => handleBranchSelection(branch)}
                >
                  <p>Адрес: {branch.address}</p>
                  <p className={Q.address}>{branch.build}</p>
                  <p className={Q.status}>
                    <img src={getStatusImage(branch.status)} alt={branch.status} />
                    {branch.status}
                    <p>{branch.distance}</p>
                  </p>
                </div>
              ))
            ) : (
              <div>No branches found.</div>
            )}
          </div>
        </div>

        <div className="google-map-container">
        <input placeholder="Начните вводить адрес " className={Q.lupa}></input>
          {selectedBranch ? (
             <AnotherList branches={selectedBank?.branches || []} />
          ) : (
            <Map selectedBranch={selectedBranch} />
          )}
        </div>
      </div>
    </div>
  );
};

export function Map({ selectedBranch }) {
  const containerStyle = {
    width: "900px",
    height: "90%",
    margin: "0 30px",
  };

  const center = {
    lat: 42.8746,
    lng: 74.5698,
  };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      {selectedBranch && (
        <Marker position={{ lat: selectedBranch.lat, lng: selectedBranch.lng }} />
      )}
    </GoogleMap>
  );
}

export default Queue;













