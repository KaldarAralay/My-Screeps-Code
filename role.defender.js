const CreepsBase = require('creeps');

class RoleDefender extends CreepsBase {
    constructor(role = 'Defender') {
        super(role);
    }

    run (creep) {
        
        
        
        
         const target = creep.pos.findClosestByRange(FIND_MY_CREEPS, {
    filter: function(object) {
        return object.hits < object.hitsMax;
    }
});
if(target) {
    if(creep.heal(target) == ERR_NOT_IN_RANGE) {
        creep.moveTo(target);
    }
}
        creep.moveTo(new RoomPosition(27, 27, 'E9N6'), {visualizePathStyle: {stroke: '#ffffff'}});
        creep.attack(creep.room.find(FIND_HOSTILE_SPAWNS)[0])
        
        
        //creep.moveTo(creep.room.find(FIND_HOSTILE_CREEPS)[0])
       // creep.attack(creep.room.find(FIND_HOSTILE_CREEPS)[0])
        
       
       
      
      
      var builds = creep.room.find(STRUCTURE_WALL); if(builds.length) { if(creep.attack(builds[0]) == ERR_NOT_IN_RANGE) { creep.moveTo(builds[0]); } }
    }
    
}

module.exports = new RoleDefender();