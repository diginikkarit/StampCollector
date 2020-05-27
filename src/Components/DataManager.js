//hold all the spamps
import {Stamp} from './Stamp'

var stampCollection = [];

var initDataManager = () => {

    console.log("Data Manager initialised..!")

    var stamp1 = new Stamp(
        1,
        "testiStamp 1",
        1892,
        false,
        'https://upload.wikimedia.org/wikipedia/commons/1/1c/War_Savings_Stamp_WWII.png',
        "U.S.A.",
        13.40
    );
    var stamp2 = new Stamp(
        2,
        "testiStamp 2",
        1912,
        true,
        'https://virtualstampclub.com/lloydblog/wp-content/uploads/2015/06/57-300x202.jpg',
        "U.S.A",
        3.50);
    var stamp3 = new Stamp(
        3,
        "testiStamp 3",
        1922,
        true,
        'https://previews.123rf.com/images/vicsa/vicsa1602/vicsa160200010/53419293-moscow-russia-february-03-2016-a-stamp-printed-in-ussr-russia-shows-world-war-ii-russian-heavy-tank-.jpg',
        "USSR",
        6.00);
    var stamp4 = new Stamp(
            4,
            "Commander stamp",
            2016,
            true,
            'https://i.ebayimg.com/images/g/QHMAAOSwmcRemL85/s-l1600.jpg',
            "Djibouti",
            12.00);
        

        

    stampCollection.push(stamp1,stamp2,stamp3,stamp4);
}

var addStampToCollection = (stamp) =>{
    console.log("Trying to add stamp to the collection")
    if(stamp.id === null){
        //has no id, is new stamp
        stamp.id = stampCollection.length +1;
        if(stamp.StampToConsole != null) {
            stamp.StampToConsole();
        }
        stampCollection.push(stamp)
    }
    else{
        console.log("Updating stamp")
        stamp.StampToConsole();
        //use splice
        let index = stampCollection.findIndex( x => x.id === stamp.id)
        if(index !== null){
            
           stampCollection[index] = stamp
        }
        else{
            console.log("Something went wrong when updating the stamp.")
        }
    }

} 

export default {stampCollection,initDataManager,addStampToCollection}