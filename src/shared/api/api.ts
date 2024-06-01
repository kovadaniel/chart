import axios from 'axios';
import { BASE_URL } from 'shared/const/api';

export const api = axios.create({
    baseURL: BASE_URL,
});
