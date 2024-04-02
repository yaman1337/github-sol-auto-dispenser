export interface IAddNewBountyParams {
    username: string;
    amount: number;
}
export declare const addNewBounty: ({ username, amount, }: IAddNewBountyParams) => Promise<{
    success: boolean;
    message: string;
    error?: undefined;
} | {
    success: boolean;
    error: any;
    message?: undefined;
}>;
