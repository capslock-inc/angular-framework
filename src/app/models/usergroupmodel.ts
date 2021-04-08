export class usergroup{
    constructor(
        public UserGroupName:string | undefined,
        public UserGroupDescription:string | undefined,
        public UserGroupStatus:boolean | undefined
    ) {}
}
export class viewusergroup{
    constructor(
        public UserId:number | undefined,
        public UserGroupName:string | undefined,
        public UserGroupDescription:string | undefined,
        public UserGroupStatus:boolean | undefined
    ) {}
}