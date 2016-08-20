export interface IWpPost {
    id: number;
    link: string;
    date: Date;
    title: IWpContent;
    content: IWpContent;
    excerpt: IWpContent;
    featuredImage?: IMedia;
    authorId: number;
}

export interface IWpContent {
    rendered: string;
}

export interface IMedia {
    id: number;
    link: string;
}

export class WpPost {

    static fromApi(response: any): IWpPost {
        let post: IWpPost = {
            id: response.id,
            link: response.link,
            date: new Date(response.date),
            title: { rendered: response.title.rendered },
            content: { rendered: response.content.rendered },
            excerpt: { rendered: response.excerpt.rendered },
            authorId: response.author,
        };

        if (response.better_featured_image != null) {
            post.featuredImage = {
                id: response.better_featured_image.id,
                link: response.better_featured_image.source_url,
            };
        }

        return post;
    }
}