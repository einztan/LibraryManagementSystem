// TODO: Password Visibility function. 

let Click = 0;
function PasswordVisibility(){
    let Count = Click += 1;
    
    let DefaultState = "Assets/eyeDefaultIconBlack.png";
    let ClickedState = "Assets/eyeToggledIconBlack.png";

    if( Count == 1 ){

        document.getElementById("DefaulIcon").src   = ClickedState;
        document.getElementById("InputHolder").type ="text";
    }
    if( Count == 2 ){
        Count = Click = 0;

        document.getElementById("DefaulIcon").src   = DefaultState;
        document.getElementById("InputHolder").type ="password";
    }
}
document.getElementById("PasswordVisibilityBTN").addEventListener('click',()=>{
    PasswordVisibility();
});




// TODO: Get login details.

function LoggedInAs( User, email, LogState, role, Profile ){
    // for clearing current logged user
    localStorage.removeItem('Logged');


    // create new logged user
    let Account = {
        Name: User,
        Email: email,
        Log: LogState,
        Role: role,
        Image: Profile
    };
    
    console.log( "logged in as: " + Account.Name + "\n" + Account.Email + "\n" + Account.Log + "\n" + Account.Role + "\n" + Account.Image );

    let GetObject = localStorage.getItem('Logged');
    let ParsedObject = JSON.parse(GetObject) || [];

    ParsedObject.push(Account);
    localStorage.setItem('Logged', JSON.stringify(ParsedObject) ) || [];

    console.log( "Item Added to Application." );

    window.location.href="dashboard.html";   
}



// TODO: Login Prompt.

let form = document.getElementById("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let ParsedItem = JSON.parse(localStorage.getItem('LIBUsers')) || [];

    let ValidPrompt = ParsedItem.find( user => user.Email === form.email.value && user.Pass === form.pass.value);

    let Invalid_Prompt_1 = ParsedItem.find( user => user.Email === form.email.value && user.Pass !== form.pass.value );
    let Invalid_Prompt_2 = ParsedItem.find( user => user.Email !== form.email.value && user.Pass === form.pass.value );


    if( ValidPrompt ){
        let Logged = ValidPrompt.LoggedIn = true;

        document.getElementById("AlertForEmail").style.display="none";
        document.getElementById("AlertForPassword").style.display="none";
        document.querySelectorAll('.WarningText').forEach( warning =>{
            warning.innerText="no message.";
        });

        console.log( "Logged in: " + ValidPrompt.Email + " isLogged: " + Logged );


        let FullName = ValidPrompt.FirstName + " " + ValidPrompt.LastName;
        let Email = ValidPrompt.Email;
        let Role = ValidPrompt.Role;
        let Profile = ValidPrompt.Image;

        LoggedInAs( FullName, Email, Logged, Role, Profile );

        return;
    }

    if( Invalid_Prompt_1 ){
        document.getElementById("AlertForPassword").style.display="flex";
        document.getElementById("AlertForEmail").style.display="none";
        document.getElementById("WarningTextPass").innerText="Password invalid";

        console.log( "Password Invalid" );

        return;
    }

    if( Invalid_Prompt_2 ){
        document.getElementById("AlertForEmail").style.display="flex";
        document.getElementById("WarningTextEmail").innerText="Email invalid.";
        document.getElementById("AlertForPassword").style.display="none";

        console.log( "Email Invalid" );

        return;
    }
});