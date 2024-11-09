// TODO: Design && Navigation functionalities.


// OPTIMIZE : MOBILE 
function DisabledStateMobileNavBTN(){
    document.getElementById("MobileNavigationBTN").disabled=true;

    console.log( "Button disabled" );
}
function EnabledStateMobileNavBTN(){
    document.getElementById("MobileNavigationBTN").disabled=false;

    console.log( "Button enabled" );
}

let Click_1 = 0;
function ClickedStateMobileNavigation(){
    let Count = Click_1 += 1;

    if( Count == 1 ){
        console.log( "1" );

        DisabledStateMobileNavBTN();
        document.getElementById("MobileNavigationContainer").style.display="flex";

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
               EnabledStateMobileNavBTN();
            }
        },1000);
    }
    if( Count == 2 ){
        Count = Click_1 = 0;
        console.log( "2" );

        DisabledStateMobileNavBTN();
        document.getElementById("MobileNavigationContainer").style.display="none";

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
               EnabledStateMobileNavBTN();
            }
        },1000); 
    }

}
document.getElementById("MobileNavigationBTN").addEventListener('click',()=>{
    ClickedStateMobileNavigation();
});



// OPTIMIZE: TABLET

function DisabledStateTabletNavBTN(){
    document.getElementById("TabletNavigationBTN").disabled=true;

    console.log( "Button disabled" );
}
function EnabledStateTabletNavBTN(){
    document.getElementById("TabletNavigationBTN").disabled=false;

    console.log( "Button enabled" );
}

let Click_2 = 0;
function ClickedStateTabletNavigation(){
    let Count = Click_2 += 1;

    if( Count == 1 ){
        console.log( "1" );

        DisabledStateTabletNavBTN();
        document.getElementById("TabletNavigationContainer").style.display="flex";

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
               EnabledStateTabletNavBTN();
            }
        },1000);
    }
    if( Count == 2 ){
        Count = Click_2 = 0;
        console.log( "2" );

        DisabledStateTabletNavBTN();
        document.getElementById("TabletNavigationContainer").style.display="none";

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
               EnabledStateTabletNavBTN();
            }
        },1000); 
    }

}
document.getElementById("TabletNavigationBTN").addEventListener('click',()=>{
    ClickedStateTabletNavigation();
});




// OPTIMIZE: DESKTOP 


function DisabledStateDesktopNavBTN(){
    document.getElementById("DesktopNavigationBTN").disabled=true;

    console.log( "Button disabled" );
}
function EnabledStateDesktopNavBTN(){
    document.getElementById("DesktopNavigationBTN").disabled=false;

    console.log( "Button enabled" );
}

function CollapsedStateDesktopNavigation(){

    let NavTexts = document.querySelectorAll('.Desktop-Navigation-Text');
    NavTexts.forEach( texts =>{
        texts.style.display="none";
    });


    let NavButtons = document.querySelectorAll(".Desktop-Navigation-Btn");
    NavButtons.forEach( buttons => {
        buttons.style.transition="0.5s ease-in-out";
        buttons.style.width="50px";

        buttons.style.justifyContent="center";
    });


    let NavigationImages = document.querySelectorAll(".Desktop-Navigation-Image");
    NavigationImages.forEach( images => {
        images.style.transition="0.5s ease-in-out";
        images.style.alignSelf="center";

        images.style.marginLeft="0px";
    });


    document.getElementById("DesktopSidePanel").style.transition="0.5s ease-in-out";
    document.getElementById("DesktopSidePanel").style.width="85px";


    document.getElementById("DesktopNavigationBTN").style.transition="0.5s ease-in-out";
    document.getElementById("DesktopNavigationBTN").style.marginLeft="25px";

}

