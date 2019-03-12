import { Component , ViewChild} from '@angular/core';
import { FormContactComponent } from './../../shared/form-contact/form-contact.component';
import { ContactListService } from './../contact-list.service';
import { ToastrService } from 'ngx-toastr';
import { StartEndEventComponent } from '../../shared/date/start-end-event/start-end-event.component';


@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent  {
  @ViewChild('formContact') formContact: FormContactComponent;
  @ViewChild('startEndEvent') startEndEvent;
  constructor(
    private contactListService: ContactListService ,
    private toastr: ToastrService
  ) { }

  setStartEnd(Date) {
   this.formContact.setDateEvent(Date);

  }
  createContact(alias: string): void {

      // this.formContact.setDateEvent(this.startEndEvent.getDateStartEnd());
      this.contactListService.addPerson(this.formContact.form.value).subscribe((data) => {
      this.showSuccess('Klient ' + data.alias + '  został dodany do listy kontaktów');
      this.reloadTab();

  },
    (e) => {console.log(e);
      this.toastr.error(e, 'Bład');
    });
  }
  showSuccess(text: string): void {
    this.toastr.success(text);
  }
  reloadTab() {
    this.contactListService.reLoadTab();

  }

}
