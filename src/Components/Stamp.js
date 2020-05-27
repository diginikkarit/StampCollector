class Stamp {
    constructor(id,name,yearPublished,isStamped,imgUrl,country,price){
        this.id = id;
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

    StampToConsole(){
        let msg =  ""
        msg += "Stamp to Console :"+this.name
        msg += "id : "+this.id
        msg += " price:"+this.price
        msg += " yearPublished:"+this.yearPublished
        msg += " country:"+this.country
        msg += " isStamped:"+this.isStamped
        console.log(msg)
    }
}

//note. No default to export.
export {Stamp}