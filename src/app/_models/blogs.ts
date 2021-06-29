import { Comment } from "./comment";

export class Blogs {
    constructor(
        public _id: string,
        public title: string,
        public body: string,
        public Author: string,
        public blogImg: string,
        
        public createdAt: Date,
        public tags?: [string],
        public comments?:[Comment],
        public likes?:[string],
        public userId?:string,
        public likeFlag?:string
        ){}
}
