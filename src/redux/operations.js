import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import iziToast from "izitoast";
import "/node_modules/izitoast/dist/css/iziToast.css";

export const instance = axios.create({
    baseURL: "https://656b1225dac3630cf727a347.mockapi.io/",
});

export const fetchCars = createAsyncThunk(
    "cars/fetchall",
    async (_, thunkAPI) => {
        try {
            const { data } = await instance.get("/adverts");
            return data;
        } catch (error) {
            iziToast.error({
                title: "Error",
                messsage: `Oops! Something was wrong... ${error.messsage}`,
            });
            return thunkAPI.rejectWithValue(error.messsage);
        }
    }
);
