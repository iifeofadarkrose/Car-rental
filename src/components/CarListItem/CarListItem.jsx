import React, { useEffect, useState } from "react";
import sprite from "../../assets/sprite.svg";
import css from "./CarListItem.module.css";
import ModalWindow from "../ModalWindow/ModalWindow";
import CarInfo from "../CarInfo/CarInfo";
import { useDispatch } from "react-redux";
import {setFavoriteCars,deleteFavoriteCar,} from "../../redux/favoriteCarsSlice";
import { selectFavoriteCars } from "../../redux/selectors";
import { useSelector } from "react-redux";

const CarListItem = ({
  idCar,
  year,
  make,
  model,
  type,
  image,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heartIconToggle, setHeartIconToggle] = useState(
    `${sprite}#icon-heart-normal`
  );
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteCars = useSelector(selectFavoriteCars);

  useEffect(() => {
    if (favoriteCars?.some((car) => car.idCar === idCar)) {
      setIsFavorite(true);
      setHeartIconToggle(`${sprite}#icon-heart-active`);
    } else {
      setIsFavorite(false);
      setHeartIconToggle(`${sprite}#icon-heart-normal`);
    }
  }, [favoriteCars, idCar]);

  const dispatch = useDispatch();

  const onClickModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const car = {
    idCar,
    year,
    make,
    model,
    type,
    image,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    rentalConditions,
    mileage,
  };
  const handleAddFavoriteCar = () => {
    isFavorite
      ? dispatch(deleteFavoriteCar(idCar))
      : dispatch(setFavoriteCars(car));
  };

  return (
    <li className={css.listItem}>
      <img src={image} alt={model} className={css.carImg} />
      <svg className={css.icon} onClick={handleAddFavoriteCar}>
        <use href={heartIconToggle} />
      </svg>
      <div className={css.wrapName}>
        <div className={css.carName}>
          <p>{make}</p>
          <p className={css.accent}>{model},</p>
          <p>{year}</p>
        </div>
        <p className={css.price}>{rentalPrice}</p>
      </div>

      <div className={css.descrText}>
        <span className={css.descrSpan}>{address}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{rentalCompany}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{type}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{idCar}</span>
        <svg className={css.iconStick}>
          <use href={`${sprite}#icon-Vector-4`} />
        </svg>
        <span className={css.descrSpan}>{functionalities}</span>
      </div>

      <button type="button" className={css.carButton} onClick={onClickModal}>
        Learn more
      </button>
      {isModalOpen && (
        <ModalWindow onClick={onClickModal}>
          <CarInfo
            onClick={onClickModal}
            idCar={idCar}
            year={year}
            make={make}
            model={model}
            type={type}
            image={image}
            description={description}
            fuelConsumption={fuelConsumption}
            engineSize={engineSize}
            accessories={accessories}
            functionalities={functionalities}
            rentalPrice={rentalPrice}
            rentalCompany={rentalCompany}
            address={address}
            rentalConditions={rentalConditions}
            mileage={mileage}
          />
        </ModalWindow>
      )}
    </li>
  );
};

export default CarListItem;
