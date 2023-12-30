class ElectricDevice {
    constructor(name,powerConsumption){
      this.name = name
      this.PowerWt = powerConsumption
      this.power = false;
    }
    
    enable(){
      this.power = true;
      console.log(`${this.name} включено в розетку`)
    }
  
    disable(){
      this.power = false;
      console.log(`${this.name} выключено из розетки`)
    }
  
    getPower(){
      console.log(`потребляемая мощность ${this.PowerWt} Вт`)
    }
  }
  
  // класс для лампы
  
  class Lamp extends ElectricDevice{
    constructor(name, powerConsumption, material) {
       super()
       this.name = name
       this.PowerWt = powerConsumption,
       this.material = material  
      } 
  }
  
  // класс для компьютера
  
  class Computer extends ElectricDevice{
      constructor(name, powerConsumption, system) {
          super()
          this.name = name,
          this.PowerWt = powerConsumption,
          this.system = system 
      } 
    }
    
  
  const lamp = new Lamp('лампа', 70, "стекло");
  const computer = new Computer('компьютер', 600, "Windows");
  
  computer.enable()
  lamp.getPower()
  console.log(lamp)
  console.log(computer)
  computer.getPower()