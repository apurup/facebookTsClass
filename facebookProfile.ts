class About{
    getWorkAndEducation = (): WorkAndEducation => {
        return this._workAndEducation;
    }

    setWorkAndEducation = (value: WorkAndEducation) => {
        this._workAndEducation = value;
    }

    getPlacesYouHaveLived = (): PlacesYouHaveLived => {
        return this._placesYouHaveLived;
    }

    setPlacesYouHaveLived = (value: PlacesYouHaveLived) => {
        this._placesYouHaveLived = value;
    }

    getContact = (): ContactInfo => {
        return this._contact;
    }

    setContact = (value: ContactInfo) => {
        this._contact = value;
    }

    getBasicInfo = (): BasicInfo => {
        return this._basicInfo;
    }

    setBasicInfo = (value: BasicInfo) =>{
        this._basicInfo = value;
    }

    getFamilyAndRelationships = (): FamilyAndRelationShip => {
        return this._familyAndRelationships;
    }

    setFamilyAndRelationships = (value: FamilyAndRelationShip) => {
        this._familyAndRelationships = value;
    }

    getNickName = (): Array<string> =>{
        return this._nickName;
    }

    setNickName = (value: Array<string>) => {
        this._nickName = value;
    }

    getAboutyou = (): string => {
        return this._aboutyou;
    }

    setAboutyou = (value: string) => {
        this._aboutyou = value;
    }
    constructor(private _workAndEducation:WorkAndEducation, private _placesYouHaveLived:PlacesYouHaveLived, private _contact:ContactInfo, private _basicInfo:BasicInfo, private _familyAndRelationships:FamilyAndRelationShip, private _nickName?:Array<string>, private _aboutyou?:string)
    {
        this._workAndEducation = _workAndEducation;
        this._placesYouHaveLived = _placesYouHaveLived;
        this._contact = _contact;
        this._basicInfo = _basicInfo;
        this._familyAndRelationships = _familyAndRelationships;
        this._nickName = _nickName;
        this._aboutyou = _aboutyou;
    }
}

class WorkAndEducation{

    //public workList:Array<WorkListItem>;
    constructor(private workList:Array<WorkListItem>,private professionalSkills:string,private collegeList:Array<CollegeListItem>)
    {
        this.workList = workList;
        this.professionalSkills = professionalSkills;
        this.collegeList = collegeList;
    }

    getWorkList = () :Array<WorkListItem> =>{
        return this.workList;
    }
    getProfessionalSkills = () :string =>{
        return this.professionalSkills;
    }
    getCollegeList = ():Array<CollegeListItem> =>{
        return this.collegeList
    }
}

class PlacesYouHaveLived{
    getPlacesList = (): Array<PlacesListItem> => {
        return this._placesList;
    }

    addPlace = (value:PlacesListItem) =>
    {
        this._placesList.push(value)
    }

    removePlace = (value:PlacesListItem) => {
        this._placesList.slice(this._placesList.indexOf(value));
    }
    constructor(private _placesList:Array<PlacesListItem>)
    {
        this._placesList = _placesList;
    }
}

enum interested{
    men,
    women
}
class BasicInfo{
    getDob = (): Date => {
        return this._dob;
    }

    setDob = (value: Date) => {
        this._dob = value;
    }

    getGender = (): string => {
        return this._gender;
    }

    setGender = (value: string) => {
        this._gender = value;
    }

    getIntrestedIn = (): interested =>{
        return this._intrestedIn;
    }

    setIntrestedIn = (value: interested) => {
        this._intrestedIn = value;
    }

    getLanguages = (): Array<string> => {
        return this._languages;
    }

    setLanguages = (value: Array<string>) =>{
        this._languages = value;
    }

    getReligion = (): string => {
        return this._religion;
    }

    setReligion = (value: string) => {
        this._religion = value;
    }

    constructor(private _dob:Date, private _gender:string, private _intrestedIn:interested, private _languages:Array<string>, private _religion:string)
    {
        this._dob = _dob;
        this._gender = _gender;
        this._intrestedIn = _intrestedIn;
        this._languages = _languages;
        this._religion = _religion
    }
}

class FamilyAndRelationShip{
    getRelationshipStatus = (): String => {
        return this._relationshipStatus;
    }

    setRelationshipStatus = (value: String) => {
        this._relationshipStatus = value;
    }

    getFamilyMembers = (): Array<FamilyMember> => {
        return this._familyMembers;
    }

    setFamilyMembers = (value: Array<FamilyMember>) =>{
        this._familyMembers = value;
    }

    constructor(private _relationshipStatus:String, private _familyMembers:Array<FamilyMember>)
    {
        this._relationshipStatus = _relationshipStatus;
        this._familyMembers = _familyMembers;
    }
}

class FamilyMember{
    getMemberPic = (): URL => {
        return this._memberPic;
    }

    setMemberPic = (value: URL) => {
        this._memberPic = value;
    }

    getMemberName = (): string =>{
        return this._memberName;
    }

    setMemberName = (value: string) => {
        this._memberName = value;
    }

    getRelation = (): string =>{
        return this._relation;
    }

    setRelation = (value: string) => {
        this._relation = value;
    }
    constructor(private _memberPic:URL, private _memberName:string, private _relation:string){
        this._memberPic = _memberPic;
        this._memberName = _memberName;
        this._relation = _relation;
    }
}

//new BasicInfo(new Date(),"male",interested.women)
class ContactInfo{
    getPhoneNumbers = (): Array<number> => {
        return this._phoneNumbers;
    }


    getEmailList = (): Array<string> => {
        return this._emailList;
    }


    addEmail = (value:string) =>{
        this._emailList.push(value)
    }

    removeEmail = (value:string) =>{
        this._emailList.slice(this._emailList.indexOf(value))
    }

