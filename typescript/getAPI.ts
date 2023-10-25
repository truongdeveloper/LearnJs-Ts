import { ErrorCustom, hideLoading, showLoading } from "./contant.js"
import { DataItem } from "./types.js"

async function getAPI(url: string) {
    try{
        let response = await fetch(url)
        console.log(response)
        if(!response.ok){
            throw new ErrorCustom("Lỗi gọi API", "404 Not Found ")
        }else{
            let data = await response.json()
            console.log(data)
            return data
        }
    }catch(error){
        throw new ErrorCustom("Lỗi gọi API", error.message)
    }
}

export async function getData(url: string) {
    showLoading();
    try {
        const data: DataItem[] = await getAPI(url);
        return data;
    } catch (error) {
        throw error; // Rethrow lỗi để nó có thể được bắt ở nơi gọi getData
    }finally{
        hideLoading()
    }
}