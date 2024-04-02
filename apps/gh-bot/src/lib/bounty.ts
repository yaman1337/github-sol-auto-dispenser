import axios from "axios"
import dotenv from "dotenv"

dotenv.config()

export interface IAddNewBountyParams {
  username: string;
  amount: number;
}

export const addNewBounty = async (payload: IAddNewBountyParams) => {
  try {
    
    const endpoint = process.env.SERVER_URL + "/api/bounty"
    const response = await axios.post(endpoint, payload);

    const { data } = response;
 
    if(data.success === false) throw new Error(data.error)

  } catch (error: any) {
    throw new Error(error.message)
  }
};
