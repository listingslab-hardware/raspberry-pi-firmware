import axios from "axios";
import Fingerprint2 from "fingerprintjs2";
import { createAction } from "@reduxjs/toolkit";
import { getStore } from "../../";

export const boot = createAction("SYSTEM/BOOT");
export const tick = createAction("SYSTEM/TICK");
export const systemSays = createAction("SYSTEM/SAYS");
export const setFingerprint = createAction("SYSTEM/SET/FINGERPRINT");
export const setIpgeo = createAction("SYSTEM/SET/IPGEO");
export const ipgeoError = createAction("SYSTEM/IPGEO/ERROR");
export const showUserAtTick = createAction("SYSTEM/BOOT/SHOWUSERATTICK");
export const newVisit = createAction("SYSTEM/NEW/VISIT");

export const createFingerprint = () => {
    const store = getStore();
    Fingerprint2.getPromise().then(function (components) {
        const values = components.map(function (component) {
            return component.value;
        });
        const fingerprint = Fingerprint2.x64hash128(values.join(""), 31);
        store.dispatch({ type: "SYSTEM/SET/FINGERPRINT", fingerprint, components });
    });
};

export const ipgeolocation = () => {
  const store = getStore();
  axios
    .get(`https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_IPGEO}`)
    .then(function(response) {
      store.dispatch({
        type: "SYSTEM/SET/IPGEO",
        ipgeo: response.data
      });
    })
    .catch(function(error) {
      store.dispatch({
        type: "SYSTEM/IPGEO/ERROR",
        error
      });
    });
};