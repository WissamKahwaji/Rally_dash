import axios from "axios";
import { baseURL } from "../constants/domain";

const publicApiInstance = axios.create({ baseURL });
export default publicApiInstance;
