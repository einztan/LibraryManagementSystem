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



// TODO: Form functionalities




// OPTIMIZE: Clear all input.
function ResetForm(){

    // STEP-1
    let BookTitle = form.Title.value;
    let Label     = form.Label.value;
    let cn1       = form.cn1.value;  
    let cn2       = form.cn2.value;
    let cn3       = form.cn3.value; 
    let cn4       = form.cn5.value;     
    let cn5       = form.cn5.value;  
    let AccessNo  = form.AccsNo.value;
    let Quantity  = form.Quantity.value;
    let DateBorrowed = form.DateBorrowed.value;
    let DateOfReturn = form.DateOfReturn.value;


    // STEP-2
    let FirstName = form.FirstName.value;
    let LastName  = form.LastName.value;
    let Course    = form.Course.value;
    let Year      = form.Year.value;
    let LibraryID   = form.LibIDNo.value;

    if((BookTitle !== "") && (Label !== "") && (cn1 !== "") && (cn2 !== "") && (cn3 !== "") && (cn4 !== "") && (cn5 !== "") && (AccessNo !== "") && (Quantity !== "") && (DateBorrowed !== "") && (DateOfReturn !== "") && (FirstName !== "") && (LastName !== "") && (Course !== "") && (Year !== "") && (LibraryID !== "")){
        console.log("inputs cleared.");

        document.querySelectorAll('.InputsToClear').forEach( inputs => {
            inputs.value="";
        });

        document.getElementById("CloseFormBTN").style.display="block";
        document.getElementById("SubmitBTN").innerHTML=`<span> NEXT </span>`;

        document.getElementById("Step_2_BAR").style.backgroundColor="grey";
        document.getElementById("Step_2_BAR").style.width="grey";
        document.getElementById("Step_2_CIRCLE").style.backgroundColor="grey";

        document.getElementById("Step_3_BAR").style.backgroundColor="grey";
        document.getElementById("Step_3_BAR").style.width="grey";
        document.getElementById("Step_3_CIRCLE").style.backgroundColor="grey";

        return;
    }  
} 



let form = document.getElementById("form");
let ParentListContainerForStudents = document.getElementById("ParentListContainerForStudents");



// OPTIMIZE: Display all students.

function DisplayAllStudents(){

    ParentListContainerForStudents.innerHTML="";

    let Students = JSON.parse( localStorage.getItem('Borrowed') )||[];
    Students.forEach( (Student, index) => {
        
        if( (Student.FirstName !== "") && (Student.LastName !== "") ){

            let list = document.createElement('div');
            list.innerHTML=`
                <div class="Info-Box"> 
                        <img src="Assets/studentIconBlack.png" alt="..."> 
                </div>
                <div class="Info-Box">
                        <span>
                            ${ Student.FName + " " + Student.LName }
                        </span>
                </div>
                <div class="Info-Box">
                        <span>
                                ${Student.Course + "-" + Student.Year }
                        </span>
                </div>
                <div class="Info-Box">
                        <span>
                                ${Student.LibID}
                        </span>
                </div>
                <div class="Info-Box">
                        <ul>
                                <li> <span> ${Student.Label} </span> </li>
                                <li> <span> ${Student.BookTitle} </span> </li>
                                <li> <span> ${Student.CallNo1 + "-" + Student.CallNo2 + "-" + Student.CallNo3 + "-" + Student.CallNo4 + "-" + Student.CallNo5} </span> </li>
                                <li> <span> ${ "#" + Student.AccessNo } </span> </li>
                                <li> <span> ${ "x" +  Student.Quantity} </span> </li>
                        </ul>
                </div>
                <div class="Info-Box">
                        <button type="button" data-index="${index}"> <img src="Assets/returnIconWhite.png" alt="..."> </button>
                </div>
            `;
            list.classList.add('new-list-for-students');
            ParentListContainerForStudents.append( list );
        }
    });
}
DisplayAllStudents();


// OPTIMIZE: form submission. 

