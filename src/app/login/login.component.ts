import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form1!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string = '';


    constructor(
        
        
        public http: HttpClient,
        private fb: FormBuilder,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        // private pingC : AppComponent
    ) { }

    

    ngOnInit() {
      this.form1 = this.formBuilder.group({
          username: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  get f() { return this.form1.controls; }
    

  testFun(e:any) {
    this.http.get('https://example.com/api/things')
    .subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }

  onSubmit(){
    this.submitted = true;
    if (this.form1.invalid) {
        return;
    }
    this.testFun('');
    alert('Ready To Submit');
  }
}