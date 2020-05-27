import { Feed } from "./feed";

export class FeedCollection{

    public feeds: Feed[];
    private defaultImage: string;
    
    constructor(something: any){
        if (something.items === undefined){
            return;
        }
        this.feeds = something.items
        this.defaultImage = something.icon;
        this.feeds.forEach(feed => {
            if(feed.image === undefined){
                feed.image = this.defaultImage;
            }
        }, this)
    }

}