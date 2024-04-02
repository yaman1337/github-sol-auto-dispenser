import { WebhookClient } from "discord.js";
export declare const webhookClient: WebhookClient;
type sendBountyTypes = {
    title: string;
    description: string;
    avatarUrl: string;
    prLink: string;
};
export declare const sendBountyMessageToDiscord: ({ title, description, avatarUrl, prLink }: sendBountyTypes) => Promise<void>;
type sendPrTypes = {
    title: string;
    avatarUrl: string;
    prLink: string;
};
export declare const sendPrOpenToDiscord: ({ title, avatarUrl, prLink }: sendPrTypes) => Promise<void>;
type SendIssueType = {
    title: string;
    avatarUrl: string;
    issueLink: string;
};
export declare const sendIssueOpenToDiscord: ({ title, avatarUrl, issueLink }: SendIssueType) => Promise<void>;
export {};