    addNumber = (value:number) =>{
        this._phoneNumbers.push(value)
    }

    removeNumber = (value:number) =>{
        this._phoneNumbers.slice(this._phoneNumbers.indexOf(value))
    }



    constructor(private _phoneNumbers:Array<number>,private _emailList:Array<string>)
    {
        this._phoneNumbers = _phoneNumbers;
        this._emailList = _emailList;
    }


}

class PlacesListItem{
    getPlacePic = (): URL => {
        return this._placePic;
    }

    setPlacePic = (value: URL) => {
        this._placePic = value;
    }

    getLocation = (): string  =>{
        return this._location;
    }

    setLocation = (value: string) => {
        this._location = value;
    }

    getStartYear = (): Date => {
        return this._startYear;
    }

    setStartYear = (value: Date) =>{
        this._startYear = value;
    }

    getCurrentCity = (): boolean =>{
        return this._currentCity;
    }

    setCurrentCity = (value: boolean) => {
        this._currentCity = value;
    }

    getEndDate = (): Date =>{
        return this._endDate;
    }

    setEndDate = (value: Date) =>{
        this._endDate = value;
    }
    constructor(private _placePic:URL, private _location:string, private _startYear:Date, private _currentCity:boolean = false, private _endDate?:Date)
    {
        this._placePic = _placePic;
        this._location = _location;
        this._startYear = _startYear;
        this._currentCity = _currentCity;
        this._endDate = _endDate;
    }
}

class WorkListItem{
    setCompanyPic = (value: URL) => {
        this._companyPic = value;
    }

    setCompanyName = (value: string) => {
        this._companyName = value;
    }

    setPosition = (value: string) => {
        this._position = value;
    }

    setWorkLocation = (value: string) => {
        this._workLocation = value;
    }

    setDescription = (value: string) => {
        this._description = value;
    }

    setStartYear = (value: Date) =>{
        this._startYear = value;
    }

    setEndYear = (value: Date) => {
        this._endYear = value;
    }
    getCompanyPic = () => {
        return this._companyPic;
    }

    getCompanyName = () =>{
        return this._companyName;
    }

    getPosition = () => {
        return this._position;
    }

    getWorkLocation = () => {
        return this._workLocation;
    }

    getDescription = () =>{
        return this._description;
    }

    getStartYear = () =>{
        return this._startYear;
    }

    getEndYear = () => {
        return this._endYear;
    }
    constructor(private _companyPic:URL, private _companyName:string, private _position:string, private _workLocation:string, private _description:string, private _startYear:Date, private _endYear?:Date)
    {
        this._companyPic = _companyPic;
        this._companyName = _companyName;
        this._position = _position;
        this._workLocation = _workLocation;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
    }

}

class CollegeListItem{
    setCollegePic = (value: URL) => {
        this._collegePic = value;
    }

    setCollegeName = (value: string) => {
        this._collegeName = value;
    }

    setCollegeLocation = (value: string) => {
        this._collegeLocation = value;
    }

    setDescription = (value: string) => {
        this._description = value;
    }

    setStartYear = (value: Date) => {
        this._startYear = value;
    }

    setEndYear = (value: Date) => {
        this._endYear = value;
    }
    getCollegePic = () => {
        return this._collegePic;
    }

    getCollegeName = () => {
        return this._collegeName;
    }

    getCollegeLocation = () => {
        return this._collegeLocation;
    }

    getStartYear = () => {
        return this._startYear;
    }

    getEndYear = () => {
        return this._endYear;
    }

    getDescription = () =>  {
        return this._description;
    }

    constructor(private _collegePic:URL, private _collegeName:string, private _collegeLocation:string, private _description:string, private _startYear:Date, private _endYear:Date)
    {
        this._collegePic = _collegePic;
        this._collegeLocation = _collegeLocation;
        this._collegeName = _collegeName;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
    }




}
let phonenumbers = [
    999999999,73975629593
]

let emails = [
    "isvieuv@iis.com",
    "ueffou@ius.com"
]


let languages = [
    "hindhi",
    "english",
    "telugu"
]


type familyMebers = Array<FamilyMember>
let familyMemberList:familyMebers =[
    new FamilyMember(new URL(`https://www.example.com/`),"iwvveouv","uncle"),
    new FamilyMember(new URL(`https://www.example.com/`),"iwvvesobvo","uncle")
]
type workLists = Array<WorkListItem>;

let date = new Date();
date.setFullYear(2018)
//date.setDate(30)
let workList:workLists =[
    new WorkListItem(new URL(`https://www.example.com/`),"tcs","HR","Hyderabad","work was great",date)
]

type collegeLists = Array<CollegeListItem>;

let collegeList:collegeLists = [
    new CollegeListItem(new URL(`https://www.example.com/`),"JntuhCes","Medak","An excelent College",new Date(2015),new Date(2019))
]

type palces = Array<PlacesListItem>

let placeList:palces = [
    new PlacesListItem(new URL(`https://wwww.example.com`),"hyderabad",date,false,date)
]
/*let x = new WorkAndEducation(workList,"Mean Stack Developer",collegeList);
console.log(x.getWorkList())
let z = x.getWorkList();
console.log()
console.log(x.getCollegeList()[0].getCollegePic())*/

let about = new About(new WorkAndEducation(workList,"NA",collegeList),new PlacesYouHaveLived(placeList),new ContactInfo(phonenumbers,emails),
    new BasicInfo(date,"male",interested.women,languages,"hindhu"),new FamilyAndRelationShip("single",familyMemberList),["appu","ramu"]);

console.log(about.getBasicInfo().getDob())
console.log(about.getFamilyAndRelationships().getFamilyMembers()[0].getMemberName())