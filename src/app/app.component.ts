import { Component, ViewChild, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSettingsModel, KanbanComponent, KanbanModule } from '@syncfusion/ej2-angular-kanban';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  standalone: true,
  imports: [CommonModule, KanbanModule, DropDownListModule,
    TextAreaModule],
})
export class AppComponent {
  @ViewChild('kanbanObj') kanbanObj : KanbanComponent|undefined;
  title = 'app';
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id'
};
addNewCard(): void {
  const cardDetails = {
    Id: 'Task ' + (this.localData.length+ 1).toString(), Status: 'Open', Priority: 'Normal',
    Assignee: 'Andrew Fuller', Summary: ''
  }
  this.kanbanObj?.openDialog('Add', cardDetails);
}
public statusData : string[] = ['Open', 'InProgress', 'Testing', 'Close'];
public assigneeData : string[] = [ 'Nancy Davloio', 'Andrew Fuller', 'Janet Leverling',
'Steven walker', 'Robert King', 'Margaret hamilt', 'Michael Suyama'];
public priorityData : string[] = ['Low', 'Normal', 'Critical', 'Release Breaker', 'High'];
public localData : Object[] = [
    {
      "Id": "Task 1",
      "Title": "Task - 29001",
      "Status": "Open",
      "Summary": "Analyze the new requirements gathered from the customer.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 2",
      "Title": "Task - 29002",
      "Status": "InProgress",
      "Summary": "Improve application performance",
      "Type": "Improvement",
      "Priority": "Normal",
      "Estimate": 6,
      "Assignee": "Andrew Fuller"
  },
  {
      "Id": "Task 3",
      "Title": "Task - 29003",
      "Status": "Open",
      "Summary": "Arrange a web meeting with the customer to get new requirements.",
      "Type": "Others",
      "Priority": "Critical",
      "Estimate": 5.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 4",
      "Title": "Task - 29004",
      "Status": "InProgress",
      "Summary": "Fix the issues reported in the IE browser.",
      "Type": "Bug",
      "Priority": "Critical",
      "Estimate": 2.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 5",
      "Title": "Task - 29005",
      "Status": "InProgress",
      "Summary": "Fix the issues reported by the customer.",
      "Type": "Bug",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 6",
      "Title": "Task - 29007",
      "Status": "Testing",
      "Summary": "Testing new requirements",
      "Type": "Improvement",
      "Priority": "Low",
      "Estimate": 1.5,
      "Assignee": "Robert King"
  },
  {
      "Id": "Task 7",
      "Title": "Task - 29009",
      "Status": "Open",
      "Summary": "Fix the issues reported in Safari browser.",
      "Type": "Bug",
      "Priority": "Critical",
      "Estimate": 1.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 8",
      "Title": "Task - 29010",
      "Status": "Close",
      "Summary": "Test the application in the IE browser.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 5.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 9",
      "Title": "Task - 29011",
      "Status": "Testing",
      "Summary": "Testing the issues reported by the customer.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 1,
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 10",
      "Title": "Task - 29015",
      "Status": "Open",
      "Summary": "Show the retrieved data from the server in grid control.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 5.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 11",
      "Title": "Task - 29016",
      "Status": "InProgress",
      "Summary": "Fix cannot open user's default database SQL error.",
      "Priority": "Critical",
      "Type": "Bug",
      "Estimate": 2.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 12",
      "Title": "Task - 29017",
      "Status": "InProgress",
      "Summary": "Fix the issues reported in data binding.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": "3.5",
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 13",
      "Title": "Task - 29018",
      "Status": "Close",
      "Summary": "Analyze SQL server 2008 connection.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 2,
      "Assignee": "Andrew Fuller"
  },
  {
      "Id": "Task 14",
      "Title": "Task - 29019",
      "Status": "Testing",
      "Summary": "Testing databinding issues.",
      "Type": "Story",
      "Priority": "Low",
      "Estimate": 1.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 15",
      "Title": "Task - 29020",
      "Status": "Close",
      "Summary": "Analyze grid control.",
      "Type": "Story",
      "Priority": "High",
      "Estimate": 2.5,
      "Assignee": "Margaret hamilt"
  },
  {
      "Id": "Task 16",
      "Title": "Task - 29021",
      "Status": "Close",
      "Summary": "Stored procedure for initial data binding of the grid.",
      "Type": "Others",
      "Priority": "Critical",
      "Estimate": 1.5,
      "Assignee": "Steven walker"
  },
  {
      "Id": "Task 17",
      "Title": "Task - 29022",
      "Status": "Close",
      "Summary": "Analyze stored procedures.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 5.5,
      "Assignee": "Janet Leverling"
  },
  {
      "Id": "Task 18",
      "Title": "Task - 29023",
      "Status": "Testing",
      "Summary": "Testing editing issues.",
      "Type": "Story",
      "Priority": "Critical",
      "Estimate": 1,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 19",
      "Title": "Task - 29024",
      "Status": "Testing",
      "Summary": "Test editing functionality.",
      "Type": "Story",
      "Priority": "Normal",
      "Estimate": 0.5,
      "Assignee": "Nancy Davloio"
  },
  {
      "Id": "Task 20",
      "Title": "Task - 29025",
      "Status": "Open",
      "Summary": "Enhance editing functionality.",
      "Type": "Improvement",
      "Priority": "Low",
      "Estimate": 3.5,
      "Assignee": "Andrew Fuller"
  }
  ];
}
