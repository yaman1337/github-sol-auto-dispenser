export interface IAddNewBountyParams {
    username: string;
    amount: number;
}
export declare const addNewBounty: (payload: IAddNewBountyParams) => Promise<void>;
