import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
    selector:'add-comp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
   // constructor(private service:EmployeeService,private router:Router){}
    myallData:any[]=[];
    proId:any;
    proName:any;
    proCost:any;
    proOption:any;
    proSelect:any;
   

    pro:any=document.getElementsByName("Available");
    obj:any="";
    
    addData():any{
       this.obj="";
        for(let data of this.pro){
            if(data.checked){
            this.obj=this.obj+" "+data.value;
            }
        }
        
        this.myallData.push({proId:this.proId,proName:this.proName,proCost:this.proCost,proOption:this.proOption,proSelect:this.proSelect,abc:this.obj});
        
    }

}