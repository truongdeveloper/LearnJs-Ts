import { ErrorCustom, hideLoading, showLoading } from "./contant.js"
import { DataItem } from "./types.js"

async function getAPI(url: string) {
    try{
        let response = await fetch(url)
        if(!response.ok){
            throw new ErrorCustom("Lỗi gọi API", "Không lấy được dữ liệu")
        }else{
            let data = await response.json()
            return data
        }
    }catch(error){
        throw new ErrorCustom("Lỗi gọi API", "Không lấy được dữ liệu")
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