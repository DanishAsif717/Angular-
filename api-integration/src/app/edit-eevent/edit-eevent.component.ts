import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-eevent',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-eevent.component.html',
  styleUrl: './edit-eevent.component.css'
})
export class EditEeventComponent {
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
  this.http.get("http://localhost:5162/api/EventOrganizer/"+this.eventId).subscribe((edit: any) => {
      this.event = edit;
      console.log(edit);
})}


  getEventTypes() {
    this.http.get("http://localhost:5162/api/EventOrganizer/EventTypes").subscribe((res: any) => {
      this.eventTypes = res;
      console.log(res);

    })
  }


editEvent() 
  {
    this.http.put("http://localhost:5162/api/EventOrganizer", this.event).subscribe((res: any) => {
      if (res != null) {
        alert("Event added successfully..!")
        location.href = "/";
      } 
      else 
      {
        alert("Denied")
      }

    })
  
  }
}