function DefaultStateDesktopNavigation(){
    
    let NavTexts = document.querySelectorAll('.Desktop-Navigation-Text');
    NavTexts.forEach( texts =>{
        texts.style.display="block";
    });


    let NavButtons = document.querySelectorAll(".Desktop-Navigation-Btn");
    NavButtons.forEach( buttons => {
        buttons.style.transition="0.5s ease-in-out";
        buttons.style.width="200px";

        buttons.style.justifyContent="start";
    });


    let NavigationImages = document.querySelectorAll(".Desktop-Navigation-Image");
    NavigationImages.forEach( images => {
        images.style.transition="0.5s ease-in-out";
        images.style.alignSelf="center";

        images.style.marginLeft="0px";
    });


    document.getElementById("DesktopSidePanel").style.transition="0.5s ease-in-out";
    document.getElementById("DesktopSidePanel").style.width="250px";


    document.getElementById("DesktopNavigationBTN").style.transition="0.5s ease-in-out";
    document.getElementById("DesktopNavigationBTN").style.marginLeft="42px";

}

let Click_3 = 0;
function ClickedStateDesktopNavigation(){
    let Count = Click_3 += 1;

    if( Count == 1 ){
        console.log( "1" );

        DisabledStateDesktopNavBTN();
        CollapsedStateDesktopNavigation();

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
        
               EnabledStateDesktopNavBTN();
            }
        },1000); 
        
    }
    if( Count == 2 ){
        Count = Click_3 = 0;
        console.log( "2" );

        DisabledStateDesktopNavBTN();
        DefaultStateDesktopNavigation();

        let Timer;  
        let sec = 0.5;  
        Timer = setInterval(()=>{  
            sec--;  
            if(sec <= 0){  
               clearInterval(Timer); 
                
               EnabledStateDesktopNavBTN();
            }
        },1000); 
        
    }

}

document.getElementById("DesktopNavigationBTN").addEventListener('click',()=>{
    ClickedStateDesktopNavigation();
});





// OPTIMIZE: SCREEN SIZE. 

function HideMobileNavigation(){
    console.log( "Mobile Hidden" );

    document.getElementById("MobileNavigationBTN").style.display="none";
    document.getElementById("MobileNavigationContainer").style.display="none";
}
function DisplayMobileNavigation(){
    console.log( "Mobile Displayed" );

    document.getElementById("MobileNavigationBTN").style.display="flex";
    document.getElementById("MobileNavigationContainer").style.display="none";
}



function HideTabletNavigation(){
    console.log( "Tablet Hidden" );

    document.getElementById("TabletNavigationBTN").style.display="none";
    document.getElementById("TabletNavigationContainer").style.display="none"
}
function DisplayTabletNavigation(){
    console.log( "Tablet Displayed" );

    document.getElementById("TabletNavigationBTN").style.display="flex";
    document.getElementById("TabletNavigationContainer").style.display="none";
}




function ScreenSize(){ 
    let w = window.innerWidth; 

    console.log( w );
    
    if( w < 500 ){
        DisplayMobileNavigation();

        HideTabletNavigation();
    }
    else if( w > 499 ){
        HideMobileNavigation();

        DisplayTabletNavigation();
    }
    else if( w > 991 ){
        HideMobileNavigation();

        HideTabletNavigation();
    }
} 
ScreenSize(); 
window.addEventListener('resize', ScreenSize);





// TODO: Form submission event. 

let form = document.getElementById("form");
let ParentListContainerForUsers = document.getElementById("ParentListContainerForUsers");


// OPTIMIZE: Search.


// display original list if no result
function RedisplayList(){

    console.log( "Search bar empty" );

    let ParentListContainer = document.getElementById("ParentListContainer");
    ParentListContainerForUsers.innerHTML="";

    let GetObject    = localStorage.getItem('LIBUsers');
    let ParsedObject = JSON.parse( GetObject )||[];
 
    ParsedObject.forEach((Users, index)=>{

    if( Users.FirstName !=="" && Users.LastName !== "" ){
            
        let list = document.createElement('div');
        list.innerHTML=`
                <div class="Info-Box">
                        <img src="${Users.Image}" alt="...">
                </div>
                <div class="Info-Box">
                        <span> ${Users.FirstName + " " + Users.LastName} </span>
                </div>
                <div class="Info-Box">
                        <span> ${Users.Email} </span>
                </div>
                <div class="Info-Box">
                        <span> ${Users.Role} </span>
                </div>
                <div class="Info-Box">
                        <button type="button" class="Remove-btn" data-index="${index}"> <img src="/Assets/trashIconWhite.png" alt="..."> </button>
                </div>
            `;
            list.classList.add('new-list-for-users');
            ParentListContainerForUsers.appendChild( list );
        }
    });
}


