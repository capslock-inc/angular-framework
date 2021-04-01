export class quesmodel {
    constructor(
        public inputtype:string | undefined,
        public questiontitle:string | undefined,
        public possibleanser:string | undefined,
        public correctanswer:string | undefined,
        public sortorder:string | undefined
    ) {
        
    }
}