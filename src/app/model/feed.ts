import { feedAttachment } from "./feedAttachment";

export interface Feed {
    items: any;
    image: any;
    url: any;
    attachments: feedAttachment[];
    title: string;
    pubDate: string;
    author: string;
    content_html: string;
}