// display search results.
function DisplaySearchResults( SearchedValue ){
    console.log( "Single string search" );

    let StoredValue = SearchedValue;
    console.log("single: " + StoredValue);

    SearchedValue.forEach( (Users)=> {
        if( Users.FirstName !=="" && Users.LastName !== "" ){
            
            let list = document.createElement('div');
            list.innerHTML=`
                <div class="Info-Box">
                        <img src="${Users.Image}" alt="...">
                </div>
                <div class="Info-Box">
                        <span> ${Users.FirstName + " " + Users.LastName} </span>
                </div>
                <div class="Info-Box">
                        <span> ${Users.Email} </span>
                </div>
                <div class="Info-Box">
                        <span> ${Users.Role} </span>
                </div>
                <div class="Info-Box">
                      
                </div>
            `;
            list.classList.add('new-list-for-users');
            ParentListContainerForUsers.appendChild( list );
        }
    });
}


// PROCESS-1
function SearchingProcess(){

    ParentListContainerForUsers.innerHTML="";

    let Search = document.getElementById("SearchINPUT");
    let searchValue = Search.value.toLowerCase();

    let parseItem = JSON.parse(localStorage.getItem('LIBUsers')) || [];

    if( searchValue !== "" ){
            console.log( false );  

            let FilterItem = parseItem.filter((items)=>{
                return typeof items === 'object' && (
                    (items.FirstName && items.FirstName.toLowerCase().includes(searchValue)) ||
                    (items.lastname && items.LastName.toLowerCase().includes(searchValue)) ||
                    (items.Role && items.Role.toLowerCase().includes(searchValue)) ||
                    (items.Email && items.Email.toLowerCase().includes(searchValue))
                );
            });
            console.log( FilterItem );
            
            DisplaySearchResults( FilterItem );   
    }
    else{
        RedisplayList();
    }

}
document.getElementById("SearchINPUT").addEventListener('input',()=>{
    SearchingProcess();
});





// OPTIMIZE: Display in HTML.

function DisplayAllUsers(){
    ParentListContainerForUsers.innerHTML="";

    let user = JSON.parse( localStorage.getItem('LIBUsers') )||[];
    user.forEach( (User, index) => {
        
        if( (User.FirstName !== "") && (User.LastName !== "") ){

            let list = document.createElement('div');
            list.innerHTML=`
                <div class="Info-Box"> 
                        <img src="${User.Image}" alt="..."> 
                </div>
                <div class="Info-Box">
                    <span>
                            ${User.FirstName + " " + User.LastName}
                    </span>
                </div>
                <div class="Info-Box">
                    <span>
                            ${User.Email}
                    </span>
                </div>
                <div class="Info-Box">
                    <span>
                            ${User.Role}
                    </span>
                </div>
                <div class="Info-Box">
                        <button type="button" class="Remove-btn" data-index="${index}"> <img src="Assets/trashIconWhite.png" alt="..."> </button>
                </div>
            `;
            list.classList.add('new-list-for-users');
            ParentListContainerForUsers.append( list );
        }
    });
}
DisplayAllUsers();



// OPTIMIZE: Clear all input.
function ResetForm(){

    let EMAIL  = form.Email.value;
    let VERIFY = form.Verif.value;
    let ROLE   = form.Role.value;
    let PASS   = form.pass.value;
    let CPASS  = form.cpass.value;

    if( (EMAIL !== "") && (VERIFY !== "") && (ROLE !== "") && (PASS !== "") && (CPASS !== "") ){
        console.log("inputs cleared.");

        document.querySelectorAll('.InputsToClear').forEach( inputs => {
            inputs.value="";
        });

        let VerifBTN = document.getElementById("SendVerificationBTN");
        VerifBTN.disabled='false';
        VerifBTN.style.border="1px solid rgb(20, 159, 90)";
        VerifBTN.style.backgroundColor="rgb(20, 159, 90)";

        return;
    }  
} 




