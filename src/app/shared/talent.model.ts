export class Talent {
  
  constructor(
		      public talentid: string, 
  			  public firstname: string,
  			  public lastname: string,
  			  public email: string,
          public phonenumber: string,
  			  public description: string,
  			  public usertype: string,
  			  public shift: string,
  			  public status: string,
  			  public jobtitle: string,
					public sectors: any,
					public experience: string,
					public languages: any,
					public location : string,
					public distance : string,
					public profileimage : string
  			) {    
  }
}