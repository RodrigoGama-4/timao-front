import axios, {AxiosPromise} from "axios";
import { IdoloData } from "../interface/IdoloData";
import { useQuery } from "@tanstack/react-query";

const API_URL= 'http://localhost:8080';

const fetchData = (): AxiosPromise<IdoloData[]> =>{
    const response = axios.get(API_URL + '/idolos')
    return response;
}

export function useIdoloData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['idolo-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}