let Click_4 = 0;
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    
    // STEP-1
    let BookTitle = form.Title.value;
    let Label     = form.Label.value;
    let cn1       = form.cn1.value;  
    let cn2       = form.cn2.value;
    let cn3       = form.cn3.value; 
    let cn4       = form.cn5.value;     
    let cn5       = form.cn5.value;  
    let AccessNo  = form.AccsNo.value;
    let Quantity  = form.Quantity.value;
    let DateBorrowed = form.DateBorrowed.value;
    let DateOfReturn = form.DateOfReturn.value;



    let Borrowed = {
        BookTitle: form.Title.value ,
        DateBorrowed: form.DateBorrowed.value,
        DateOfReturn: form.DateOfReturn.value,
        AccessNo: form.AccsNo.value,
        Quantity: form.Quantity.value,
        CallNo1: form.cn1.value,
        CallNo2: form.cn2.value,
        CallNo3: form.cn3.value,
        CallNo4: form.cn4.value,
        CallNo5: form.cn5.value,
        FName: form.FirstName.value,
        LName: form.LastName.value,
        LibID : form.LibIDNo.value,
        Course: form.Course.value,
        Year: form.Year.value,
        Label: form.Label.value
    };


    // STEP 1 VALIDATION
    if( BookTitle === "" ){
        alert("Please add a Title.");
        return;
    }
    if( Label === "" ){
        alert("Please add a Label.");
        return;
    }
    if( AccessNo === "" ){
        alert("Set to 'nn' if no Access No.");
        return;
    }
    if((cn1 === "") || (cn2 === "") || (cn3 === "") || (cn4 === "") || (cn5 === "")){
        alert("Set to 'nn' if no Call No.");
        return;
    }
    if((Quantity > 1) || (Quantity === 0) || (Quantity === "")){
        alert("minimum borrowing of books is 1.");
        return;
    }
    if((DateBorrowed === "") || (DateOfReturn === "")){
        alert("Please add a Date.");
        return;
    }
    if( DateOfReturn < DateBorrowed ){
        alert("Return Date cannot be lower than Borrowed Date.");
        return;
    }
    if( DateBorrowed > DateOfReturn ){
        alert("Return Date cannot be higher than Borrowed Date.");
        return;
    }



    let Count = Click_4 += 1;
    if( Count == 1 ){
        console.log(Count + " Step 2");


        document.getElementById("Step_1_FORM").style.display="none";
        document.getElementById("Step_2_FORM").style.display="flex"; 

         
        document.getElementById("Step_2_BAR").style.backgroundColor="rgb(20, 159, 90)";
        document.getElementById("Step_2_BAR").style.width="170px";
        document.getElementById("Step_2_CIRCLE").style.backgroundColor="rgb(20, 159, 90)";

    }
    if( Count == 2 ){
        console.log(Count + " Step 3");

        // STEP-2 VALIDATION
        let FirstName = form.FirstName.value;
        let LastName  = form.LastName.value;
        let Course    = form.Course.value;
        let Year      = form.Year.value;
        let LibraryID = form.LibIDNo.value;

        let ParsedItem = JSON.parse(localStorage.getItem('Borrowed')) || [];
        let IDexists = ParsedItem.find( Student => Student.LibID === LibraryID);
        
        if((FirstName === "") || (LastName === "")){
            alert("Name is required.");
            return;
        }
        if((Course === "") && (Year === "")){
            alert("Course and Year is required.");
            return;
        }
        if(LibraryID === ""){
            alert("Library ID No is required.");
            return;
        }
        if(IDexists){
            alert("Library ID already exists!.");
            Count = Click_4 -= 1;
            return;
        }

  
        if((FirstName !== "") && (LastName !== "") && (Course !== "") && (Year !== "") && (!IDexists)){
            document.getElementById("Step_2_FORM").style.display="none";
            document.getElementById("Step_3_FORM").style.display="flex";

            document.getElementById("Step_3_BAR").style.backgroundColor="rgb(20, 159, 90)";
            document.getElementById("Step_3_BAR").style.width="170px";
            document.getElementById("Step_3_CIRCLE").style.backgroundColor="rgb(20, 159, 90)";

            document.getElementById("DateTEXT").innerText=      DateBorrowed + " " + DateOfReturn;
            document.getElementById("LabelTEXT").innerText=     Label;
            document.getElementById("BookTitleTEXT").innerText= BookTitle;
            document.getElementById("CallNoTEXT").innerText=    cn1+"-"+cn2+"-"+cn3+"-"+cn4+"-"+cn5;
            document.getElementById("AccessNoTEXT").innerText=  "#" + AccessNo;
            document.getElementById("QuantityTEXT").innerText=  "x" + Quantity;
            document.getElementById("NameTEXT").innerText=      FirstName + " " + LastName;
            document.getElementById("CourseTEXT").innerText=    Course + "-" + Year;
            document.getElementById("LibIDNoTEXT").innerText=   LibraryID;

            document.getElementById("CloseFormBTN").style.display="none";
            document.getElementById("SubmitBTN").innerHTML=`<span> SUBMIT </span>`;
        }
    }
    if( Count == 3 ){
        console.log(Count + " Reset");
        Count = Click_4 = 0;

        let GetObject = localStorage.getItem('Borrowed');
        let ParsedObject = JSON.parse(GetObject) || [];
        alert( "student has been added!" );
        ParsedObject.push(Borrowed);
        localStorage.setItem('Borrowed', JSON.stringify(ParsedObject) ) || [];


        document.getElementById("Step_1_FORM").style.display="flex";
        document.getElementById("Step_2_FORM").style.display="none";
        document.getElementById("Step_3_FORM").style.display="none";

        ResetForm();
    }
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