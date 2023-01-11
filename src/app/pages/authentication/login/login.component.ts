import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Login } from '../../../model/auth.state.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup | any;
  submitted = false;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    const payload = this.form.value;

    if (this.form.invalid) {
      return;
    }

    this.store.dispatch(new Login(payload)).subscribe({
      next: (res) => {
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.router.navigateByUrl(returnUrl).then((r) => {
          this.toastrService.success(res.auth.username, 'Welcome');
        });
      },
      error: (error: any) => {
        this.toastrService.error(error.message, error.error);
      },
    });
  }
}
