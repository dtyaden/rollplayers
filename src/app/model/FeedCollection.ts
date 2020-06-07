import { FeedTrack } from "./feed";

export class FeedCollection{

    public feeds: FeedTrack[];
    private defaultImage: string;
    private feedsToIndexMapping: Map<string, number>;

    constructor(jsonFeed: any){
        this.feedsToIndexMapping = new Map();
        if (jsonFeed.items === undefined){
            return;
        }
        this.feeds = jsonFeed.items
        this.defaultImage = jsonFeed.icon;
        var index: number = 0;
        
        this.feeds.forEach(feed => {
            if(feed.image === undefined){
                feed.image = this.defaultImage;
            }
            feed.link = feed.attachments[0].url;
            feed.index = index;
            this.feedsToIndexMapping.set(feed.id, feed.index)
        }, this)
    }

    public getFeedIndex(id: string) : number{
        return this.feedsToIndexMapping.get(id)
    }
}