// OPTIMIZE: Generate verification. 
let Click_4 = 0;
function GenerateVerificationCode(){
    let Count = Click_4 += 1;
   
    
    let Alphabet   = ['A', 'b', 'c'];
    let Numerals   = [ 102, 120, 101 ];
    let Randomizer = [ "Xkl", "kYk", "oMn" ];

    let R1 = Math.floor( Math.random() * 3 ); 
    let R2 = Math.floor( Math.random() * 3 ); 
    let R3 = Math.floor( Math.random() * 3 ); 

    if( Count == 1 ){
        Count = Click_4 = 0;

        let VerifBTN = document.getElementById("SendVerificationBTN");

        VerifBTN.disabled='true';
        VerifBTN.style.border="1px solid grey";
        VerifBTN.style.backgroundColor="grey";

        let AuthenthicatedCode =  Alphabet[R1] + Numerals[R2] + Randomizer[R3];
        let Verify = document.getElementById("VerifInput");
        Verify.value = AuthenthicatedCode;

        console.log(AuthenthicatedCode);
    }
    
    
}
let Verify = document.getElementById("SendVerificationBTN")
    Verify.addEventListener('click',()=>{ GenerateVerificationCode(); });


// OPTIMIZE: form submission. 
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    // INVALIDATION
    
    // image is optional.
    // fn && ln is required. 
    let EMAIL  = form.Email.value;
    let VERIFY = form.Verif.value;
    let ROLE   = form.Role.value;
    let PASS   = form.pass.value;
    let CPASS  = form.cpass.value;


    if( !EMAIL.includes("@forbescollege.org") ){
        alert("Please enter a valid Organizational Email.");
        return;
    }
    if( VERIFY === "" ){
        alert("Please verify this account.");
        return;
    }
    if( (ROLE !== "Admin") && (ROLE !== "Librarian") && (ROLE !== "Student Assistant") ){
        alert("Please enter a valid Role (e.g, Admin, Librarian, Student Assistant)");
        return;
    }
    if( PASS.length < 8 ){
        alert("Password must atleast contain 8-12 characters.");
        return;
    }
    if( CPASS !== PASS ){
        alert("Password invalid");
        return;
    }


    // VALIDATION
    let GetObject = localStorage.getItem('LIBUsers');
    let ParsedObject = JSON.parse(GetObject) || [];
    let FindDuplicate = ParsedObject.find( user => user.Email === EMAIL );
    if( FindDuplicate ){
        alert("User Already Exists!");
    }
    else{
        let reader = new FileReader(); 
        reader.onload = function(e){ 
            
            let Account = {
                Image : e.target.result,
                FirstName: form.FName.value,
                LastName: form.LName.value,
                Email: form.Email.value,
                Pass: form.pass.value,
                Role: form.Role.value,
                Verified: true,
                LoggedIn: false
            };
            let GetObject = localStorage.getItem('LIBUsers');
            let ParsedObject = JSON.parse(GetObject) || [];
    
            ParsedObject.push(Account);
            localStorage.setItem('LIBUsers', JSON.stringify(ParsedObject) ) || [];
    
            alert("User has been added successfully!");
            ResetForm();
        } 
        let fileInput = form.querySelector("input[type='file']"); 
        if( fileInput.files.length > 0 ){ 
           reader.readAsDataURL(fileInput.files[0]); 
        }
        else{
            let Account = {
                    Image : "Assets/modelIMG.jpg",
                    FirstName: form.FName.value,
                    LastName: form.LName.value,
                    Email: form.Email.value,
                    Pass: form.pass.value,
                    Role: form.Role.value,
                    Verified: true,
                    LoggedIn: false
            };
            let GetObject = localStorage.getItem('LIBUsers');
            let ParsedObject = JSON.parse(GetObject) || [];
    
            ParsedObject.push(Account);
            localStorage.setItem('LIBUsers', JSON.stringify(ParsedObject) ) || [];  
            
            alert("User has been added successfully!");
            ResetForm();
        }
    }
});


// OPTIMIZE: Password Visibility function. 
let Click_5 = 0;
function TogglePassVisibility(){
    let Count = Click_5 += 1;

    let DefaultState = "Assets/eyeDefaultIconBlack.png";
    let ClickedState = "Assets/eyeToggledIconBlack.png";

    if( Count == 1 ){
        document.getElementById("PassDefaulIcon").src=ClickedState;
        document.getElementById("PassINPUT").type='text';
    }
    if( Count == 2 ){
        Count = Click_5 = 0;

        document.getElementById("PassDefaulIcon").src=DefaultState;
        document.getElementById("PassINPUT").type='password';
    }

}
document.getElementById("PassVisibilityBTN").addEventListener('click',()=>{
    TogglePassVisibility();
});

