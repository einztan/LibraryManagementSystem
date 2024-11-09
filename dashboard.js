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



// TODO: Count Inventory, Borrwoed, returned functionalities.

function DisplayCount(){
    console.log("Hello");


    // OPTIMIZE: INVENTORY COUNT. 
    let INVENTORY = [
        {
            Title: "Food Delivery Application: Application Based System in Forbes College.",
            Published: "10/20/2016",
            Display: "default",
        },
        {
            Title: "Food Delivery Application: Application Based System in Forbes College.",
            Published: "10/20/2016",
            Display: "default",
        },
        {
            Title: "Food Delivery Application: Application Based System in Forbes College.",
            Published: "10/20/2016",
            Display: "default",
        },
    ];
    let result1 = 1;
    for( let i=0; i < INVENTORY.length; i++ ){
        document.getElementById("InventoryCountTXT").innerText= result1 + i;
    }



    // OPTIMIZE: BORROWED COUNT. 
    let BORROWED = [
        {
            Name: "Francisco Alvarencho",
            Course: "BSIT-2",
            LibID: "00123",
            DateBorrowed: "11/24/2024",
            DateOfReturn: "11/25/2024",
            Returned: false
        },
        {
            Name: "Alberto Juaqim",
            Course: "BSIT-2",
            LibID: "00123",
            DateBorrowed: "11/24/2024",
            DateOfReturn: "11/25/2024",
            Returned: false
        },
    ];
    let result2 = 1;
    for( let i=0; i < BORROWED.length; i++ ){
        document.getElementById("BorrowedCountTXT").innerText= result2 + i;
    }



    // OPTIMIZE: RETURNED COUNT. 
    let RETURNED = [
        {
            Name: "Alberto Juaqim",
            Course: "BSIT-2",
            LibID: "00123",
            DateBorrowed: "11/24/2024",
            DateOfReturn: "11/25/2024",
            DateReturned: "11/28/2024",
            Returned: true,
        },
    ];
    let result3 = 1;
    for( let i=0; i < RETURNED.length; i++ ){
        document.getElementById("ReturnedCountTXT").innerText= result3 + i;
    }

}
DisplayCount();




// TODO: Display Returning Books. 

function DisplayScheduledReturningBooks(){

    let SCHEDULE = [
        {
            Name: "Francisco Alvarencho",
            Course: "BSIT-2",
            LibID: "00123",
            DateBorrowed: "11/24/2024",
            DateOfReturn: "11/25/2024",
            Returned: false
        },
        {
            Name: "Alberto Juaqim",
            Course: "BSIT-2",
            LibID: "00123",
            DateBorrowed: "11/24/2024",
            DateOfReturn: "11/25/2024",
            Returned: false
        },
    ];
    
    let ParentContainer = document.getElementById("ParentContainerForSchedule");
    ParentContainer.innerHTML="";

    if( ParentContainer.innerHTML==="" ){

        SCHEDULE.forEach( schedule => {

            let list = document.createElement('div');
            list.innerHTML=`
                <div class="Info-Box"> 
                    <span> ${ schedule.Name }        </span> 
                </div>
                <div class="Info-Box"> 
                    <span> ${ schedule.Course }      </span> 
                </div>
                <div class="Info-Box"> 
                    <span> ${ schedule.LibID }       </span> 
                </div>
                <div class="Info-Box"> 
                    <span> ${ schedule.DateOfReturn }</span> 
                </div>
            `;
            list.classList.add('new-list-for-schedule');
            ParentContainer.appendChild( list );
        });
    }

}
DisplayScheduledReturningBooks();





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