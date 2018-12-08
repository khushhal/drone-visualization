import WeatherSagas from "./Weather";
import DashboardSagas from './DashboardMetrics';
import ApiErrors from "./ApiErrors";

export default [...ApiErrors, ...WeatherSagas, ...DashboardSagas];
