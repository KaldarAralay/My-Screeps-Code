const CreepsBase = require('creeps');

class RoleClaimer extends CreepsBase {
    constructor(role = 'Claimer') {
        super(role);
    }

    run (creep) {
        
          //  if(creep.room.controller) {
    //if(creep.signController(creep.room.controller, "TWluZQ==") == ERR_NOT_IN_RANGE) {
    //    creep.moveTo(creep.room.controller);
    //}
//}
        
        
        var goodroom = 'E7N7'
        
        if (creep.room.name != goodroom){
            creep.moveTo(new RoomPosition(17, 17, goodroom), {visualizePathStyle: {stroke: '#ffffff'}});

        }else{
       


        
        
        
        if(creep.room.controller) {
    if(creep.claimController(creep.room.controller, "aGVsbG8gOyk=") == ERR_NOT_IN_RANGE) {
        
        
        
        creep.moveTo(creep.room.controller);
        
    }
}





        
       
       
      
      
     // var builds = creep.room.find(STRUCTURE_WALL); if(builds.length) { if(creep.attack(builds[0]) == ERR_NOT_IN_RANGE) { creep.moveTo(builds[0]); } }
    }
    }
    
}

module.exports = new RoleClaimer();