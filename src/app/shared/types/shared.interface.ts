export interface ITabCardEntity{
    tabLabel: string
    cardTitle?: string;
    imagePathOrUrl: string;
    cardSubTitle?: ISubTitleEntity;
    cardContentData?: string;
    cardContentList?: string[]
    session?: string;
    link?:string
    location?: string;
    result?: IResult
}

export interface ISubTitleEntity{
    content: string;
    rightContent?: string;
}

export interface IResult{
    resultImage: string
    altText: string
}

export interface ITabCardListEntity{
    tabLabel: string;
    skills: ISkills[]
   
}
export interface ISkills{
    // cardTitle?: string;
    imagePathOrUrl?: string;
    cardSubTitle?: string;
}