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
    let ParsedItem = JSON.parse(localStorage.getItem('Logged')) || [];
    let USER = ParsedItem.find( user => user.Role);

    if(USER.Role === "Admin")
    {
        window.location.href="usermanagement.html";
    }
    else
    {
        window.location.href="userprofile.html";
    }
});


// TODO: change password form.
function changePassword(getNewPassword)
{
    //call localStorage
    let CURRENT = JSON.parse( localStorage.getItem('Logged') )||[];
    let NEW = JSON.parse( localStorage.getItem('New-Password') )||[];

    //perform default user image replacement.
    let DATA = JSON.parse( localStorage.getItem('LIBUsers') )||[];
    let findData = DATA.find(user => user.Email === CURRENT[0].Email);
    if(!findData)
    {
        console.log("Data not found");
    }
    else
    {
        console.log("FOUND EMAIL: " + findData.Email + "name: " + findData.FirstName + " " + findData.LastName);

        //replace original data.
        findData.Pass = NEW[0].Pass;
        localStorage.setItem('LIBUsers', JSON.stringify(DATA));
    }

    //clear stored image.
    localStorage.removeItem('New-Password');

    //reload.
    window.location.reload();

    //update user.
    alert("Password has been changed!");
}

let form_2 = document.getElementById("form_2");
form_2.addEventListener('submit',(event)=>{
    event.preventDefault();

    let VERIFY = form_2.Verif.value;
    let PASS = form_2.pass.value;
    let CPASS = form_2.cpass.value;

    if( VERIFY === "" )
    {
        alert("Please verify this account.");
        return;
    }
    if( PASS.length < 8 )
    {
        alert("Password must atleast contain 8-12 characters.");
        return;
    }
    if( CPASS !== PASS )
    {
        alert("Password invalid");
        return;
    }

    if((VERIFY !== "") && (CPASS === PASS))
    {
        let Password ={
            Pass : CPASS
        };

        //create localStorage
        let GetObject = localStorage.getItem('New-Password');
        let ParsedObject = JSON.parse(GetObject) || [];
        ParsedObject.push(Password);
        localStorage.setItem('New-Password', JSON.stringify(ParsedObject) ) || [];
        
        changePassword(CPASS);
    }
});

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

        VerifBTN.disabled=true;

        let AuthenthicatedCode =  Alphabet[R1] + Numerals[R2] + Randomizer[R3];
        let Verify = document.getElementById("VerifInput");
        Verify.value = AuthenthicatedCode;

        console.log(AuthenthicatedCode);
    }  
}
let Verify = document.getElementById("SendVerificationBTN")
Verify.addEventListener('click',()=>{ GenerateVerificationCode(); });

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


// OPTIMIZE: open form 2. (for change password.)
document.getElementById("changePassBtn").addEventListener('click',()=>{
    document.getElementById("FORM_2").style.display="flex";
    document.getElementById("PROFILE_CONTAINER").style.opacity="0%";
});
// OPTIMIZE: CLOSE FORM 1.
document.getElementById("CloseFormBTN_2").addEventListener('click',()=>{
    document.getElementById("FORM_2").style.display="none";
    document.getElementById("PROFILE_CONTAINER").style.opacity="100%";
    document.querySelector('input[type="file"]').value=""; 
});


// TODO: change image form.
function getIMAGE()
{
    //call localStorage
    let CURRENT = JSON.parse( localStorage.getItem('Logged') )||[];
    let NEW = JSON.parse( localStorage.getItem('New-Image') )||[];

    //reassign new value to current value.
    CURRENT[0].Image = NEW[0].Image;
    localStorage.setItem('Logged', JSON.stringify(CURRENT));
    console.log("image changed");

    //perform default user image replacement.
    let DATA = JSON.parse( localStorage.getItem('LIBUsers') )||[];
    let findData = DATA.find(user => user.Email === CURRENT[0].Email);
    if(!findData)
    {
        console.log("Data not found");
    }
    else
    {
        console.log("FOUND EMAIL: " + findData.Email + "name: " + findData.FirstName + " " + findData.LastName);

        //replace original data.
        findData.Image = NEW[0].Image;
        localStorage.setItem('LIBUsers', JSON.stringify(DATA));
    }

    //clear stored image.
    localStorage.removeItem('New-Image');

    //reload.
    window.location.reload();

    //update user.
    alert("Profile Picture has been updated!");
}

let form_1 = document.getElementById("form_1");
form_1.addEventListener('submit',(event)=>{
    event.preventDefault();

    let reader = new FileReader(); 
    reader.onload = function(e){ 
        let Profile = {
            Image : e.target.result
        };
        //create localStorage
        let GetObject = localStorage.getItem('New-Image');
        let ParsedObject = JSON.parse(GetObject) || [];
        ParsedObject.push(Profile);
        localStorage.setItem('New-Image', JSON.stringify(ParsedObject) ) || [];
        
        getIMAGE();
    } 
    let fileInput = form_1.querySelector('input[type="file"]'); 
    if( fileInput.files.length > 0 ){ 
       reader.readAsDataURL(fileInput.files[0]); 
    }
    else{
        alert("Please add an image.");
    }
});
//OPTIMIZE: open form 1. (for change image.)
document.getElementById("ChangeImgBTN").addEventListener('click', ()=>{
    document.getElementById("FORM_1").style.display="flex";
    document.getElementById("PROFILE_CONTAINER").style.opacity="0%";
});
// OPTIMIZE: CLOSE FORM 1.
document.getElementById("CloseFormBTN_1").addEventListener('click',()=>{
    document.getElementById("FORM_1").style.display="none";
    document.getElementById("PROFILE_CONTAINER").style.opacity="100%";
    document.querySelector('input[type="file"]').value=""; 
});


// TODO: Display user profile
document.addEventListener('DOMContentLoaded',()=>{

    //TODO: Display Profile image.
    let PROFILE = document.getElementById("DisplayUserPROFILE");
    let LoggedUser = JSON.parse( localStorage.getItem('Logged') ) || [];
    let user = LoggedUser.find(user => user.Image);
    PROFILE.src=user.Image;

    document.getElementById("DisplayNAME").innerText=user.Name;
    document.getElementById("DisplayEMAIL").innerText=user.Email;
    document.getElementById("DisplayROLE").innerText=user.Role;
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