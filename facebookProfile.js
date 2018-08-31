var About = /** @class */ (function () {
    function About(_workAndEducation, _placesYouHaveLived, _contact, _basicInfo, _familyAndRelationships, _nickName, _aboutyou) {
        var _this = this;
        this._workAndEducation = _workAndEducation;
        this._placesYouHaveLived = _placesYouHaveLived;
        this._contact = _contact;
        this._basicInfo = _basicInfo;
        this._familyAndRelationships = _familyAndRelationships;
        this._nickName = _nickName;
        this._aboutyou = _aboutyou;
        this.getWorkAndEducation = function () {
            return _this._workAndEducation;
        };
        this.setWorkAndEducation = function (value) {
            _this._workAndEducation = value;
        };
        this.getPlacesYouHaveLived = function () {
            return _this._placesYouHaveLived;
        };
        this.setPlacesYouHaveLived = function (value) {
            _this._placesYouHaveLived = value;
        };
        this.getContact = function () {
            return _this._contact;
        };
        this.setContact = function (value) {
            _this._contact = value;
        };
        this.getBasicInfo = function () {
            return _this._basicInfo;
        };
        this.setBasicInfo = function (value) {
            _this._basicInfo = value;
        };
        this.getFamilyAndRelationships = function () {
            return _this._familyAndRelationships;
        };
        this.setFamilyAndRelationships = function (value) {
            _this._familyAndRelationships = value;
        };
        this.getNickName = function () {
            return _this._nickName;
        };
        this.setNickName = function (value) {
            _this._nickName = value;
        };
        this.getAboutyou = function () {
            return _this._aboutyou;
        };
        this.setAboutyou = function (value) {
            _this._aboutyou = value;
        };
        this._workAndEducation = _workAndEducation;
        this._placesYouHaveLived = _placesYouHaveLived;
        this._contact = _contact;
        this._basicInfo = _basicInfo;
        this._familyAndRelationships = _familyAndRelationships;
        this._nickName = _nickName;
        this._aboutyou = _aboutyou;
    }
    return About;
}());
var WorkAndEducation = /** @class */ (function () {
    //public workList:Array<WorkListItem>;
    function WorkAndEducation(workList, professionalSkills, collegeList) {
        var _this = this;
        this.workList = workList;
        this.professionalSkills = professionalSkills;
        this.collegeList = collegeList;
        this.getWorkList = function () {
            return _this.workList;
        };
        this.getProfessionalSkills = function () {
            return _this.professionalSkills;
        };
        this.getCollegeList = function () {
            return _this.collegeList;
        };
        this.workList = workList;
        this.professionalSkills = professionalSkills;
        this.collegeList = collegeList;
    }
    return WorkAndEducation;
}());
var PlacesYouHaveLived = /** @class */ (function () {
    function PlacesYouHaveLived(_placesList) {
        var _this = this;
        this._placesList = _placesList;
        this.getPlacesList = function () {
            return _this._placesList;
        };
        this.addPlace = function (value) {
            _this._placesList.push(value);
        };
        this.removePlace = function (value) {
            _this._placesList.slice(_this._placesList.indexOf(value));
        };
        this._placesList = _placesList;
    }
    return PlacesYouHaveLived;
}());
var interested;
(function (interested) {
    interested[interested["men"] = 0] = "men";
    interested[interested["women"] = 1] = "women";
})(interested || (interested = {}));
var BasicInfo = /** @class */ (function () {
    function BasicInfo(_dob, _gender, _intrestedIn, _languages, _religion) {
        var _this = this;
        this._dob = _dob;
        this._gender = _gender;
        this._intrestedIn = _intrestedIn;
        this._languages = _languages;
        this._religion = _religion;
        this.getDob = function () {
            return _this._dob;
        };
        this.setDob = function (value) {
            _this._dob = value;
        };
        this.getGender = function () {
            return _this._gender;
        };
        this.setGender = function (value) {
            _this._gender = value;
        };
        this.getIntrestedIn = function () {
            return _this._intrestedIn;
        };
        this.setIntrestedIn = function (value) {
            _this._intrestedIn = value;
        };
        this.getLanguages = function () {
            return _this._languages;
        };
        this.setLanguages = function (value) {
            _this._languages = value;
        };
        this.getReligion = function () {
            return _this._religion;
        };
        this.setReligion = function (value) {
            _this._religion = value;
        };
        this._dob = _dob;
        this._gender = _gender;
        this._intrestedIn = _intrestedIn;
        this._languages = _languages;
        this._religion = _religion;
    }
    return BasicInfo;
}());
var FamilyAndRelationShip = /** @class */ (function () {
    function FamilyAndRelationShip(_relationshipStatus, _familyMembers) {
        var _this = this;
        this._relationshipStatus = _relationshipStatus;
        this._familyMembers = _familyMembers;
        this.getRelationshipStatus = function () {
            return _this._relationshipStatus;
        };
        this.setRelationshipStatus = function (value) {
            _this._relationshipStatus = value;
        };
        this.getFamilyMembers = function () {
            return _this._familyMembers;
        };
        this.setFamilyMembers = function (value) {
            _this._familyMembers = value;
        };
        this._relationshipStatus = _relationshipStatus;
        this._familyMembers = _familyMembers;
    }
    return FamilyAndRelationShip;
}());
var FamilyMember = /** @class */ (function () {
    function FamilyMember(_memberPic, _memberName, _relation) {
        var _this = this;
        this._memberPic = _memberPic;
        this._memberName = _memberName;
        this._relation = _relation;
        this.getMemberPic = function () {
            return _this._memberPic;
        };
        this.setMemberPic = function (value) {
            _this._memberPic = value;
        };
        this.getMemberName = function () {
            return _this._memberName;
        };
        this.setMemberName = function (value) {
            _this._memberName = value;
        };
        this.getRelation = function () {
            return _this._relation;
        };
        this.setRelation = function (value) {
            _this._relation = value;
        };
        this._memberPic = _memberPic;
        this._memberName = _memberName;
        this._relation = _relation;
    }
    return FamilyMember;
}());
//new BasicInfo(new Date(),"male",interested.women)
var ContactInfo = /** @class */ (function () {
    function ContactInfo(_phoneNumbers, _emailList) {
        var _this = this;
        this._phoneNumbers = _phoneNumbers;
        this._emailList = _emailList;
        this.getPhoneNumbers = function () {
            return _this._phoneNumbers;
        };
        this.getEmailList = function () {
            return _this._emailList;
        };
        this.addEmail = function (value) {
            _this._emailList.push(value);
        };
        this.removeEmail = function (value) {
            _this._emailList.slice(_this._emailList.indexOf(value));
        };
        this.addNumber = function (value) {
            _this._phoneNumbers.push(value);
        };
        this.removeNumber = function (value) {
            _this._phoneNumbers.slice(_this._phoneNumbers.indexOf(value));
        };
        this._phoneNumbers = _phoneNumbers;
        this._emailList = _emailList;
    }
    return ContactInfo;
}());
var PlacesListItem = /** @class */ (function () {
    function PlacesListItem(_placePic, _location, _startYear, _currentCity, _endDate) {
        if (_currentCity === void 0) { _currentCity = false; }
        var _this = this;
        this._placePic = _placePic;
        this._location = _location;
        this._startYear = _startYear;
        this._currentCity = _currentCity;
        this._endDate = _endDate;
        this.getPlacePic = function () {
            return _this._placePic;
        };
        this.setPlacePic = function (value) {
            _this._placePic = value;
        };
        this.getLocation = function () {
            return _this._location;
        };
        this.setLocation = function (value) {
            _this._location = value;
        };
        this.getStartYear = function () {
            return _this._startYear;
        };
        this.setStartYear = function (value) {
            _this._startYear = value;
        };
        this.getCurrentCity = function () {
            return _this._currentCity;
        };
        this.setCurrentCity = function (value) {
            _this._currentCity = value;
        };
        this.getEndDate = function () {
            return _this._endDate;
        };
        this.setEndDate = function (value) {
            _this._endDate = value;
        };
        this._placePic = _placePic;
        this._location = _location;
        this._startYear = _startYear;
        this._currentCity = _currentCity;
        this._endDate = _endDate;
    }
    return PlacesListItem;
}());
var WorkListItem = /** @class */ (function () {
    function WorkListItem(_companyPic, _companyName, _position, _workLocation, _description, _startYear, _endYear) {
        var _this = this;
        this._companyPic = _companyPic;
        this._companyName = _companyName;
        this._position = _position;
        this._workLocation = _workLocation;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
        this.setCompanyPic = function (value) {
            _this._companyPic = value;
        };
        this.setCompanyName = function (value) {
            _this._companyName = value;
        };
        this.setPosition = function (value) {
            _this._position = value;
        };
        this.setWorkLocation = function (value) {
            _this._workLocation = value;
        };
        this.setDescription = function (value) {
            _this._description = value;
        };
        this.setStartYear = function (value) {
            _this._startYear = value;
        };
        this.setEndYear = function (value) {
            _this._endYear = value;
        };
        this.getCompanyPic = function () {
            return _this._companyPic;
        };
        this.getCompanyName = function () {
            return _this._companyName;
        };
        this.getPosition = function () {
            return _this._position;
        };
        this.getWorkLocation = function () {
            return _this._workLocation;
        };
        this.getDescription = function () {
            return _this._description;
        };
        this.getStartYear = function () {
            return _this._startYear;
        };
        this.getEndYear = function () {
            return _this._endYear;
        };
        this._companyPic = _companyPic;
        this._companyName = _companyName;
        this._position = _position;
        this._workLocation = _workLocation;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
    }
    return WorkListItem;
}());
var CollegeListItem = /** @class */ (function () {
    function CollegeListItem(_collegePic, _collegeName, _collegeLocation, _description, _startYear, _endYear) {
        var _this = this;
        this._collegePic = _collegePic;
        this._collegeName = _collegeName;
        this._collegeLocation = _collegeLocation;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
        this.setCollegePic = function (value) {
            _this._collegePic = value;
        };
        this.setCollegeName = function (value) {
            _this._collegeName = value;
        };
        this.setCollegeLocation = function (value) {
            _this._collegeLocation = value;
        };
        this.setDescription = function (value) {
            _this._description = value;
        };
        this.setStartYear = function (value) {
            _this._startYear = value;
        };
        this.setEndYear = function (value) {
            _this._endYear = value;
        };
        this.getCollegePic = function () {
            return _this._collegePic;
        };
        this.getCollegeName = function () {
            return _this._collegeName;
        };
        this.getCollegeLocation = function () {
            return _this._collegeLocation;
        };
        this.getStartYear = function () {
            return _this._startYear;
        };
        this.getEndYear = function () {
            return _this._endYear;
        };
        this.getDescription = function () {
            return _this._description;
        };
        this._collegePic = _collegePic;
        this._collegeLocation = _collegeLocation;
        this._collegeName = _collegeName;
        this._description = _description;
        this._startYear = _startYear;
        this._endYear = _endYear;
    }
    return CollegeListItem;
}());
var phonenumbers = [
    999999999, 73975629593
];
var emails = [
    "isvieuv@iis.com",
    "ueffou@ius.com"
];
var languages = [
    "hindhi",
    "english",
    "telugu"
];
var familyMemberList = [
    new FamilyMember(new URL("https://www.example.com/"), "iwvveouv", "uncle"),
    new FamilyMember(new URL("https://www.example.com/"), "iwvvesobvo", "uncle")
];
var date = new Date();
date.setFullYear(2018);
//date.setDate(30)
var workList = [
    new WorkListItem(new URL("https://www.example.com/"), "tcs", "HR", "Hyderabad", "work was great", date)
];
var collegeList = [
    new CollegeListItem(new URL("https://www.example.com/"), "JntuhCes", "Medak", "An excelent College", new Date(2015), new Date(2019))
];
var placeList = [
    new PlacesListItem(new URL("https://wwww.example.com"), "hyderabad", date, false, date)
];
/*let x = new WorkAndEducation(workList,"Mean Stack Developer",collegeList);
console.log(x.getWorkList())
let z = x.getWorkList();
console.log()
console.log(x.getCollegeList()[0].getCollegePic())*/
var about = new About(new WorkAndEducation(workList, "NA", collegeList), new PlacesYouHaveLived(placeList), new ContactInfo(phonenumbers, emails), new BasicInfo(date, "male", interested.women, languages, "hindhu"), new FamilyAndRelationShip("single", familyMemberList), ["appu", "ramu"]);
console.log(about.getBasicInfo().getDob());
console.log(about.getFamilyAndRelationships().getFamilyMembers()[0].getMemberName());
//# sourceMappingURL=facebookProfile.js.map