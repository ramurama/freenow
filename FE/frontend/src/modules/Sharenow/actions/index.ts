import { createAction } from "redux-actions";
import endpoints from "../../../constants/endpoints";
import { get } from "../../../utils/apiUtil";
import { SharenowVehicle } from "../interfaces/sharenow.interface";

export const getShareNowVehicles = createAction(
  "@@state/GET_SHARE_NOW_VEHICLES",
  () => ({ isLoading: true })
);

export const getShareNowVehiclesSuccess = createAction(
  "@@state/GET_SHARE_NOW_VEHICLES_SUCCESS",
  (vehicles: SharenowVehicle[]) => ({
    isLoading: false,
    vehicles,
  })
);
