const CreepsBase = require('creeps');

class RoleAttacker extends CreepsBase {
    constructor(role = 'Attacker') {
        super(role);
    }

    run (creep) {
        
          
        
        var goodroom = 'E1N9'
                  //creep.moveTo(new RoomPosition(1, 29, goodroom), {visualizePathStyle: {stroke: '#ffffff'}});

        if (creep.room.name != goodroom){
          creep.moveTo(new RoomPosition(21, 27, goodroom), {visualizePathStyle: {stroke: '#ffffff'}});

        }else{
        
       

creep.moveTo(creep.room.find(FIND_HOSTILE_SPAWNS)[0])
        
       creep.attack(creep.room.find(FIND_HOSTILE_SPAWNS)[0])
             //   creep.attack(creep.room.find(StructureInvaderCore)[0])

      //  creep.attack(creep.room.find(FIND_HOSTILE_STRUCTURES)[0])
        
        creep.moveTo(creep.room.find(FIND_HOSTILE_CREEPS)[0])
        creep.attack(creep.room.find(FIND_HOSTILE_CREEPS)[0])
        
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


        
       
       
      
      
      var builds = creep.room.find(STRUCTURE_WALL); if(builds.length) { if(creep.attack(builds[0]) == ERR_NOT_IN_RANGE) { creep.moveTo(builds[0]); } }
    }
   }
}

module.exports = new RoleAttacker();