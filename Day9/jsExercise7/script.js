/*
    Create a Password Generator Program capable of generating a password which contains atleast one lowercase, one uppercase adn one 
    special case character. Create a password class to achieve the same.
*/

class Password{
    constructor(){
        console.log("Password Generator Initiated !");
        this.passWord = "";
    }

    generatePass(len){
        
        // List of values to be used in passwords
        let alpha1 = "abcdefghijklmnopqrstuvwxyz";
        let numericalVal = "01234546789";
        let symbols = "~`!@#$%^&*()_+-=:',.<>/?|[]{}";

        if(len < 3){
            console.log("Your password must contains more than 5 characters !");
            return;
        }

        else{
            let i = 0;
            while(i < len){
                this.passWord += alpha1[Math.floor(Math.random(alpha1.lenght) * alpha1.length)];
                this.passWord += numericalVal[Math.floor(Math.random(alpha1.lenght) * numericalVal.length)];
                this.passWord += symbols[Math.floor(Math.random(alpha1.lenght) * symbols.length)];

                i += 3;
            }
            this.passWord = this.passWord.substring(0,len);
            return this.passWord;
        }
    }
}

let obj1 = new Password();
console.log(obj1.generatePass(9));