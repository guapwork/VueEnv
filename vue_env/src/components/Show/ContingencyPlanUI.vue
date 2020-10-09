<template>
<div>

  <!-- <emer-info></emer-info> -->
  <!-- <emer-material></emer-material> -->
  <!-- <emer-team></emer-team> -->
  <!-- <emer-com></emer-com> -->
  <control-emer-com></control-emer-com>    
  <!-- <emer-log></emer-log> -->
  <!-- <sync-demo></sync-demo> -->
</div>
</template>

<script>
import EmerInfo from "./EmergencyInfo";
import EmerMaterial from "./EmergencyMaterial";
import EmerTeam from "./EmergenyTeam";
import EmerCom from "./EmergencyCommunicate"
import EmerLog from "./EmergencyLog"
import ControlEmerCom from "../Control/EmergencyCommunicate"
export default {
  data() {
    return {
      
    };
  },
  components:{
    EmerInfo,EmerMaterial,EmerTeam,EmerCom,EmerLog,ControlEmerCom
  }
};
</script>

<style>
</style>