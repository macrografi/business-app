import { Component, OnDestroy, OnInit } from '@angular/core';
import { CardState } from '../../../state/card.state';
import { Card } from '../../../model/card';
import { Observable, Subscription } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCard, SetSelectedCard, UpdateCard } from '../../../action/card.action';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  @Select(CardState.getSelectedCard) selectedCard$: Observable<Card> | any;
  cardForm: FormGroup | any;
  editCard = false;
  private formSubscription: Subscription = new Subscription();
  constructor(private fb: FormBuilder, private store: Store, private route: ActivatedRoute, private router: Router) {
    this.createForm();
  }

  ngOnInit(): void {
    this.formSubscription.add(
      this.selectedCard$.subscribe((card: any) => {
        if (card) {
          this.cardForm.patchValue({
            id: card.id,
            userId: card.userId,
            title: card.description,
          });
          this.editCard = true;
        } else {
          this.editCard = false;
        }
      }),
    );
  }
  createForm() {
    this.cardForm = this.fb.group({
      id: [''],
      userId: ['', Validators.required],
      title: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.editCard) {
      this.formSubscription.add(
        this.store.dispatch(new UpdateCard(this.cardForm.value, this.cardForm.value.id)).subscribe(() => {
          this.clearForm();
        }),
      );
    } else {
      this.formSubscription.add(
        (this.formSubscription = this.store.dispatch(new AddCard(this.cardForm.value)).subscribe(() => {
          this.clearForm();
        })),
      );
    }
  }

  clearForm() {
    this.cardForm.reset();
    this.store.dispatch(new SetSelectedCard(null));
  }

  ngOnDestroy() {}
}
