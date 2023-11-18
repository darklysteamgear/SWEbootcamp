
//Class containing all functions necissary to complete the 5.2 assignment
//I wanted to practice with classes in javascript as well.
class HTMLFunctions {
    constructor(){
        this.pOne = [];
        this.pTwo =[];
        this.pThree = [];
        this.pFour = [];
        this.pFive = [];
        this.pSix = [];
        this.pSeven = [];
        this.pEight = [];
        this.pNine = [];
        this.pTen =[];
        this.pEleven = [];
        this.pTwelve = [];
        this.get_no_queryselector();
        this.get_queryselector();
        this.get_items_second();
        this.get_ol_items();
        //this.set_inner_text("Hello");
        this.add_class_to_div("main");
        this.remove_class_from_div("main");
        this.create_element_with_text("li","four");
        this.set_lis_inside_ol_to_green();
        this.remove_footer();
    }
    //prints all of the elements of the HTML collection
    print_items_in__element(element){
        for (let item in element){
            console.log(`Element Name: ${item}`);
        }
    }

    //part 1
    get_no_queryselector() {
        this.pOne = document.getElementById('container');
        return this.pOne;
    }
    //part 2
    get_queryselector() {
        this.pTwo = document.querySelector('#container');
        return this.pTwo;
    }
    //part 3
    get_items_second() {
        this.pThree = document.getElementsByClassName('second');
        return this.pThree;
    }
    //part 4
    get_ol_items() {
        this.pFour = document.getElementsByClassName('ol .third');
        return this.pFour;
    }
    //part 5
    set_inner_text(text) {
        this.pFive = document.querySelector('#container');
        this.pFive.innerText = text;
        return this.pFive;
    }
    //part 6
    add_class_to_div(classname) {
        this.pSix = document.querySelector('.footer');
        this.pSix.classList.add(classname);
        return this.pSix;
    }
    //part 7
    remove_class_from_div(classname) {
        this.pSeven = document.querySelector('.footer');
        this.pSeven.classList.remove(classname);
        return this.pSeven;
    }
    //part 8,9 and 10
    create_element_with_text(type,text) {
        this.pEight = document.createElement(type);
        this.pEight.innerText = text;
        this.pNine = this.pEight.getElementsByClassName(type);
        let list = document.querySelector("ul");
        this.pTen = list.appendChild(this.pEight);
        return this.pTen;
    }
    //part 11
    set_lis_inside_ol_to_green(){
        this.pEleven = document.querySelectorAll("ol li");
        for (let i = 0; i < this.pEleven.length; i++)
            this.pEleven[i].style.backgroundColor = "green";
    }
    //part 12
    remove_footer(){
        this.pTwelve = document.querySelector(".footer");
        this.pTwelve.remove();
    }
};
//Put it all together
let funct = new HTMLFunctions();
let fun = '';
let strName = '';
for (var varname in funct){
    fun = funct[varname];
    strName = varname.slice(1);
    strName = strName.toUpperCase();
    console.log(`HERE'S PART ${strName}: ${fun}`);
    funct.print_items_in__element(fun);
    console.log("\n");
}