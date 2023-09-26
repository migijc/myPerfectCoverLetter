 class User{
    constructor(name, lastName, email, phoneNnumber){
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phoneNnumber = phoneNnumber;
        this.location = null;
        this.coverLetters = [];
        this.userKey= new Date().getTime();
    }

    
}

 class UserLocation{
    constructor(city, postalCode, state , country){
        this.city = city;
        this.postalCode = postalCode;
        this.state = state;
        this.country = country;
    }
}

 class coverLetters{
    constructor(jobRole, hiringManager, company, address, paragraphs, additionalInfo){
        this.jobRole = jobRole;
        this.hiringManager = hiringManager;
        this.company= company;
        this.address = null;
        this.paragraphs = paragraphs;
        this.additionalInfo = additionalInfo;
    }
}

export {User, UserLocation, coverLetters}