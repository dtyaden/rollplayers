import { feedAttachment } from "./feedAttachment";
import {Track} from 'ngx-audio-player'

export class FeedTrack extends Track{
    
    items: any;
    image: any;
    url: any;
    attachments: feedAttachment[];
    pubDate: string;
    author: string;
    content_html: string;
    date_published: string;
    id: string;
}
  