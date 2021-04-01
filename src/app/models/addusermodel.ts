export class adduser {
    constructor(
        public UserFirstName:string | undefined,
        public UserLastName:string | undefined,
        public UserDOB:Date | undefined,
        public UserEmail:string | undefined,
        public UserPassword:string | undefined,
        public UserMobileNumber:number | undefined,
        public UserAddress:string | undefined,
        public UserState:string | undefined,
        public UserCity:string | undefined,
        public UserPostalCode:string | undefined,
        public UserGroupAssign:string | undefined,
        public UserUploadPhoto:ImageBitmap | undefined,
        public UserKycUpload:ImageBitmap | undefined,
        public UserStatus:boolean | undefined
        
    ){}
}