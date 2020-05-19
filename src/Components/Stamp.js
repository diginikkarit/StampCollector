class Stamp {
    constructor(name,yearPublished,isStamped,imgUrl,country,price){
        this.name = name;
        this.yearPublished = yearPublished;
        this.isStamped = isStamped; 
        this.imageUrl = imgUrl;
        this.country = country;
        this.price = price;
    }

    GetPriceString(){
        return parseFloat(this.price).toFixed(2)
    }
    
}


//note. No default to export.
export {Stamp}