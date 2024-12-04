import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-delete',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event-delete.component.html',
  styleUrl: './event-delete.component.css'
})
export class EventDeleteComponent {

  eventTypes: any = [];
  event = {
    id: 0,
    customerName: "",
    noOfGuests: 1,
    eventTypeId: 0,
    date: new Date(),
  }
  eventId:any=0;

  constructor(private http: HttpClient,private route:ActivatedRoute) {
    this.getEventTypes();
    this.getEventDetails()

  }
  
getEventDetails(){
  this.eventId=this.route.snapshot.paramMap.get("id")
  // console.log(this.eventId)
  this.http.get("http://localhost:5162/api/EventOrganizer/"+this.eventId).subscribe((Delete: any) => {
      this.event = Delete;
      console.log(Delete);
})}


  getEventTypes() {
    this.http.get("http://localhost:5162/api/EventOrganizer/EventTypes").subscribe((res: any) => {
      this.eventTypes = res;
      console.log(res);

    })
  }


DeletetEvent() 
  {
    this.http.delete("http://localhost:5162/api/EventOrganizer",{body:this.event}).subscribe((res: any) => {
      if (res != null) {
        alert("Event Delete successfully..!")
        location.href = "/";
      } 
      else 
      {
        alert("Denied")
      }

    })
  
  }

}