let Click_6 = 0;
function ToggleCPassVisibility(){
    let Count = Click_6 += 1;

    let DefaultState = "Assets/eyeDefaultIconBlack.png";
    let ClickedState = "Assets/eyeToggledIconBlack.png";

    if( Count == 1 ){
        document.getElementById("CPassDefaulIcon").src=ClickedState;
        document.getElementById("CPassINPUT").type='text';
    }
    if( Count == 2 ){
        Count = Click_6 = 0;

        document.getElementById("CPassDefaulIcon").src=DefaultState;
        document.getElementById("CPassINPUT").type='password';
    }

}
document.getElementById("CPassVisibilityBTN").addEventListener('click',()=>{
    ToggleCPassVisibility();
});




// OPTIMIZE: OPEN FORM 
document.getElementById("OpenFormBTN").addEventListener('click',()=>{
    document.getElementById("FORM").style.display="flex";
    document.getElementById("CONTENT_1_CONTAINER").style.display="none";
    document.getElementById("CONTENT_2_CONTAINER").style.height="100%";
});

// OPTIMIZE: CLOSE FORM
document.getElementById("CloseFormBTN").addEventListener('click',()=>{
    document.getElementById("FORM").style.display="none";
    document.getElementById("CONTENT_1_CONTAINER").style.display="flex";
    document.getElementById("CONTENT_1_CONTAINER").style.height="5%";
    document.getElementById("CONTENT_2_CONTAINER").style.height="95%";
}); 




// TODO: redirectory buttons.  

// LOGOUT
document.querySelectorAll('.LogoutBTN').forEach( logout => {
    logout.addEventListener('click',()=>{
        localStorage.removeItem('Logged');
        window.location.href="login.html";
    });
});


// DASHBOARD
document.querySelectorAll('.Dashboard-btn').forEach( DashboardBtn => {
    DashboardBtn.addEventListener('click',()=>{
        window.location.href="dashboard.html";
    });
});


// INVENTORY
document.querySelectorAll('.Inventory-btn').forEach( InventoryBtn => {
    InventoryBtn.addEventListener('click',()=>{
        window.location.href="inventory.html";
    });
});


// BORROWED
document.querySelectorAll('.Borrowed-btn').forEach( BorrowedBtn => {
    BorrowedBtn.addEventListener('click',()=>{
        window.location.href="borrowed.html";
    });
});


// RETURNED
document.querySelectorAll('.Returned-btn').forEach( ReturnedBtn => {
    ReturnedBtn.addEventListener('click',()=>{
        window.location.href="returned.html";
    });
});


// THESIS & CAPTSONE
document.querySelectorAll('.ThesisANDCapstone-btn').forEach( TCBtn => {
    TCBtn.addEventListener('click',()=>{
        window.location.href="thesisANDcapstone.html";
    });
});


// LOST BOOKS
document.querySelectorAll('.LostBooks-btn').forEach( LBBtn => {
    LBBtn.addEventListener('click',()=>{
        window.location.href="lostbooks.html";
    });
});


// ID GENERATION
document.querySelectorAll('.IDGeneration-btn').forEach( IDGBtn => {
    IDGBtn.addEventListener('click',()=>{
        window.location.href="IDGereration.html";
    });
});


// USER MANAGEMENT
document.getElementById("usermanagementBTN").addEventListener('click',()=>{
    window.location.href="usermanagement.html";
});






// TODO: Display current logged user.
function LoggedInAs(){
    
    let LoggedUser = JSON.parse( localStorage.getItem('Logged') ) || [];

    let findUser = LoggedUser.find(user => user.Email);

    console.log("logged as: \n" + findUser.Email);

    let LOGGED = findUser.Log;
    if( LOGGED ){
        let NAME = findUser.Name;
        let ROLE  = findUser.Role;
    
        document.getElementById("FullNameTEXT").innerText=NAME;
        document.getElementById("RoleTEXT").innerText=ROLE;
    }
    else{
        window.location.href="login.html";
    }
} 
LoggedInAs();