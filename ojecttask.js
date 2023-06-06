class Yuvarani{
      persondetails(){
        const prompt=require("prompt-sync")();
        var name=prompt("Enter your name");
        var age=prompt("Enter your age");
        console.log(name+" "+age);
    }
    Fatherdetails(){
        const prompt=require("prompt-sync")();
        var name=prompt("Enter your father name");
        var age=prompt("Enter your father age");
        console.log(name+" "+age);
        
    }
    Motherdetails(){
        const prompt=require("prompt-sync")();
        var name=prompt("Enter your mother name");
        var age=prompt("Enter your mother age");
        console.log(name+" "+age);
    }

}
const x=new Yuvarani();
x. persondetails();
x.Fatherdetails();
x.Motherdetails();