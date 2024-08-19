import { QuestionData

 } from "./question_data";
export class QuestionDataList {
    private idMap = new Map<number, QuestionData>;
    private readonly head: QuestionData;
    private tail: QuestionData;
    private currentSelection: QuestionData;
    private count = 0;
    constructor(head: QuestionData) {
      this.head = head;
      this.tail = head;
      this.currentSelection = head;
      this.idMap.set(this.count, this.head);
      this.count++;
    }
  
    public add(data: QuestionData) {
      if (!this.tail) {
        throw new Error('add(): Malformed list, no tail');
      }
      this.tail.setNext(data);
      data.setPrev(this.tail);
      this.tail = data;
      this.idMap.set(this.count, data);
      this.count++;
    }
  
    public selectNext(): QuestionData {
      this.validateCurrentSelection();
      const next = this.currentSelection.getNext();
      this.currentSelection = next;
      return this.currentSelection;
    }
  
    public selectPrev(): QuestionData {
      this.validateCurrentSelection();
      const prev= this.currentSelection.getPrev();
      this.currentSelection = prev ?? this.currentSelection;
      return this.currentSelection;
    }
  
    public getCurrentSelection(): QuestionData {
      this.validateCurrentSelection();
      return this.currentSelection;
    }
  
    private validateCurrentSelection() {
      if (!this.currentSelection && !this.head) {
        throw new Error('validateCurrentSelection(): Malformed list, no current selection');
      } else if (!this.currentSelection) {
        this.currentSelection = this.head;
      }
    }
  
    public moveToStart() {
      this.currentSelection = this.head;
    }

    public getData(){
        return this.idMap;
    }
}