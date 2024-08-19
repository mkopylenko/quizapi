import { QuestionData

 } from "./question_data";
export class QuestionDataList {
    private idMap = new Map<number, QuestionData>;
    private readonly head: QuestionData;
    private readonly tail: QuestionData;
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
        throw new Error('Malformed list');
      }
      this.tail.setNext(data);
      data.setPrev(this.tail);
      this.idMap.set(this.count, data);
      this.count++;
    }
  
    public selectNext(): QuestionData | null {
      this.validateCurrentSelection();
      return this.currentSelection.getNext();
    }
  
    public selectPrev(): QuestionData | null {
      this.validateCurrentSelection();
      return this.currentSelection.getPrev();
    }
  
    public getCurrentSelection(): QuestionData | null {
      this.validateCurrentSelection();
      return this.currentSelection;
    }
  
    private validateCurrentSelection() {
      if (!this.currentSelection && !this.head) {
        throw new Error('Malformed list');
      } else if (!this.currentSelection) {
        this.currentSelection = this.head;
      }
    }
  
    public moveToStart() {
      this.currentSelection = this.head;
    }
  }