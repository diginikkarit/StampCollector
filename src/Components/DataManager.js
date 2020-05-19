//hold all the spamps
import {Stamp} from './Stamp'

var stampCollection = [];

function initDataManager(){
    var stamp1 = new Stamp(
        "testiStamp 1",
        1892,
        true,
        'https://upload.wikimedia.org/wikipedia/commons/1/1c/War_Savings_Stamp_WWII.png',
        "U.S.A.",
        13.40
    );
    var stamp2 = new Stamp(
        "testiStamp 2",
        1912,
        true,
        'https://virtualstampclub.com/lloydblog/wp-content/uploads/2015/06/57-300x202.jpg',
        "U.S.A",
        3.50);
    var stamp3 = new Stamp(
        "testiStamp 3",
        1922,
        true,
        'https://previews.123rf.com/images/vicsa/vicsa1602/vicsa160200010/53419293-moscow-russia-february-03-2016-a-stamp-printed-in-ussr-russia-shows-world-war-ii-russian-heavy-tank-.jpg',
        "USSR",
        6.00);
    stampCollection.push(stamp1,stamp2,stamp3);
}

export default {stampCollection,initDataManager}