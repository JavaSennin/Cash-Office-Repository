import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'; 

@NgModule({
  imports: [
    FormControl,
    FormGroup, 
    FormsModule,
    ReactiveFormsModule,
    Validators
]
})

@Component({
  templateUrl: 'misallocation-correction.component.html'
})
export class MisallocationCorrectionComponent {

  MisAllCorr = new FormGroup({
    policyCode: new FormControl('', Validators.required),
    misAllId: new FormControl('', Validators.required),
    
  });

  onSubmit(){
    this.displayReport = true;
    console.table(this.MisAllCorr.value) ;
}
displayReport = false;

  editField: string;
  personList: Array<any> = [
    { id: 1, policyc: '098664832', policys: "inforce", period: '20/05/1994', payer: 'Spanish Inquisition', receiptnu: '5836757',amount:1226.23,postings:"Unposted" },
    { id: 2, policyc: '790064832', policys: "inforce", period: '20/05/1994', payer: 'Danish Inquisition', receiptnu: '06836857',amount:1226.23,postings:"Unposted" },
    { id: 3, policyc: '3969664832', policys: "lapsed", period: '20/05/1994', payer: 'Botswana Inquisition', receiptnu: '0836757',amount:1226.23,postings:"Unposted" },
    { id: 4, policyc: '594564832', policys: "terminated", period: '20/05/1994', payer: 'Spanish Inquisition', receiptnu: '2836757',amount:1226.23,postings:"Unposted" },
    { id: 5, policyc: '498664832', policys: "Suspended", period: '20/05/1994', payer: 'Spanish Inquisition', receiptnu: '4836757',amount:1226.23,postings:"Unposted" },
    
  ];

  totalAmount: number = 
    this.personList.reduce( function(accumulator, currentValue){ return accumulator +  currentValue.amount}, 0 ) ;
  

  awaitingPersonList: Array<any> = [
    { id: 6, name: 'George Vega', age: 28, companyName: 'Classical', country: 'Russia', city: 'Moscow' },
    { id: 7, name: 'Mike Low', age: 22, companyName: 'Lou', country: 'USA', city: 'Los Angeles' },
    { id: 8, name: 'John Derp', age: 36, companyName: 'Derping', country: 'USA', city: 'Chicago' },
    { id: 9, name: 'Anastasia John', age: 21, companyName: 'Ajo', country: 'Brazil', city: 'Rio' },
    { id: 10, name: 'John Maklowicz', age: 36, companyName: 'Mako', country: 'Poland', city: 'Bialystok' },
  ];

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.personList[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.personList[id]);
    this.personList.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.personList.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }

}
